export type Topic =
  | "Cloud concepts"
  | "Azure architecture and services"
  | "Azure management and governance";

export type Question = {
  id: number;
  topic: Topic;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  // CLOUD CONCEPTS — 8 questions
  {
    id: 1,
    topic: "Cloud concepts",
    question: "What is cloud computing?",
    options: [
      "Delivering computing services over a network on demand",
      "Using only computers located in one office",
      "Storing all files on removable drives",
      "Building every application without a network"
    ],
    correctIndex: 0,
    explanation:
      "Cloud computing provides resources such as computing power, storage, and networking over a network, usually with on-demand provisioning."
  },
  {
    id: 2,
    topic: "Cloud concepts",
    question: "Which cloud model combines private infrastructure with public cloud services?",
    options: [
      "Public cloud only",
      "Hybrid cloud",
      "Private cloud only",
      "Offline cloud"
    ],
    correctIndex: 1,
    explanation:
      "A hybrid cloud combines private cloud or on-premises infrastructure with public cloud services."
  },
  {
    id: 3,
    topic: "Cloud concepts",
    question: "Which is a typical benefit of cloud elasticity?",
    options: [
      "Resources can adjust to changing demand",
      "Resources can never be removed",
      "Applications must run on one physical server",
      "All workloads must remain on-premises"
    ],
    correctIndex: 0,
    explanation:
      "Elasticity allows resources to increase or decrease as demand changes, helping workloads respond to changing needs."
  },
  {
    id: 4,
    topic: "Cloud concepts",
    question: "Under the shared responsibility model, which responsibility generally remains with the customer?",
    options: [
      "Maintaining the physical cloud data center",
      "Replacing failed physical host hardware",
      "Managing customer data and access appropriately",
      "Maintaining the cloud provider's physical network"
    ],
    correctIndex: 2,
    explanation:
      "Customers remain responsible for their data and for managing access appropriately. Other responsibilities vary by service model."
  },
  {
    id: 5,
    topic: "Cloud concepts",
    question: "Which cloud model provides services to multiple customers over shared provider infrastructure?",
    options: [
      "Public cloud",
      "Private cloud exclusively owned by one organization",
      "A disconnected local network",
      "A single-user workstation"
    ],
    correctIndex: 0,
    explanation:
      "Public cloud services are offered by a provider to customers using provider-managed infrastructure."
  },
  {
    id: 6,
    topic: "Cloud concepts",
    question: "What does high availability aim to provide?",
    options: [
      "Continuous service availability with minimal interruption",
      "The lowest possible storage capacity",
      "A requirement to shut down services daily",
      "A guarantee that software never needs updates"
    ],
    correctIndex: 0,
    explanation:
      "High availability uses suitable design and redundancy to reduce service interruption. It does not guarantee zero downtime."
  },
  {
    id: 7,
    topic: "Cloud concepts",
    question: "Which cloud expenditure model commonly replaces large upfront infrastructure purchases with usage-based payments?",
    options: [
      "Consumption-based operational expenditure",
      "Mandatory purchase of all hardware in advance",
      "Fixed spending on unused local servers only",
      "A model with no operating costs"
    ],
    correctIndex: 0,
    explanation:
      "Cloud consumption-based pricing can shift spending toward operational expenditure based on usage, although pricing models vary."
  },
  {
    id: 8,
    topic: "Cloud concepts",
    question: "What is the main purpose of cloud scalability?",
    options: [
      "To adjust capacity to meet workload needs",
      "To prevent all changes in workload size",
      "To remove the need for application monitoring",
      "To make every resource permanently fixed in size"
    ],
    correctIndex: 0,
    explanation:
      "Scalability is the ability to increase or decrease capacity to meet workload requirements."
  },

  // AZURE ARCHITECTURE AND SERVICES — 12 questions
  {
    id: 9,
    topic: "Azure architecture and services",
    question: "What is an Azure region?",
    options: [
      "A geographic area containing one or more Azure data centers",
      "A user's individual Microsoft account",
      "A billing invoice",
      "A single resource tag"
    ],
    correctIndex: 0,
    explanation:
      "An Azure region is a geographic area that contains one or more data centers connected through a low-latency network."
  },
  {
    id: 10,
    topic: "Azure architecture and services",
    question: "What do Azure Availability Zones provide within supported regions?",
    options: [
      "Physically separate locations with independent infrastructure",
      "A way to remove all network latency",
      "A replacement for identity management",
      "A guarantee that every service is available in every zone"
    ],
    correctIndex: 0,
    explanation:
      "Availability Zones are physically separate locations within an Azure region, designed to improve resilience when supported by the service and architecture."
  },
  {
    id: 11,
    topic: "Azure architecture and services",
    question: "What is the purpose of an Azure resource group?",
    options: [
      "To logically organize and manage related Azure resources",
      "To replace every Azure subscription",
      "To store only Microsoft Entra user passwords",
      "To guarantee that resources are in separate regions"
    ],
    correctIndex: 0,
    explanation:
      "A resource group is a logical container for resources managed together. Resources in one group can have different supported locations."
  },
  {
    id: 12,
    topic: "Azure architecture and services",
    question: "Which Azure service provides virtual machines?",
    options: [
      "Azure Virtual Machines",
      "Azure Policy",
      "Microsoft Purview",
      "Azure Advisor"
    ],
    correctIndex: 0,
    explanation:
      "Azure Virtual Machines provides on-demand virtualized computing infrastructure. Customers manage the guest operating system and other configuration responsibilities."
  },
  {
    id: 13,
    topic: "Azure architecture and services",
    question: "Which Azure compute service is designed to run event-driven code without requiring you to manage the underlying servers?",
    options: [
      "Azure Functions",
      "Azure Virtual Network",
      "Azure DNS",
      "Azure Files"
    ],
    correctIndex: 0,
    explanation:
      "Azure Functions is a serverless compute service commonly used for event-driven workloads."
  },
  {
    id: 14,
    topic: "Azure architecture and services",
    question: "Which Azure service is designed to host web applications without requiring you to manage the underlying virtual machines?",
    options: [
      "Azure App Service",
      "Azure Virtual Network",
      "Azure Resource Manager locks",
      "Azure Cost Management"
    ],
    correctIndex: 0,
    explanation:
      "Azure App Service is a managed platform for hosting web apps and APIs."
  },
  {
    id: 15,
    topic: "Azure architecture and services",
    question: "Which Azure storage service is best suited to storing large amounts of unstructured object data?",
    options: [
      "Azure Blob Storage",
      "Azure DNS",
      "Azure Virtual Desktop",
      "Azure Policy"
    ],
    correctIndex: 0,
    explanation:
      "Azure Blob Storage stores unstructured object data, such as documents, images, backups, and media."
  },
  {
    id: 16,
    topic: "Azure architecture and services",
    question: "Which Azure service provides managed file shares accessible through common file-sharing protocols?",
    options: [
      "Azure Files",
      "Azure Functions",
      "Azure Advisor",
      "Azure Monitor alerts only"
    ],
    correctIndex: 0,
    explanation:
      "Azure Files provides managed file shares that can be accessed using supported protocols such as SMB and, for supported configurations, NFS."
  },
  {
    id: 17,
    topic: "Azure architecture and services",
    question: "What is the main purpose of an Azure virtual network?",
    options: [
      "To provide private network connectivity for Azure resources",
      "To create quiz questions",
      "To replace resource billing",
      "To manage physical data center construction"
    ],
    correctIndex: 0,
    explanation:
      "An Azure virtual network enables private network communication between Azure resources and supports connectivity to other networks when configured."
  },
  {
    id: 18,
    topic: "Azure architecture and services",
    question: "Which Microsoft service provides cloud identity and access management for Azure?",
    options: [
      "Microsoft Entra ID",
      "Azure Blob Storage",
      "Azure Data Box",
      "Azure Load Testing"
    ],
    correctIndex: 0,
    explanation:
      "Microsoft Entra ID provides identity and access management capabilities, including authentication and integration with access policies."
  },
  {
    id: 19,
    topic: "Azure architecture and services",
    question: "Which Azure service helps distribute incoming network traffic across backend resources?",
    options: [
      "Azure Load Balancer",
      "Azure Policy",
      "Microsoft Purview",
      "Azure Cost Management"
    ],
    correctIndex: 0,
    explanation:
      "Azure Load Balancer distributes network traffic across backend resources according to configured rules and health probes."
  },
  {
    id: 20,
    topic: "Azure architecture and services",
    question: "What is the purpose of Azure subscriptions?",
    options: [
      "To provide a boundary for resource organization, access management, and billing",
      "To guarantee unlimited free services",
      "To replace every resource group",
      "To act only as a file storage folder"
    ],
    correctIndex: 0,
    explanation:
      "Azure subscriptions help organize resources and provide scopes for access management and billing."
  },

  // MANAGEMENT AND GOVERNANCE — 10 questions
  {
    id: 21,
    topic: "Azure management and governance",
    question: "What does Azure Policy help organizations do?",
    options: [
      "Create and enforce rules for resource compliance",
      "Write all application source code automatically",
      "Replace every user identity",
      "Guarantee that cloud services never fail"
    ],
    correctIndex: 0,
    explanation:
      "Azure Policy evaluates resources against organizational rules and can audit or enforce compliance through supported effects."
  },
  {
    id: 22,
    topic: "Azure management and governance",
    question: "What is the primary purpose of Azure role-based access control (Azure RBAC)?",
    options: [
      "Manage who can perform which actions on Azure resources",
      "Increase the physical size of a data center",
      "Replace cloud billing",
      "Compress files in Blob Storage"
    ],
    correctIndex: 0,
    explanation:
      "Azure RBAC assigns roles to identities at scopes such as management groups, subscriptions, resource groups, and resources."
  },
  {
    id: 23,
    topic: "Azure management and governance",
    question: "What does a delete lock on an Azure resource generally prevent?",
    options: [
      "Deleting the protected resource",
      "All users from viewing the resource",
      "All changes to every resource in Azure",
      "The resource from generating any costs"
    ],
    correctIndex: 0,
    explanation:
      "A CanNotDelete lock helps prevent deletion while still allowing permitted modifications. Its effect depends on the lock scope and operation."
  },
  {
    id: 24,
    topic: "Azure management and governance",
    question: "Which Azure capability helps analyze spending and identify cost trends?",
    options: [
      "Microsoft Cost Management",
      "Azure DNS",
      "Azure Functions",
      "Azure Files"
    ],
    correctIndex: 0,
    explanation:
      "Microsoft Cost Management provides cost analysis and tools to help monitor and manage cloud spending."
  },
  {
    id: 25,
    topic: "Azure management and governance",
    question: "What is an Azure budget primarily used for?",
    options: [
      "Tracking spending against a defined cost threshold",
      "Automatically guaranteeing that spending can never exceed a limit",
      "Creating virtual networks",
      "Granting every user administrator permissions"
    ],
    correctIndex: 0,
    explanation:
      "Budgets track spending against configured thresholds and can trigger alerts. A budget alone does not automatically stop resource usage."
  },
  {
    id: 26,
    topic: "Azure management and governance",
    question: "What is the purpose of resource tags in Azure?",
    options: [
      "Attach metadata to resources for organization and reporting",
      "Encrypt every resource automatically",
      "Replace all access control rules",
      "Guarantee a specific service-level agreement"
    ],
    correctIndex: 0,
    explanation:
      "Tags are name-value pairs used to categorize resources and support reporting, ownership tracking, and cost analysis."
  },
  {
    id: 27,
    topic: "Azure management and governance",
    question: "Which service helps discover, classify, and govern an organization's data?",
    options: [
      "Microsoft Purview",
      "Azure Load Balancer",
      "Azure Virtual Machines",
      "Azure DNS"
    ],
    correctIndex: 0,
    explanation:
      "Microsoft Purview provides data governance capabilities, including data discovery and classification through supported services and configurations."
  },
  {
    id: 28,
    topic: "Azure management and governance",
    question: "Which Azure service provides personalized recommendations for reliability, security, performance, operational excellence, and cost?",
    options: [
      "Azure Advisor",
      "Azure Files",
      "Azure DNS",
      "Azure Virtual Network"
    ],
    correctIndex: 0,
    explanation:
      "Azure Advisor analyzes resource configuration and usage to provide recommendations across several optimization areas."
  },
  {
    id: 29,
    topic: "Azure management and governance",
    question: "Where can you find information about Azure outages and service issues affecting your resources or regions?",
    options: [
      "Azure Service Health",
      "Azure Blob Storage",
      "Azure App Service deployment slots only",
      "Microsoft Purview"
    ],
    correctIndex: 0,
    explanation:
      "Azure Service Health provides personalized information about Azure service incidents, planned maintenance, and other health advisories."
  },
  {
    id: 30,
    topic: "Azure management and governance",
    question: "What is the main purpose of Azure Resource Manager templates?",
    options: [
      "Define Azure infrastructure declaratively for repeatable deployments",
      "Store passwords in plain text for all users",
      "Replace Azure subscriptions",
      "Monitor only physical network cables"
    ],
    correctIndex: 0,
    explanation:
      "ARM templates describe Azure infrastructure and configuration declaratively, enabling consistent, repeatable deployments."
  }
];
