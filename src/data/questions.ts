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
  // CLOUD CONCEPTS — 16 questions (ids 1–8 existing; 31–38 new)
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
      "Applications must run on one physical server",
      "Resources can never be removed",
      "Resources can adjust to changing demand",
      "All workloads must remain on-premises"
    ],
    correctIndex: 2,
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
      "Maintaining the cloud provider's physical network",
      "Managing customer data and access appropriately"
    ],
    correctIndex: 3,
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
      "The lowest possible storage capacity",
      "Continuous service availability with minimal interruption",
      "A requirement to shut down services daily",
      "A guarantee that software never needs updates"
    ],
    correctIndex: 1,
    explanation:
      "High availability uses suitable design and redundancy to reduce service interruption. It does not guarantee zero downtime."
  },
  {
    id: 7,
    topic: "Cloud concepts",
    question: "Which cloud expenditure model commonly replaces large upfront infrastructure purchases with usage-based payments?",
    options: [
      "Mandatory purchase of all hardware in advance",
      "Fixed spending on unused local servers only",
      "Consumption-based operational expenditure",
      "A model with no operating costs"
    ],
    correctIndex: 2,
    explanation:
      "Cloud consumption-based pricing can shift spending toward operational expenditure based on usage, although pricing models vary."
  },
  {
    id: 8,
    topic: "Cloud concepts",
    question: "What is the main purpose of cloud scalability?",
    options: [
      "To prevent all changes in workload size",
      "To remove the need for application monitoring",
      "To make every resource permanently fixed in size",
      "To adjust capacity to meet workload needs"
    ],
    correctIndex: 3,
    explanation:
      "Scalability is the ability to increase or decrease capacity to meet workload requirements."
  },
  {
    id: 31,
    topic: "Cloud concepts",
    question:
      "Which cloud service type typically provides virtual machines, storage, and networking while leaving the guest operating system and applications to the customer?",
    options: [
      "Infrastructure as a service (IaaS)",
      "Software as a service (SaaS) only",
      "A local desktop operating system license",
      "A managed email inbox with no infrastructure control"
    ],
    correctIndex: 0,
    explanation:
      "IaaS provides fundamental compute, storage, and networking building blocks. Customers usually manage the OS, middleware, and applications."
  },
  {
    id: 32,
    topic: "Cloud concepts",
    question:
      "Which cloud service type is best described as a managed platform where you deploy applications without managing the underlying servers?",
    options: [
      "Buying and racking physical servers yourself",
      "Platform as a service (PaaS)",
      "Only private on-premises mainframes",
      "Offline removable media storage"
    ],
    correctIndex: 1,
    explanation:
      "PaaS provides a managed environment for building and hosting applications so you can focus on code and configuration rather than servers."
  },
  {
    id: 33,
    topic: "Cloud concepts",
    question:
      "Which example best represents software as a service (SaaS)?",
    options: [
      "Renting only empty virtual machines with no applications",
      "Installing an operating system image on bare-metal hardware",
      "Using a fully managed productivity app such as Microsoft 365 email",
      "Cabling switches inside a customer data center"
    ],
    correctIndex: 2,
    explanation:
      "SaaS delivers ready-to-use applications over the internet. The provider manages most of the underlying stack."
  },
  {
    id: 34,
    topic: "Cloud concepts",
    question: "What does serverless computing primarily abstract away from the application developer?",
    options: [
      "The need for any application code",
      "The need for network connectivity",
      "The need for identity authentication",
      "The need to provision and manage servers for the workload"
    ],
    correctIndex: 3,
    explanation:
      "Serverless platforms run code in response to events and scale automatically. You still write application logic, but you do not manage servers."
  },
  {
    id: 35,
    topic: "Cloud concepts",
    question:
      "Which benefit of cloud services is most closely associated with designing systems that recover quickly from failures?",
    options: [
      "Reliability",
      "Permanent single-server deployment",
      "Removing all backup requirements",
      "Disabling monitoring permanently"
    ],
    correctIndex: 0,
    explanation:
      "Reliability in the cloud includes designing for fault tolerance and recovery so services continue or resume after failures."
  },
  {
    id: 36,
    topic: "Cloud concepts",
    question:
      "Which statement best describes a benefit of cloud manageability?",
    options: [
      "Cloud resources can never be monitored",
      "Providers and tools can simplify deploying, scaling, and monitoring resources",
      "Customers must always visit a physical data center to change settings",
      "Management tools only work offline"
    ],
    correctIndex: 1,
    explanation:
      "Cloud platforms provide management tools and APIs that make it easier to deploy, configure, scale, and monitor resources."
  },
  {
    id: 37,
    topic: "Cloud concepts",
    question:
      "When would a private cloud often be a more appropriate choice than a public cloud?",
    options: [
      "When unlimited free public resources are required",
      "When the organization never needs any isolation",
      "When an organization needs dedicated infrastructure for stricter control or compliance",
      "When the workload can only run without electricity"
    ],
    correctIndex: 2,
    explanation:
      "Private cloud environments are dedicated to one organization and are often chosen for greater control, isolation, or compliance needs."
  },
  {
    id: 38,
    topic: "Cloud concepts",
    question:
      "Which statement correctly compares common cloud pricing approaches?",
    options: [
      "Cloud services always cost exactly the same regardless of usage",
      "Only capital expenditure is possible in the public cloud",
      "Pricing never includes reserved or commitment-based discounts",
      "Pay-as-you-go charges for usage, while reserved options can reduce cost with a commitment"
    ],
    correctIndex: 3,
    explanation:
      "Public cloud pricing often includes pay-as-you-go rates and optional reserved or commitment-based discounts for predictable workloads."
  },

  // AZURE ARCHITECTURE AND SERVICES — 24 questions (ids 9–20 existing; 39–50 new)
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
      "A way to remove all network latency",
      "Physically separate locations with independent infrastructure",
      "A replacement for identity management",
      "A guarantee that every service is available in every zone"
    ],
    correctIndex: 1,
    explanation:
      "Availability Zones are physically separate locations within an Azure region, designed to improve resilience when supported by the service and architecture."
  },
  {
    id: 11,
    topic: "Azure architecture and services",
    question: "What is the purpose of an Azure resource group?",
    options: [
      "To replace every Azure subscription",
      "To store only Microsoft Entra user passwords",
      "To logically organize and manage related Azure resources",
      "To guarantee that resources are in separate regions"
    ],
    correctIndex: 2,
    explanation:
      "A resource group is a logical container for resources managed together. Resources in one group can have different supported locations."
  },
  {
    id: 12,
    topic: "Azure architecture and services",
    question: "Which Azure service provides virtual machines?",
    options: [
      "Azure Policy",
      "Microsoft Purview",
      "Azure Advisor",
      "Azure Virtual Machines"
    ],
    correctIndex: 3,
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
      "Azure Virtual Network",
      "Azure App Service",
      "Azure Resource Manager locks",
      "Azure Cost Management"
    ],
    correctIndex: 1,
    explanation:
      "Azure App Service is a managed platform for hosting web apps and APIs."
  },
  {
    id: 15,
    topic: "Azure architecture and services",
    question: "Which Azure storage service is best suited to storing large amounts of unstructured object data?",
    options: [
      "Azure DNS",
      "Azure Virtual Desktop",
      "Azure Blob Storage",
      "Azure Policy"
    ],
    correctIndex: 2,
    explanation:
      "Azure Blob Storage stores unstructured object data, such as documents, images, backups, and media."
  },
  {
    id: 16,
    topic: "Azure architecture and services",
    question: "Which Azure service provides managed file shares accessible through common file-sharing protocols?",
    options: [
      "Azure Functions",
      "Azure Advisor",
      "Azure Monitor alerts only",
      "Azure Files"
    ],
    correctIndex: 3,
    explanation:
      "Azure Files provides managed file shares that can be accessed using supported protocols such as SMB and, for supported configurations, NFS."
  },
  {
    id: 17,
    topic: "Azure architecture and services",
    question: "What is the main purpose of an Azure virtual network?",
    options: [
      "To provide private network connectivity for Azure resources",
      "To replace Microsoft Entra ID authentication",
      "To replace resource billing and invoices",
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
      "Azure Blob Storage",
      "Microsoft Entra ID",
      "Azure Data Box",
      "Azure Load Testing"
    ],
    correctIndex: 1,
    explanation:
      "Microsoft Entra ID provides identity and access management capabilities, including authentication and integration with access policies."
  },
  {
    id: 19,
    topic: "Azure architecture and services",
    question: "Which Azure service helps distribute incoming network traffic across backend resources?",
    options: [
      "Azure Policy",
      "Microsoft Purview",
      "Azure Load Balancer",
      "Azure Cost Management"
    ],
    correctIndex: 2,
    explanation:
      "Azure Load Balancer distributes network traffic across backend resources according to configured rules and health probes."
  },
  {
    id: 20,
    topic: "Azure architecture and services",
    question: "What is the purpose of Azure subscriptions?",
    options: [
      "To guarantee unlimited free services",
      "To replace every resource group",
      "To act only as a file storage folder",
      "To provide a boundary for resource organization, access management, and billing"
    ],
    correctIndex: 3,
    explanation:
      "Azure subscriptions help organize resources and provide scopes for access management and billing."
  },
  {
    id: 39,
    topic: "Azure architecture and services",
    question: "What is the primary purpose of Azure management groups?",
    options: [
      "To organize subscriptions into a hierarchy for governance at scale",
      "To replace virtual networks for all resources",
      "To store unstructured blob data only",
      "To provide a physical Availability Zone"
    ],
    correctIndex: 0,
    explanation:
      "Management groups sit above subscriptions so organizations can apply governance controls across many subscriptions."
  },
  {
    id: 40,
    topic: "Azure architecture and services",
    question: "What do Azure region pairs help support?",
    options: [
      "Deleting all backups automatically",
      "Planned replication and recovery strategies across paired regions",
      "Removing the need for any redundancy",
      "Guaranteeing identical pricing in every country"
    ],
    correctIndex: 1,
    explanation:
      "Many Azure regions are paired to support replication and recovery planning. Pairings and service behavior should be verified in Microsoft documentation for specific workloads."
  },
  {
    id: 41,
    topic: "Azure architecture and services",
    question:
      "Which Azure compute option is designed to automatically scale a set of identical virtual machines?",
    options: [
      "Azure DNS only",
      "Azure Policy initiatives",
      "Virtual Machine Scale Sets",
      "Resource locks"
    ],
    correctIndex: 2,
    explanation:
      "Virtual Machine Scale Sets let you create and manage a group of load-balanced VMs that can scale based on demand or a schedule."
  },
  {
    id: 42,
    topic: "Azure architecture and services",
    question: "What is Azure Virtual Desktop primarily used for?",
    options: [
      "Physical keyboard manufacturing",
      "Replacing Azure Blob Storage",
      "Managing only DNS records",
      "Delivering Windows desktops and apps from Azure to users"
    ],
    correctIndex: 3,
    explanation:
      "Azure Virtual Desktop is a desktop and app virtualization service that runs in Azure and delivers remote desktops and applications to users."
  },
  {
    id: 43,
    topic: "Azure architecture and services",
    question:
      "Which Azure networking service provides a private connection between an on-premises network and Azure that does not travel over the public internet?",
    options: [
      "Azure ExpressRoute",
      "Azure Blob hot tier only",
      "Azure Advisor recommendations",
      "Microsoft Cost Management budgets"
    ],
    correctIndex: 0,
    explanation:
      "ExpressRoute establishes a private connection to Microsoft cloud services through a connectivity provider, bypassing the public internet."
  },
  {
    id: 44,
    topic: "Azure architecture and services",
    question: "What is the purpose of Azure VPN Gateway?",
    options: [
      "To host static websites only",
      "To create encrypted tunnels between networks over the public internet",
      "To classify enterprise data catalogs",
      "To enforce Azure Policy definitions"
    ],
    correctIndex: 1,
    explanation:
      "Azure VPN Gateway sends encrypted traffic between an Azure virtual network and another network, such as an on-premises site, over the internet."
  },
  {
    id: 45,
    topic: "Azure architecture and services",
    question:
      "Which storage access tier is generally intended for data that is accessed infrequently but must remain immediately available?",
    options: [
      "Archive tier only for active transactional databases",
      "Premium SSD managed disks exclusively",
      "Cool (or cold) blob storage tiers designed for infrequent access",
      "Availability Zone fabric controllers"
    ],
    correctIndex: 2,
    explanation:
      "Cool and related infrequent-access blob tiers are optimized for data that is stored for longer periods and accessed less often, while remaining retrievable without rehydration delays required by archive."
  },
  {
    id: 46,
    topic: "Azure architecture and services",
    question:
      "Which Azure storage redundancy option keeps multiple copies of data within a single region?",
    options: [
      "Geo-zone-redundant storage exclusively across every continent",
      "Customer-managed ExpressRoute circuits",
      "Microsoft Entra Conditional Access policies",
      "Locally redundant storage (LRS) within one region"
    ],
    correctIndex: 3,
    explanation:
      "LRS replicates data three times within a single data center in a region. Other options such as ZRS, GRS, and GZRS provide different redundancy scopes."
  },
  {
    id: 47,
    topic: "Azure architecture and services",
    question:
      "Which tool is commonly used to copy blobs or files to and from Azure Storage from a command line?",
    options: [
      "AzCopy",
      "Azure Service Health only",
      "Azure Load Balancer rules",
      "Resource group locks"
    ],
    correctIndex: 0,
    explanation:
      "AzCopy is a command-line utility designed for high-performance copying of data to and from Azure Storage."
  },
  {
    id: 48,
    topic: "Azure architecture and services",
    question: "What is Azure Data Box primarily used for?",
    options: [
      "Running serverless JavaScript functions",
      "Transferring large volumes of data to Azure using a physical appliance",
      "Creating Microsoft Entra Conditional Access policies",
      "Balancing HTTP traffic across web apps"
    ],
    correctIndex: 1,
    explanation:
      "Azure Data Box provides physical transfer devices that help move large amounts of data to Azure when network transfer is impractical."
  },
  {
    id: 49,
    topic: "Azure architecture and services",
    question:
      "Which security approach assumes breach and continuously verifies identity, device health, and least-privilege access?",
    options: [
      "Flat network trust with no verification",
      "Password sharing across teams",
      "Zero Trust",
      "Disabling multifactor authentication permanently"
    ],
    correctIndex: 2,
    explanation:
      "Zero Trust is a security model that verifies explicitly, uses least privilege, and assumes breach rather than trusting based on network location alone."
  },
  {
    id: 50,
    topic: "Azure architecture and services",
    question: "What is the purpose of Microsoft Defender for Cloud?",
    options: [
      "To replace Azure Virtual Networks",
      "To provide only DNS name resolution",
      "To store archival blob data",
      "To help strengthen cloud security posture and protect workloads"
    ],
    correctIndex: 3,
    explanation:
      "Microsoft Defender for Cloud provides security posture management and threat protection capabilities for cloud environments."
  },

  // MANAGEMENT AND GOVERNANCE — 20 questions (ids 21–30 existing; 51–60 new)
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
      "Increase the physical size of a data center",
      "Manage who can perform which actions on Azure resources",
      "Replace cloud billing",
      "Compress files in Blob Storage"
    ],
    correctIndex: 1,
    explanation:
      "Azure RBAC assigns roles to identities at scopes such as management groups, subscriptions, resource groups, and resources."
  },
  {
    id: 23,
    topic: "Azure management and governance",
    question: "What does a delete lock on an Azure resource generally prevent?",
    options: [
      "All users from viewing the resource",
      "All changes to every resource in Azure",
      "Deleting the protected resource",
      "The resource from generating any costs"
    ],
    correctIndex: 2,
    explanation:
      "A CanNotDelete lock helps prevent deletion while still allowing permitted modifications. Its effect depends on the lock scope and operation."
  },
  {
    id: 24,
    topic: "Azure management and governance",
    question: "Which Azure capability helps analyze spending and identify cost trends?",
    options: [
      "Azure DNS",
      "Azure Functions",
      "Azure Files",
      "Microsoft Cost Management"
    ],
    correctIndex: 3,
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
      "Encrypt every resource automatically",
      "Attach metadata to resources for organization and reporting",
      "Replace all access control rules",
      "Guarantee a specific service-level agreement"
    ],
    correctIndex: 1,
    explanation:
      "Tags are name-value pairs used to categorize resources and support reporting, ownership tracking, and cost analysis."
  },
  {
    id: 27,
    topic: "Azure management and governance",
    question: "Which service helps discover, classify, and govern an organization's data?",
    options: [
      "Azure Load Balancer",
      "Azure Virtual Machines",
      "Microsoft Purview",
      "Azure DNS"
    ],
    correctIndex: 2,
    explanation:
      "Microsoft Purview provides data governance capabilities, including data discovery and classification through supported services and configurations."
  },
  {
    id: 28,
    topic: "Azure management and governance",
    question: "Which Azure service provides personalized recommendations for reliability, security, performance, operational excellence, and cost?",
    options: [
      "Azure Files",
      "Azure DNS",
      "Azure Virtual Network",
      "Azure Advisor"
    ],
    correctIndex: 3,
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
      "Store passwords in plain text for all users",
      "Define Azure infrastructure declaratively for repeatable deployments",
      "Replace Azure subscriptions",
      "Monitor only physical network cables"
    ],
    correctIndex: 1,
    explanation:
      "ARM templates describe Azure infrastructure and configuration declaratively, enabling consistent, repeatable deployments."
  },
  {
    id: 51,
    topic: "Azure management and governance",
    question: "What is the Azure pricing calculator used for?",
    options: [
      "Estimating the cost of planned Azure services before deployment",
      "Automatically shutting down every unpaid subscription worldwide",
      "Creating Availability Zones in unsupported regions",
      "Replacing Microsoft Entra multifactor authentication"
    ],
    correctIndex: 0,
    explanation:
      "The pricing calculator helps estimate costs for Azure services based on selected configurations and usage assumptions."
  },
  {
    id: 52,
    topic: "Azure management and governance",
    question: "Which factor commonly affects Azure costs?",
    options: [
      "The color theme of the Azure portal only",
      "Resource size, usage duration, region, and service tier choices",
      "The number of browser bookmarks a user has",
      "Whether the keyboard is wireless"
    ],
    correctIndex: 1,
    explanation:
      "Costs vary with choices such as SKU or size, how long resources run, where they are deployed, and which tier or features you enable."
  },
  {
    id: 53,
    topic: "Azure management and governance",
    question: "What is Azure Monitor primarily used for?",
    options: [
      "Designing ExpressRoute hardware",
      "Issuing SSL certificates for all websites",
      "Collecting and analyzing metrics and logs from Azure resources and applications",
      "Providing free unlimited virtual machines"
    ],
    correctIndex: 2,
    explanation:
      "Azure Monitor collects metrics and logs and supports alerting and analysis, including features such as Log Analytics and Application Insights."
  },
  {
    id: 54,
    topic: "Azure management and governance",
    question: "What does Azure Monitor Application Insights help you understand?",
    options: [
      "Physical rack layouts in Microsoft data centers",
      "Only DNS TTL values",
      "Only Blob Storage access tiers",
      "Application performance, usage, and failures"
    ],
    correctIndex: 3,
    explanation:
      "Application Insights is an application performance management feature of Azure Monitor that helps track request rates, failures, dependencies, and related telemetry."
  },
  {
    id: 55,
    topic: "Azure management and governance",
    question: "What is Azure Cloud Shell?",
    options: [
      "A browser-based shell for managing Azure with Bash or PowerShell",
      "A physical cooling system for data centers",
      "A replacement for all virtual networks",
      "A Blob Storage access tier"
    ],
    correctIndex: 0,
    explanation:
      "Azure Cloud Shell provides an authenticated, browser-accessible shell experience for managing Azure resources."
  },
  {
    id: 56,
    topic: "Azure management and governance",
    question: "How do Azure CLI and Azure PowerShell commonly help administrators?",
    options: [
      "By encrypting every public website automatically",
      "By scripting and automating Azure resource management from the command line",
      "By creating Availability Zones in every city",
      "By replacing the need for any identity authentication"
    ],
    correctIndex: 1,
    explanation:
      "Azure CLI and Azure PowerShell are command-line tools used to create, configure, and automate management of Azure resources."
  },
  {
    id: 57,
    topic: "Azure management and governance",
    question: "What is the purpose of Azure Arc?",
    options: [
      "To host only public DNS zones",
      "To replace Microsoft Cost Management",
      "To extend Azure management and governance to resources outside Azure",
      "To provide a consumer email client"
    ],
    correctIndex: 2,
    explanation:
      "Azure Arc helps bring Azure management services and governance controls to on-premises, multicloud, and edge resources."
  },
  {
    id: 58,
    topic: "Azure management and governance",
    question: "What does infrastructure as code (IaC) emphasize?",
    options: [
      "Configuring production only through undocumented manual clicks",
      "Storing secrets in public chat messages",
      "Avoiding version control for deployments",
      "Defining and deploying infrastructure through code or templates for consistency"
    ],
    correctIndex: 3,
    explanation:
      "IaC uses declarative or programmatic definitions so infrastructure can be versioned, reviewed, and deployed repeatably."
  },
  {
    id: 59,
    topic: "Azure management and governance",
    question: "What is the Azure portal?",
    options: [
      "A web-based graphical interface for creating and managing Azure resources",
      "A physical shipping container for Data Box only",
      "A programming language for ARM templates exclusively",
      "A replacement for all network firewalls"
    ],
    correctIndex: 0,
    explanation:
      "The Azure portal is a browser-based UI for building, managing, and monitoring Azure resources."
  },
  {
    id: 60,
    topic: "Azure management and governance",
    question: "What can Azure Monitor alerts do?",
    options: [
      "Permanently disable all Azure regions",
      "Notify you or trigger actions when metric or log conditions are met",
      "Replace the need for resource locks",
      "Guarantee zero cloud spending"
    ],
    correctIndex: 1,
    explanation:
      "Azure Monitor alerts evaluate metrics or logs and can notify people or start automated actions when thresholds or query conditions are met."
  }
];
