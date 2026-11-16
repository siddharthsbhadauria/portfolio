window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Siddharth Singh Bhadauria",
    "title": "Senior Cloud, Data & AI Engineer",
    "location": "London, UK",
    "experience_years": "12+",
    "email": "siddharthsbhadauria@gmail.com",
    "linkedin": "https://linkedin.com/in/siddharthsbhadauria",
    "credly": "https://www.credly.com/users/siddharthsbhadauria/badges/credly",
    "github": "https://github.com/siddharthsbhadauria",
    "resume_url": "assets/Siddharth_Singh_Bhadauria_Resume.pdf",
    "bio": "Senior Cloud, Data and AI Engineer with 12+ years of experience architecting enterprise multi-cloud platforms, Generative AI infrastructure and automated data pipelines across GCP, AWS and Azure. Certified Google Professional ML & Data Engineer."
  },
  "stats": [
    {
      "label": "Years in cloud and data engineering",
      "value": "12+"
    },
    {
      "label": "EKS deployments on my Terraform module",
      "value": "3,600+"
    },
    {
      "label": "Staff using the PairD GenAI platform",
      "value": "75,000"
    },
    {
      "label": "Cloud certifications",
      "value": "11"
    }
  ],
  "featured_projects": [
    {
      "id": "homelab-ml",
      "category": "homelab",
      "title": "Homelab ML pipeline",
      "badge": "Self-hosted · two repos",
      "summary": "Telemetry to alert, end to end on a home NAS. auto-datapulse collects host and container metrics every 15 minutes and models them with dbt on DuckDB; homelab-mlops builds 18 sliding-window features, trains Isolation Forest and LOF with MLflow tracking, serves scores from FastAPI in under 10 ms and opens GitHub Issues on anomalies.",
      "long_description": "Two services that share one DuckDB file on a UGREEN NAS. auto-datapulse is the data side: it collects hardware and container telemetry every 15 minutes, checks each batch against Great Expectations contracts and builds dbt models on DuckDB. homelab-mlops is the ML side: it reads that store, engineers sliding-window features in SQL, benchmarks anomaly models in MLflow, serves real-time scores through FastAPI with Prometheus metrics and Grafana dashboards, and raises incidents as GitHub Issues.",
      "architecture": [
        "auto-datapulse: 15-minute collection, Great Expectations contract gates, dbt Core models on DuckDB",
        "homelab-mlops: 18 sliding-window features computed in DuckDB SQL",
        "Isolation Forest vs LOF benchmarked and tracked in MLflow",
        "FastAPI inference under 10 ms, Prometheus metrics, Grafana dashboards",
        "Anomalies raised as GitHub Issues with de-duplication and debounce",
        "Runs in Docker Compose under Portainer, about 450 MB RAM in total"
      ],
      "tech": [
        "DuckDB",
        "dbt Core",
        "Great Expectations",
        "scikit-learn",
        "MLflow",
        "FastAPI",
        "Prometheus",
        "Grafana",
        "Docker Compose"
      ],
      "cadence": "self-hosted · NAS",
      "live_url": "https://siddharthsbhadauria.github.io/homelab-mlops/",
      "repos": [
        {
          "name": "auto-datapulse",
          "url": "https://github.com/siddharthsbhadauria/auto-datapulse"
        },
        {
          "name": "homelab-mlops",
          "url": "https://github.com/siddharthsbhadauria/homelab-mlops"
        }
      ],
      "github_url": "https://github.com/siddharthsbhadauria/homelab-mlops"
    },
    {
      "id": "cloud-finops-rag",
      "category": "genai",
      "title": "Cloud-FinOps-RAG",
      "tagline": "Autonomous Multi-Cloud AI Tokenomics & Price Benchmark Evaluator",
      "description": "Serverless data engineering pipeline built on GitHub Actions. Dynamically ingests tokenomics across 15+ LLM provider endpoints (Google Gemini, Anthropic Claude, OpenAI GPT-4.5/o3-mini, DeepSeek), validates schemas via Great Expectations, computes cost-per-intelligence ratios in DuckDB and generates daily RAG executive summaries.",
      "long_description": "Cloud-FinOps-RAG is an autonomous serverless benchmarking engine that continuously monitors LLM pricing, tokenomics and performance ratios. Using automated GitHub Actions workflows, it queries live pricing APIs, executes schema validation gates via Great Expectations, stores structured analytical datasets in DuckDB and generates daily RAG executive digests hosted directly on GitHub Pages.",
      "architecture": [
        "Automated daily GitHub Actions workflow execution",
        "Multi-provider API ingestion for 15+ LLM models (Gemini, Claude, GPT, DeepSeek)",
        "Great Expectations data contract and schema validation",
        "Analytical aggregation using DuckDB in Python",
        "Automated RAG synthesis & GitHub Pages deployment"
      ],
      "tech": [
        "Python",
        "DuckDB",
        "Great Expectations",
        "RAG",
        "GitHub Actions",
        "GitHub Pages"
      ],
      "live_url": "https://siddharthsbhadauria.github.io/cloud-finops-rag/",
      "github_url": "https://github.com/siddharthsbhadauria/cloud-finops-rag",
      "badge": "Serverless Cloud-Native",
      "summary": "Daily benchmark of LLM API prices across 15+ providers. Validated with Great Expectations, analysed in DuckDB, published to GitHub Pages.",
      "cadence": "runs daily"
    },
    {
      "id": "tf-cost-governor",
      "category": "homelab",
      "title": "TF-Cost-Governor",
      "tagline": "Automated Multi-Cloud Terraform FinOps & Security Advisory Engine",
      "description": "Serverless IaC governance engine built on GitHub Actions. Parses multi-cloud Terraform blueprints across AWS EKS, GCP Vertex AI and Azure AKS, evaluates cost benchmarks & Policy-as-Code rules via DuckDB and Checkov and deploys a live JetBrains Mono digital advisory dashboard.",
      "long_description": "TF-Cost-Governor is an automated multi-cloud IaC evaluation engine designed to enforce cloud cost optimization and security compliance across Terraform codebases. Running on scheduled GitHub Actions workflows, it parses HCL modules for AWS, GCP and Azure, runs in-memory SQL analytics using DuckDB, evaluates Checkov policy guardrails and renders real-time governance metrics on GitHub Pages.",
      "architecture": [
        "Multi-cloud HCL blueprints for AWS EKS, GCP Vertex AI and Azure AKS",
        "Automated daily GitHub Actions evaluation workflow",
        "DuckDB in-memory SQL analytics & Checkov Policy-as-Code scanning",
        "JetBrains Mono interactive governance dashboard on GitHub Pages"
      ],
      "tech": [
        "Terraform",
        "DuckDB",
        "Python 3.11",
        "GitHub Actions",
        "Checkov",
        "GitHub Pages"
      ],
      "live_url": "https://siddharthsbhadauria.github.io/tf-cost-governor/",
      "github_url": "https://github.com/siddharthsbhadauria/tf-cost-governor",
      "badge": "Automated IaC Engine",
      "summary": "Cost and security checks for Terraform across AWS, GCP and Azure. Checkov policies plus DuckDB cost queries, run daily on GitHub Actions.",
      "cadence": "runs daily"
    }
  ],
  "experience": [
    {
      "company": "Deloitte (Client: JPMorgan Chase & Co.)",
      "role": "Senior Cloud Infrastructure & Observability Engineer",
      "period": "London, UK | June 2026 - Present",
      "highlights": [
        "Built organisation-wide log routing pipelines in Terraform across audit, network flow and platform telemetry, fanning out organisation-level sinks into 16 Pub/Sub topics for streaming to SIEM and Kafka Databus.",
        "Cut long-term log storage costs by ~94% using GCS lifecycle policies that move data to Archive tier after 90 days and enforce deletion at 540 days.",
        "Standardised Cloud KMS HSM encryption keys (CMEK) with 30-day rotation across all storage and streaming services (GCS, Cloud Logging, BigQuery and Pub/Sub).",
        "Designed an active/standby two-region asset inventory export pipeline running 12 scheduled batch jobs daily on Cloud Run v2 and Cloud Functions Gen2, maintaining a 2-hour data freshness target.",
        "Migrated the export service to Cloud Run v2 with zero downtime using container digest validation, Direct VPC Egress and keyless Workload Identity Federation.",
        "Built an alert transport pipeline routing Cloud Monitoring alerts to Kafka and ServiceNow via Pub/Sub and time-partitioned GCS storage, keeping delivery delay under 60 seconds.",
        "Shipped 190+ production pull requests across 3 infrastructure repositories in 7 months, using environment-agnostic Terraform blueprints, automated BDD test suites and pipeline monitoring."
      ]
    },
    {
      "company": "Career Break",
      "role": "Parental Leave",
      "period": "London, UK | Oct 2025 - May 2026",
      "highlights": [
        "Took planned parental leave following the successful completion of the AWS EKS cluster deployment project for JPMorgan Chase."
      ]
    },
    {
      "company": "Deloitte (Client: JPMorgan Chase & Co.)",
      "role": "Senior Consultant & DevOps Engineer",
      "period": "London, UK | Aug 2024 - Sept 2025",
      "highlights": [
        "Created, managed and continuously improved a Terraform AWS EKS cluster module alongside a Stack microservices blueprint for JPMorgan Chase, reducing provisioning time by 65%.",
        "Scaled EKS Cluster module to over 3,600+ active deployments supporting 700+ microservices applications across 20+ Lines of Business (LoBs) across the bank.",
        "Evolved EKS cluster module into a multi-tenant deployment model and managed zero-downtime Kubernetes version upgrades (v1.19 through v1.34) supporting 50+ Production releases.",
        "Built automated testing and acceptance test suites using Python and Go to validate module enhancements on EKS clusters."
      ]
    },
    {
      "company": "Deloitte (Internal: PairD GenAI Platform)",
      "role": "Senior Consultant - AI Platform Lead",
      "period": "London, UK | May 2024 - Aug 2024",
      "highlights": [
        "Co-engineered Deloitte's internal PairD Generative AI platform serving 75,000+ employees, handling 100,000+ daily queries across OpenAI GPT and Google Gemini models.",
        "Architected secure networking using Google Private Service Connect (PSC) and custom DNS forwarding to achieve 100% network isolation with zero public internet exposure for Gemini models.",
        "Designed scalable RAG pipelines with Postgres pgvector and Qdrant; accelerated team engineering velocity by 35% using AI coding tools (GitHub Copilot, Claude Code, Google Antigravity)."
      ]
    },
    {
      "company": "Deloitte (Internal: GenAI LLM Evaluation)",
      "role": "Senior Consultant - LLM Benchmarking",
      "period": "London, UK | Apr 2024 - May 2024",
      "highlights": [
        "Built an automated LLM evaluation pipeline using Confident AI DeepEval to quantify model quality across 4 core metrics (Answer Relevancy, Contextual Accuracy, Completeness, Latency) for Mistral 7B, Llama 3 and Gemini 1.0 Pro on GCP Vertex AI.",
        "Authored Python automation scripts to harvest and visualize metrics, reducing benchmarking cycle time from 2 weeks to under 4 hours."
      ]
    },
    {
      "company": "Deloitte (Internal: DataSAFE Accelerator)",
      "role": "Architect & Senior Developer",
      "period": "London, UK | Dec 2023 - Mar 2024",
      "highlights": [
        "Designed data processing architecture for 10TB+ of GPG-encrypted datasets with 100% file integrity validation.",
        "Engineered Python scripts for PII detection and masking across 1,000+ database columns using Fernet cryptography, Azure Blob Storage, Azure Cosmos DB and Azure Key Vault."
      ]
    },
    {
      "company": "Deloitte (Client: UBS AG)",
      "role": "Azure Data Engineer",
      "period": "London, UK | Jul 2023 - Aug 2023",
      "highlights": [
        "Developed data migration and archival pipelines moving legacy Credit Suisse applications and trade data into UBS Azure cloud infrastructure across 1,000+ core systems.",
        "Built Python-backed Azure Functions and Azure Data Factory (ADF) pipelines, accelerating ingestion throughput by 3x from PostgreSQL, Sybase and Oracle databases."
      ]
    },
    {
      "company": "Deloitte (Client: Virgin Media O2)",
      "role": "Senior Cloud Data Engineer",
      "period": "London, UK | Jul 2022 - Apr 2023",
      "highlights": [
        "Architected cloud ingestion framework for 40,000+ employee HR records from Oracle HCM, Workday and SuccessFactors into GCP BigQuery.",
        "Enforced data security through GPG encryption, role-based access controls and automated key rotation shell scripts, reducing overhead by 80%."
      ]
    },
    {
      "company": "Deloitte (Client: Motor Insurers’ Bureau)",
      "role": "Data Engineer",
      "period": "London, UK | Mar 2022 - May 2022",
      "highlights": [
        "Engineered data quality scoring platform on Azure for 35M+ vehicle insurance records across MID, CUE and MIAFTR databases using Terraform, ADF, Azure SQL and IICS."
      ]
    },
    {
      "company": "Infosys (Client: HSBC)",
      "role": "Senior Cloud & Data Engineer",
      "period": "London, UK / Pune, India | Jan 2015 - Nov 2021",
      "highlights": [
        "Executed AWS to GCP migration proof-of-concept for CESOP financial payment reporting using Terraform, DataProc and Cloud Functions.",
        "Engineered near-real-time streaming processing 10M+ daily messages from Apache Kafka to BigQuery via GCS using Apache NiFi and Kafka Connect."
      ]
    }
  ],
  "skills": [
    {
      "category": "Cloud Infrastructure & DevOps",
      "items": [
        "Google Cloud Platform (GCP)",
        "Microsoft Azure",
        "Amazon Web Services (AWS)",
        "AWS EKS",
        "Multi-Cloud Unified Control Plane Architecture",
        "GCP Cloud Asset Inventory (CAI)",
        "Log Routers & Sinks & Buckets",
        "GCS Object Lifecycle Management",
        "CMEK & Cloud KMS HSM",
        "BigQuery Linked Datasets",
        "Cloud Run v2 (Binary Authorization)",
        "Cloud Functions Gen2",
        "Cloud Scheduler & Artifact Registry",
        "Terraform (IaC)",
        "Docker & Kubernetes (AKS, GKE)",
        "Google Private Service Connect",
        "GitHub Actions",
        "GitLab CI/CD"
      ]
    },
    {
      "category": "Generative AI & MLOps",
      "items": [
        "Retrieval-Augmented Generation (RAG)",
        "pgvector & Qdrant & ChromaDB",
        "Confident AI DeepEval Framework",
        "Prompt Engineering",
        "Azure OpenAI",
        "GCP Vertex AI",
        "Gemini 1.5 Pro/Flash",
        "Llama 3",
        "Mistral 7B"
      ]
    },
    {
      "category": "AI Coding Tools & Velocity",
      "items": [
        "GitHub Copilot",
        "Claude Code",
        "Google Antigravity",
        "VS Code & Git",
        "PyTest & Go Test"
      ]
    },
    {
      "category": "Data Engineering & Streaming",
      "items": [
        "Kafka Connect Source Connectors",
        "Enterprise Databus",
        "BigQuery Linked Datasets",
        "Pub/Sub Cloud Storage Subscriptions",
        "Cloud Monitoring Notification Channels",
        "DuckDB & Polars",
        "Great Expectations",
        "BigQuery & Pub/Sub",
        "Splunk Log Ingestion",
        "Azure Data Factory (ADF)",
        "dbt Core",
        "Apache Kafka & Apache NiFi"
      ]
    },
    {
      "category": "Databases & Storage",
      "items": [
        "PostgreSQL",
        "Azure SQL Server",
        "Oracle 12c & Sybase",
        "Azure Cosmos DB",
        "AWS S3 & DynamoDB & RDS",
        "Google Cloud Storage (GCS)",
        "Azure Blob Storage"
      ]
    },
    {
      "category": "Security & Compliance",
      "items": [
        "CMEK Encryption & Cloud KMS HSM",
        "Workload Identity Federation (Keyless)",
        "Kerberos-Authenticated Egress Proxy",
        "PII Identification & Fernet Masking",
        "GPG Key Management & Rotation",
        "Private DNS Forwarding",
        "Azure Key Vault"
      ]
    }
  ],
  "certifications": [
    {
      "id": "gcp-gemini-ent-agent",
      "provider": "google",
      "title": "Google Cloud Certified Partner Specialist: Gemini Enterprise Agent Development",
      "issuer": "Google Cloud",
      "date": "Nov 2026 - May 2027",
      "badge_color": "#4285F4",
      "badge_image": "assets/badges/gemini-enterprise-agent-development.png"
    },
    {
      "id": "gcp-gemini-ent-deploy",
      "provider": "google",
      "title": "Google Cloud Certified Partner Specialist: Gemini Enterprise Deployment",
      "issuer": "Google Cloud",
      "date": "Nov 2026 - May 2027",
      "badge_color": "#4285F4",
      "badge_image": "assets/badges/gemini-enterprise-deployment.png"
    },
    {
      "id": "gcp-ml-pro",
      "provider": "google",
      "title": "Google Cloud Certified: Professional Machine Learning Engineer",
      "issuer": "Google Cloud",
      "date": "2025 - 2027",
      "badge_color": "#4285F4",
      "badge_image": "assets/badges/professional-machine-learning-engineer-certificatio.png"
    },
    {
      "id": "gcp-de-pro",
      "provider": "google",
      "title": "Google Cloud Certified: Professional Data Engineer",
      "issuer": "Google Cloud",
      "date": "2025 - 2027",
      "badge_color": "#4285F4",
      "badge_image": "assets/badges/professional-data-engineer-certification.png"
    },
    {
      "id": "gcp-genai",
      "provider": "google",
      "title": "Google Cloud Certified: Generative AI Leader",
      "issuer": "Google Cloud",
      "date": "2026 - 2029",
      "badge_color": "#34A853",
      "badge_image": "assets/badges/generative-ai-leader-certification.png"
    },
    {
      "id": "gcp-data-practitioner",
      "provider": "google",
      "title": "Google Cloud Certified: Associate Data Practitioner",
      "issuer": "Google Cloud",
      "date": "2026 - 2029",
      "badge_color": "#EA4335",
      "badge_image": "assets/badges/associate-data-practitioner-certification.png"
    },
    {
      "id": "gcp-cdl",
      "provider": "google",
      "title": "Google Cloud Certified: Cloud Digital Leader",
      "issuer": "Google Cloud",
      "date": "2024 - 2027",
      "badge_color": "#FBBC05",
      "badge_image": "assets/badges/cloud-digital-leader-certification.png"
    },
    {
      "id": "aws-ai-practitioner",
      "provider": "aws",
      "title": "AWS Certified AI Practitioner",
      "issuer": "Amazon Web Services",
      "date": "2024 - 2027",
      "badge_color": "#FF9900",
      "badge_image": "assets/badges/aws-certified-ai-practitioner.png"
    },
    {
      "id": "hashicorp-tf",
      "provider": "hashicorp",
      "title": "HashiCorp Certified: Terraform Associate (003)",
      "issuer": "HashiCorp",
      "date": "2024 - 2026",
      "badge_color": "#844FBA",
      "badge_image": "assets/badges/hashicorp-certified-terraform-associate-003.png"
    },
    {
      "id": "aws-ccp",
      "provider": "aws",
      "title": "AWS Certified Cloud Practitioner",
      "issuer": "Amazon Web Services",
      "date": "2022 - 2028",
      "badge_color": "#FF9900",
      "badge_image": "assets/badges/aws-certified-cloud-practitioner.png"
    },
    {
      "id": "azure-ai900",
      "provider": "azure",
      "title": "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      "issuer": "Microsoft",
      "date": "Sep 2024",
      "badge_color": "#0089D6",
      "badge_image": "assets/badges/microsoft-certified-fundamentals.svg"
    },
    {
      "id": "azure-az900",
      "provider": "azure",
      "title": "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "issuer": "Microsoft",
      "date": "2024",
      "badge_color": "#0089D6",
      "badge_image": "assets/badges/microsoft-certified-fundamentals.svg"
    },
    {
      "id": "azure-dp900",
      "provider": "azure",
      "title": "Microsoft Certified: Data Fundamentals (DP-900)",
      "issuer": "Microsoft",
      "date": "2024",
      "badge_color": "#0089D6",
      "badge_image": "assets/badges/microsoft-certified-fundamentals.svg"
    },
    {
      "id": "oci-foundations",
      "provider": "oracle",
      "title": "Oracle Cloud Infrastructure: Certified Foundations Associate",
      "issuer": "Oracle",
      "date": "2024",
      "badge_color": "#F80000"
    }
  ],
  "outcomes": [
    {
      "value": "3,600+",
      "label": "EKS cluster deployments on a Terraform module I built and maintained",
      "context": "JPMorgan Chase"
    },
    {
      "value": "75,000",
      "label": "Deloitte staff on the PairD GenAI platform, 100,000+ queries a day",
      "context": "Deloitte"
    },
    {
      "value": "~94%",
      "label": "lower long-term log storage cost from GCS lifecycle tiering",
      "context": "JPMorgan Chase"
    },
    {
      "value": "65%",
      "label": "faster EKS provisioning with the cluster module and blueprint I created",
      "context": "JPMorgan Chase"
    },
    {
      "value": "4 hrs",
      "label": "LLM benchmarking cycle, down from 2 weeks, with DeepEval automation",
      "context": "Deloitte"
    }
  ],
  "skill_badges": [
    {
      "name": "Accelerate Development with Antigravity",
      "date": "2026-11"
    },
    {
      "name": "Add Agents to Gemini",
      "date": "2026-11"
    },
    {
      "name": "Deploy an Agent with Agent Development Kit (ADK)",
      "date": "2026-11"
    },
    {
      "name": "Deploy Gemini with Workspace Data Sources and Model Armor",
      "date": "2026-11"
    },
    {
      "name": "Evaluate and Improve Agent Development Kit Agents",
      "date": "2026-11"
    },
    {
      "name": "Govern Agent Access with Gemini platform",
      "date": "2026-11"
    },
    {
      "name": "Set Up a Google Cloud Network",
      "date": "2024-10"
    },
    {
      "name": "Automate Data Capture at Scale with Document AI",
      "date": "2024-10"
    },
    {
      "name": "Build Google Cloud Infrastructure for AWS Professionals",
      "date": "2024-10"
    },
    {
      "name": "Build Infrastructure with Terraform on Google Cloud",
      "date": "2024-10"
    },
    {
      "name": "Implement Cloud Storage and Data Protection Solutions",
      "date": "2024-10"
    },
    {
      "name": "Store, Process, and Manage Data on Google Cloud - Command Line",
      "date": "2024-10"
    },
    {
      "name": "Analyze Images with the Cloud Vision API",
      "date": "2024-10"
    },
    {
      "name": "Analyze Sentiment with Natural Language API",
      "date": "2024-10"
    },
    {
      "name": "Build Serverless Applications with Cloud Run Functions",
      "date": "2024-10"
    },
    {
      "name": "Create and Manage Cloud SQL for PostgreSQL Instances",
      "date": "2024-10"
    },
    {
      "name": "Derive Insights from BigQuery Data",
      "date": "2024-10"
    },
    {
      "name": "Implement Event-Driven Messaging and Automation Workflows",
      "date": "2024-10"
    },
    {
      "name": "Analyze Speech and Language with Google APIs",
      "date": "2024-10"
    },
    {
      "name": "Build a Data Warehouse with BigQuery",
      "date": "2024-10"
    },
    {
      "name": "Detect Manufacturing Defects using Visual Inspection AI",
      "date": "2024-10"
    },
    {
      "name": "Perform Predictive Data Analysis in BigQuery",
      "date": "2024-10"
    },
    {
      "name": "Prepare Data for ML APIs on Google Cloud",
      "date": "2024-10"
    },
    {
      "name": "Build LangChain Applications using Vertex AI",
      "date": "2024-10"
    },
    {
      "name": "Classify Images with TensorFlow on Google Cloud",
      "date": "2024-10"
    },
    {
      "name": "Create ML Models with BigQuery ML",
      "date": "2024-10"
    },
    {
      "name": "Engineer Data for Predictive Modeling with BigQuery ML",
      "date": "2024-10"
    },
    {
      "name": "Build and Deploy Machine Learning Solutions on Vertex AI",
      "date": "2024-10"
    },
    {
      "name": "Build Custom Processors with Document AI",
      "date": "2024-10"
    },
    {
      "name": "Orchestrate PaLM LLM solutions with LangChain",
      "date": "2024-10"
    },
    {
      "name": "Integrate Vertex AI Search and Conversation into Voice and Chat Apps",
      "date": "2024-10"
    },
    {
      "name": "Prompt Design in Vertex AI",
      "date": "2024-10"
    },
    {
      "name": "Use Machine Learning APIs on Google Cloud",
      "date": "2024-10"
    },
    {
      "name": "Develop Agent Search and Conversation Applications",
      "date": "2024-10"
    },
    {
      "name": "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      "date": "2024-10"
    },
    {
      "name": "Develop GenAI Apps with Gemini and Streamlit",
      "date": "2024-09"
    },
    {
      "name": "Explore Generative AI with the Vertex AI Gemini API",
      "date": "2024-09"
    },
    {
      "name": "Deploying Search and Chat Apps using Agent Builder",
      "date": "2024-09"
    },
    {
      "name": "Text Prompt Engineering Techniques",
      "date": "2024-07"
    }
  ]
};
