import { useEffect, useMemo, useState } from "react";
import { questions, type Question, type Topic } from "./data/questions";
import "./App.css";

type AnswerRecord = {
  questionId: number;
  topic: Topic;
  selectedIndex: number;
  correct: boolean;
};

type SavedProgress = {
  attempts: number;
  bestScore: number;
  history: Array<{ date: string; score: number; total: number }>;
};

const topics: Topic[] = [
  "Cloud concepts",
  "Azure architecture and services",
  "Azure management and governance",
];

const STORAGE_KEY = "cloudready-az900-progress";

function loadProgress(): SavedProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: unknown = JSON.parse(saved);
      if (
        typeof parsed === "object" &&
        parsed !== null &&
        "attempts" in parsed &&
        "bestScore" in parsed &&
        "history" in parsed &&
        typeof parsed.attempts === "number" &&
        typeof parsed.bestScore === "number" &&
        Array.isArray(parsed.history)
      ) {
        return parsed as SavedProgress;
      }
    }
  } catch {
    // Recover gracefully if saved browser data is invalid.
  }

  return { attempts: 0, bestScore: 0, history: [] };
}

type Screen = "home" | "quiz" | "results";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedTopic, setSelectedTopic] = useState<Topic | "all">("all");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [progress, setProgress] = useState<SavedProgress>(loadProgress);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // The app still works if browser storage is unavailable.
    }
  }, [progress]);

  const currentQuestion = activeQuestions[questionIndex];

  const correctCount = answers.filter((answer) => answer.correct).length;
  const percentage =
    answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;

  const topicStats = useMemo(
    () =>
      topics.map((topic) => {
        const topicAnswers = answers.filter((answer) => answer.topic === topic);
        const correct = topicAnswers.filter((answer) => answer.correct).length;
        return {
          topic,
          total: topicAnswers.length,
          correct,
          percentage:
            topicAnswers.length > 0
              ? Math.round((correct / topicAnswers.length) * 100)
              : 0,
        };
      }),
    [answers],
  );

  const weakTopic = [...topicStats]
    .filter((stat) => stat.total > 0)
    .sort((a, b) => a.percentage - b.percentage)[0];

  function startQuiz(topic: Topic | "all" = selectedTopic, review = false) {
    let pool =
      topic === "all"
        ? [...questions]
        : questions.filter((question) => question.topic === topic);

    if (review) {
      const missedIds = new Set(
        answers.filter((answer) => !answer.correct).map((answer) => answer.questionId),
      );
      pool = questions.filter((question) => missedIds.has(question.id));
    }

    if (pool.length === 0) return;

    setSelectedTopic(topic);
    setActiveQuestions(pool);
    setQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setReviewMode(review);
    setScreen("quiz");
  }

  function submitAnswer(index: number) {
    if (!currentQuestion || selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setAnswers((previous) => [
      ...previous,
      {
        questionId: currentQuestion.id,
        topic: currentQuestion.topic,
        selectedIndex: index,
        correct: index === currentQuestion.correctIndex,
      },
    ]);
  }

  function finishQuiz(finalAnswers: AnswerRecord[]) {
    const correct = finalAnswers.filter((answer) => answer.correct).length;
    const total = finalAnswers.length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;

    if (!reviewMode) {
      setProgress((previous) => ({
        attempts: previous.attempts + 1,
        bestScore: Math.max(previous.bestScore, score),
        history: [
          ...previous.history,
          { date: new Date().toISOString(), score, total },
        ].slice(-20),
      }));
    }

    setScreen("results");
  }

  function nextQuestion() {
    if (selectedAnswer === null) return;

    if (questionIndex < activeQuestions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      finishQuiz(answers);
    }
  }

  function resetProgress() {
    if (!window.confirm("Clear all saved learning progress? This cannot be undone.")) {
      return;
    }
    const emptyProgress: SavedProgress = {
      attempts: 0,
      bestScore: 0,
      history: [],
    };
    setProgress(emptyProgress);
  }

  function returnHome() {
    setScreen("home");
    setAnswers([]);
    setSelectedAnswer(null);
    setReviewMode(false);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={returnHome} aria-label="CloudReady home">
          <span className="brand-mark">C</span>
          <span>CloudReady<span className="brand-light"> AZ-900</span></span>
        </button>
        <span className="unofficial">Independent study project</span>
      </header>

      <main className="main-content">
        {screen === "home" && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="eyebrow">AZURE FUNDAMENTALS · PRACTICE & LEARN</span>
                <h1>Build your cloud knowledge, one question at a time.</h1>
                <p>
                  Practice core Azure concepts, understand every answer, and
                  discover which topics deserve more attention.
                </p>
                <button className="primary-button" onClick={() => startQuiz()}>
                  Start practising <span aria-hidden="true">→</span>
                </button>
                <p className="hero-note">60 original practice questions · No account required</p>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="cloud-symbol">☁</div>
                <div className="floating-card card-one">01 <span>Learn</span></div>
                <div className="floating-card card-two">02 <span>Practice</span></div>
                <div className="floating-card card-three">03 <span>Improve</span></div>
              </div>
            </section>

            <section className="section-block">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">YOUR LEARNING PATH</span>
                  <h2>Choose a study area</h2>
                </div>
                <span className="muted-text">60 questions total</span>
              </div>
              <div className="topic-grid">
                <button
                  className={`topic-card ${selectedTopic === "all" ? "topic-selected" : ""}`}
                  onClick={() => setSelectedTopic("all")}
                >
                  <span className="topic-icon">✦</span>
                  <span className="topic-card-title">All topics</span>
                  <span className="topic-description">A complete practice session</span>
                  <span className="topic-count">60 questions</span>
                </button>
                {topics.map((topic, index) => (
                  <button
                    className={`topic-card ${selectedTopic === topic ? "topic-selected" : ""}`}
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    <span className="topic-icon">{["☁", "⌘", "◇"][index]}</span>
                    <span className="topic-card-title">{topic}</span>
                    <span className="topic-description">
                      {[
                        "Cloud models and benefits",
                        "Core Azure services and structure",
                        "Security, cost and governance",
                      ][index]}
                    </span>
                    <span className="topic-count">
                      {questions.filter((question) => question.topic === topic).length} questions
                    </span>
                  </button>
                ))}
              </div>
              <button className="primary-button topic-start" onClick={() => startQuiz()}>
                Practise {selectedTopic === "all" ? "all topics" : selectedTopic}
                <span aria-hidden="true"> →</span>
              </button>
            </section>

            <section className="progress-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">YOUR JOURNEY</span>
                  <h2>Learning progress</h2>
                </div>
                {progress.attempts > 0 && (
                  <button className="text-button" onClick={resetProgress}>Reset progress</button>
                )}
              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-label">QUIZ ATTEMPTS</span>
                  <strong>{progress.attempts}</strong>
                  <span className="stat-caption">Completed sessions</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">PERSONAL BEST</span>
                  <strong>{progress.bestScore}%</strong>
                  <span className="stat-caption">Highest session score</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">LAST SCORE</span>
                  <strong>
                    {progress.history.length > 0
                      ? `${progress.history[progress.history.length - 1].score}%`
                      : "—"}
                  </strong>
                  <span className="stat-caption">Most recent completed quiz</span>
                </div>
              </div>
              {progress.attempts === 0 && (
                <p className="empty-progress">
                  Your progress will appear here after you complete your first quiz.
                </p>
              )}
            </section>
          </>
        )}

        {screen === "quiz" && currentQuestion && (
          <section className="quiz-panel">
            <div className="quiz-topline">
              <button className="text-button" onClick={returnHome}>← Exit quiz</button>
              <span className="quiz-topic">{currentQuestion.topic}</span>
            </div>
            <div className="question-progress-label">
              <span>QUESTION {questionIndex + 1} OF {activeQuestions.length}</span>
              <span>{Math.round(((questionIndex + 1) / activeQuestions.length) * 100)}%</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${((questionIndex + 1) / activeQuestions.length) * 100}%` }}
              />
            </div>
            <div className="question-card">
              <span className="eyebrow">{reviewMode ? "REVIEW MISSED QUESTIONS" : "TEST YOUR KNOWLEDGE"}</span>
              <h1>{currentQuestion.question}</h1>
              <p className="answer-instruction">Choose the best answer.</p>
              <div className="answer-list">
                {currentQuestion.options.map((option, index) => {
                  let className = "answer-option";
                  if (selectedAnswer !== null && index === currentQuestion.correctIndex) {
                    className += " answer-correct";
                  } else if (selectedAnswer === index) {
                    className += " answer-incorrect";
                  }
                  return (
                    <button
                      key={option}
                      className={className}
                      onClick={() => submitAnswer(index)}
                      disabled={selectedAnswer !== null}
                      aria-pressed={selectedAnswer === index}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      <span>{option}</span>
                      {selectedAnswer !== null && index === currentQuestion.correctIndex && (
                        <span className="answer-mark" aria-label="Correct answer">✓</span>
                      )}
                      {selectedAnswer === index && index !== currentQuestion.correctIndex && (
                        <span className="answer-mark" aria-label="Your answer">×</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div
                  className={`feedback-panel ${selectedAnswer === currentQuestion.correctIndex ? "feedback-good" : "feedback-review"}`}
                  role="status"
                >
                  <strong>
                    {selectedAnswer === currentQuestion.correctIndex
                      ? "Correct — well done!"
                      : "Not quite. Let's learn from it."}
                  </strong>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              <div className="quiz-footer">
                <span className="muted-text">
                  {answers.filter((answer) => answer.correct).length} correct so far
                </span>
                <button
                  className="primary-button"
                  onClick={nextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {questionIndex === activeQuestions.length - 1 ? "View results" : "Next question"}
                  <span aria-hidden="true"> →</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {screen === "results" && (
          <section className="results-panel">
            <div className="results-heading">
              <span className="eyebrow">SESSION COMPLETE</span>
              <h1>{percentage >= 80 ? "Excellent progress!" : "Every question is a chance to learn."}</h1>
              <p>Review your performance and choose what to practise next.</p>
            </div>
            <div className="score-card">
              <div className="score-circle">
                <strong>{percentage}%</strong>
                <span>YOUR SCORE</span>
              </div>
              <div className="score-details">
                <h2>{correctCount} out of {answers.length} correct</h2>
                <p>
                  {percentage >= 80
                    ? "Strong work. Keep practising to reinforce your knowledge."
                    : "Review the explanations and try again to strengthen your understanding."}
                </p>
                <div className="score-track">
                  <div className="progress-fill" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>

            <div className="section-heading results-section-heading">
              <div>
                <span className="eyebrow">PERFORMANCE BREAKDOWN</span>
                <h2>Results by topic</h2>
              </div>
            </div>
            <div className="topic-results">
              {topicStats.map((stat) => (
                <div className="topic-result-row" key={stat.topic}>
                  <div className="topic-result-copy">
                    <strong>{stat.topic}</strong>
                    <span>{stat.correct} correct out of {stat.total} answered</span>
                  </div>
                  <div className="topic-result-score">
                    <strong>{stat.total > 0 ? `${stat.percentage}%` : "—"}</strong>
                    <div className="score-track">
                      <div className="progress-fill" style={{ width: `${stat.percentage}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {weakTopic && (
              <div className="recommendation">
                <span className="recommendation-icon">✦</span>
                <div>
                  <strong>Your recommended focus</strong>
                  <p>
                    {weakTopic.topic} had your lowest score in this session.
                    Try a focused practice round to strengthen this area.
                  </p>
                  <button
                    className="text-button"
                    onClick={() => startQuiz(weakTopic.topic)}
                  >
                    Practise this topic →
                  </button>
                </div>
              </div>
            )}

            {answers.some((answer) => !answer.correct) && (
              <div className="missed-section">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">LEARN FROM YOUR ANSWERS</span>
                    <h2>Questions to review</h2>
                  </div>
                </div>
                {answers.filter((answer) => !answer.correct).map((answer) => {
                  const question = questions.find((item) => item.id === answer.questionId);
                  if (!question) return null;
                  return (
                    <div className="missed-question" key={answer.questionId}>
                      <strong>{question.question}</strong>
                      <p>Your answer: {question.options[answer.selectedIndex]}</p>
                      <p className="correct-answer-text">
                        Correct answer: {question.options[question.correctIndex]}
                      </p>
                      <p>{question.explanation}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="results-actions">
              <button className="primary-button" onClick={() => startQuiz("all")}>
                Try all questions again →
              </button>
              {answers.some((answer) => !answer.correct) && (
                <button className="secondary-button" onClick={() => startQuiz("all", true)}>
                  Retry missed questions
                </button>
              )}
              <button className="secondary-button" onClick={returnHome}>Back to home</button>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>CloudReady AZ-900 · Independent learning project</p>
        <p>
          Unofficial study material. Not affiliated with or endorsed by Microsoft.
          Always consult the current official AZ-900 study guide.
        </p>
      </footer>
    </div>
  );
}

export default App;
