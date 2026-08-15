window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Siddharth Singh Bhadauria",
    "title": "Senior Cloud, Data & AI Engineer",
    "location": "London, UK",
    "experience_years": "11.5+",
    "email": "siddharthsbhadauria@gmail.com",
    "linkedin": "https://linkedin.com/in/siddharthsbhadauria",
    "credly": "https://www.credly.com/users/siddharthsbhadauria/badges/credly",
    "github": "https://github.com/siddharthsbhadauria",
    "resume_url": "assets/Siddharth_Singh_Bhadauria_Resume.pdf",
    "bio": "Senior Cloud, Data, and AI Engineer with 11.5+ years of experience architecting enterprise multi-cloud platforms, Generative AI infrastructure, and automated data pipelines across GCP, AWS, and Azure. Certified Google Professional ML & Data Engineer."
  },
  "stats": [
    { "label": "Years Experience", "value": "11.5+" },
    { "label": "Enterprise Projects", "value": "14+" },
    { "label": "Certifications", "value": "11" },
    { "label": "Open-Source Repos", "value": "6" }
  ],
  "featured_projects": [
    {
      "id": "homelab-mlops",
      "category": "homelab",
      "title": "Homelab-MLOps",
      "tagline": "Autonomous Telemetry Anomaly Detection & Model Governance Platform",
      "description": "Self-hosted MLOps platform on UGREEN NAS (32 GB RAM, Docker/Portainer). Ingests auto-datapulse DuckDB telemetry, executes 18-dimension sliding-window feature engineering, benchmarks scikit-learn Isolation Forest & LOF with MLflow tracking, serves sub-10ms FastAPI inferences with Prometheus metrics, and dispatches automated GitHub Issues incident alerts.",
      "long_description": "Homelab-MLOps is an end-to-end telemetry anomaly detection and model governance engine built for self-hosted homelab infrastructure. Consuming raw telemetry snapshots from auto-datapulse's DuckDB store, it extracts rolling window aggregations and rates of change, trains benchmarked anomaly models, tracks hyperparameter runs in MLflow, serves real-time predictions via FastAPI, and monitors latency and anomaly scores through Prometheus and Grafana dashboards.",
      "architecture": [
        "DuckDB OLAP feature store with SQL sliding-window transformations (18 features)",
        "Automated multi-model training & benchmarking (IsolationForest vs LOF)",
        "MLflow experiment tracking, artifact registry & metric curves",
        "Sub-10ms async FastAPI inference engine with Prometheus observability",
        "Automated GitHub Issues alerting & daily metric commits via REST API"
      ],
      "tech": ["DuckDB", "scikit-learn", "MLflow", "FastAPI", "Prometheus", "Grafana", "Docker Compose", "Portainer"],
      "live_url": "https://siddharthsbhadauria.github.io/homelab-mlops/",
      "github_url": "https://github.com/siddharthsbhadauria/homelab-mlops",
      "badge": "Self-Hosted MLOps"
    },
    {
      "id": "tf-cost-governor",
      "category": "homelab",
      "title": "TF-Cost-Governor",
      "tagline": "Automated Multi-Cloud Terraform FinOps & Security Advisory Engine",
      "description": "Serverless IaC governance engine built on GitHub Actions. Parses multi-cloud Terraform blueprints across AWS EKS, GCP Vertex AI, and Azure AKS, evaluates cost benchmarks & Policy-as-Code rules via DuckDB and Checkov, and deploys a live JetBrains Mono digital advisory dashboard.",
      "long_description": "TF-Cost-Governor is an automated multi-cloud IaC evaluation engine designed to enforce cloud cost optimization and security compliance across Terraform codebases. Running on scheduled GitHub Actions workflows, it parses HCL modules for AWS, GCP, and Azure, runs in-memory SQL analytics using DuckDB, evaluates Checkov policy guardrails, and renders real-time governance metrics on GitHub Pages.",
      "architecture": [
        "Multi-cloud HCL blueprints for AWS EKS, GCP Vertex AI, and Azure AKS",
        "Automated daily GitHub Actions evaluation workflow",
        "DuckDB in-memory SQL analytics & Checkov Policy-as-Code scanning",
        "JetBrains Mono interactive governance dashboard on GitHub Pages"
      ],
      "tech": ["Terraform", "DuckDB", "Python 3.11", "GitHub Actions", "Checkov", "GitHub Pages"],
      "live_url": "https://siddharthsbhadauria.github.io/tf-cost-governor/",
      "github_url": "https://github.com/siddharthsbhadauria/tf-cost-governor",
      "badge": "Automated IaC Engine"
    },
    {
      "id": "cloud-finops-rag",
      "category": "genai",
      "title": "Cloud-FinOps-RAG",
      "tagline": "Autonomous Multi-Cloud AI Tokenomics & Price Benchmark Evaluator",
      "description": "Serverless data engineering pipeline built on GitHub Actions. Dynamically ingests tokenomics across 15+ LLM provider endpoints (Google Gemini, Anthropic Claude, OpenAI GPT-4.5/o3-mini, DeepSeek), validates schemas via Great Expectations, computes cost-per-intelligence ratios in DuckDB, and generates daily RAG executive summaries.",
      "long_description": "Cloud-FinOps-RAG is an autonomous serverless benchmarking engine that continuously monitors LLM pricing, tokenomics, and performance ratios. Using automated GitHub Actions workflows, it queries live pricing APIs, executes schema validation gates via Great Expectations, stores structured analytical datasets in DuckDB, and generates daily RAG executive digests hosted directly on GitHub Pages.",
      "architecture": [
        "Automated daily GitHub Actions workflow execution",
        "Multi-provider API ingestion for 15+ LLM models (Gemini, Claude, GPT, DeepSeek)",
        "Great Expectations data contract and schema validation",
        "Analytical aggregation using DuckDB in Python",
        "Automated RAG synthesis & GitHub Pages deployment"
      ],
      "tech": ["Python", "DuckDB", "Great Expectations", "RAG", "GitHub Actions", "GitHub Pages"],
      "live_url": "https://siddharthsbhadauria.github.io/cloud-finops-rag/",
      "github_url": "https://github.com/siddharthsbhadauria/cloud-finops-rag",
      "badge": "Serverless Cloud-Native"
    },
    {
      "id": "auto-datapulse",
      "category": "homelab",
      "title": "Auto-DataPulse",
      "tagline": "UGREEN NAS Infrastructure Telemetry & Lakehouse Engine",
      "description": "Containerized homelab Lakehouse optimized for UGREEN NAS (32 GB RAM, Portainer). Ingests system metrics across 20+ containerized sensors, executes Great Expectations contract gates, models gold analytics via dbt-core + DuckDB, and automatically publishes daily infrastructure health logs to GitHub.",
      "long_description": "Auto-DataPulse transforms a homelab server into an enterprise-grade analytics platform. Deployed on a UGREEN NAS under Docker/Portainer, it collects hardware and container telemetry from 20+ services, enforces strict data quality gates using Great Expectations, runs dbt analytical data models on DuckDB, and auto-commits structured markdown metrics to GitHub.",
      "architecture": [
        "Containerized sensors deployed on Portainer / UGREEN NAS",
        "Sensor metric harvest & JSON telemetry pipeline",
        "Great Expectations data contract validation",
        "dbt-core SQL data modeling over DuckDB analytical storage",
        "Automated Git sync & public health log publishing"
      ],
      "tech": ["Docker", "Portainer", "DuckDB", "dbt Core", "Great Expectations", "Python 3.11"],
      "live_url": null,
      "github_url": "https://github.com/siddharthsbhadauria/auto-datapulse",
      "badge": "Self-Hosted Homelab"
    },
    {
      "id": "awesome-ai-discoveries",
      "category": "genai",
      "title": "Awesome-AI-Discoveries",
      "tagline": "Automated AI GitHub Repository Aggregator & Web Directory",
      "description": "Autonomous GitHub Actions bot that continuously discovers, sanitizes, categorizes, and logs trending open-source AI, RAG, and MCP repositories. Includes a dark glassmorphism Web Directory with theme switcher and quick view modal.",
      "long_description": "An autonomous AI discovery bot and web portal designed to filter noise from the open-source AI ecosystem. The automated Python bot queries GitHub REST APIs for trending repositories tagged under GenAI, RAG, LLM tooling, and Model Context Protocol (MCP), validates metadata, generates categorized Markdown digests, and presents them in an interactive glassmorphism Web Directory.",
      "architecture": [
        "Automated GitHub API scraper & repository categorization engine",
        "Metadata validation, star velocity metrics & description sanitization",
        "Automated Markdown index generation for GitHub",
        "Interactive Vanilla JS + CSS glassmorphism Web Directory"
      ],
      "tech": ["Python", "REST API", "GitHub Actions", "Vanilla JS", "Glassmorphism CSS"],
      "live_url": "https://siddharthsbhadauria.github.io/awesome-ai-discoveries/",
      "github_url": "https://github.com/siddharthsbhadauria/awesome-ai-discoveries",
      "badge": "Automated Bot"
    },
    {
      "id": "portfolio",
      "category": "web",
      "title": "Interactive Engineering Portfolio",
      "tagline": "Personal Interactive Engineering Portfolio & Live Showcase",
      "description": "Responsive glassmorphism portfolio site showcasing enterprise architecture patterns, Credly digital badges, interactive project cards, and open-source contributions. Hosted on GitHub Pages.",
      "long_description": "State-of-the-art developer showcase site designed with modern JetBrains Mono typography and digital design systems. Features dynamic dual vibrant theme engine (Light & Dark mode), search & filter matrix, interactive modals, responsive glassmorphism aesthetic, and zero-dependency Vanilla JS architecture.",
      "architecture": [
        "JetBrains Mono typography hierarchy for digital tech aesthetics",
        "Vibrant CSS custom property design system supporting dark & light themes",
        "Dynamic Vanilla JS client-side filtering, search, and state management",
        "GitHub Pages automated deployment"
      ],
      "tech": ["HTML5", "Vanilla CSS", "JavaScript", "GitHub Pages"],
      "live_url": "https://siddharthsbhadauria.github.io/portfolio/",
      "github_url": "https://github.com/siddharthsbhadauria/portfolio",
      "badge": "Portfolio Site"
    }
  ],
  "experience": [
    {
      "company": "Deloitte (Client: JPMorgan Chase & Co.)",
      "role": "Senior Cloud Infrastructure & Observability Engineer",
      "period": "London, UK | June 2026 - Present",
      "highlights": [
        "Architected and implemented the GCP observability, logging, and asset inventory module within JPMorgan Chase's ATLAS 2.0 Multi-Cloud Unified Control Plane platform.",
        "Configured GCP observability telemetry workflows, establishing Log Buckets, Log Routers, and Log Sinks to stream over 50M+ daily log events to BigQuery and Pub/Sub with sub-second ingestion latency.",
        "Configured Kafka Connect Source Connectors to stream log events from GCP Pub/Sub to enterprise Databus streams for downstream log distribution.",
        "Configured Google Cloud Storage Object Lifecycle Management rules on log buckets to automatically transition telemetry objects from hot tier storage to archive tier (Nearline, Coldline, Archive), optimizing retention costs.",
        "Enforced banking security compliance by securing GCP Logging Buckets with Customer-Managed Encryption Keys (CMEK) via Cloud KMS.",
        "Created BigQuery Linked Datasets directly connected to GCP Logging Buckets, reducing log storage overhead by 40% while enabling real-time SQL analysis without data duplication.",
        "Built automated asset inventory tracking pipelines utilizing Cloud Asset Inventory (CAI), Cloud Functions, and Cloud Scheduler for 10,000+ cloud resources."
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
        "Created, managed, and continuously improved a Terraform AWS EKS cluster module alongside a Stack microservices blueprint for JPMorgan Chase, reducing provisioning time by 65%.",
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
        "Built an automated LLM evaluation pipeline using Confident AI DeepEval to quantify model quality across 4 core metrics (Answer Relevancy, Contextual Accuracy, Completeness, Latency) for Mistral 7B, Llama 3, and Gemini 1.0 Pro on GCP Vertex AI.",
        "Authored Python automation scripts to harvest and visualize metrics, reducing benchmarking cycle time from 2 weeks to under 4 hours."
      ]
    },
    {
      "company": "Deloitte (Internal: DataSAFE Accelerator)",
      "role": "Architect & Senior Developer",
      "period": "London, UK | Dec 2023 - Mar 2024",
      "highlights": [
        "Designed data processing architecture for 10TB+ of GPG-encrypted datasets with 100% file integrity validation.",
        "Engineered Python scripts for PII detection and masking across 1,000+ database columns using Fernet cryptography, Azure Blob Storage, Azure Cosmos DB, and Azure Key Vault."
      ]
    },
    {
      "company": "Deloitte (Client: UBS AG)",
      "role": "Azure Data Engineer",
      "period": "London, UK | Jul 2023 - Aug 2023",
      "highlights": [
        "Developed data migration and archival pipelines moving legacy Credit Suisse applications and trade data into UBS Azure cloud infrastructure across 1,000+ core systems.",
        "Built Python-backed Azure Functions and Azure Data Factory (ADF) pipelines, accelerating ingestion throughput by 3x from PostgreSQL, Sybase, and Oracle databases."
      ]
    },
    {
      "company": "Deloitte (Client: Virgin Media O2)",
      "role": "Senior Cloud Data Engineer",
      "period": "London, UK | Jul 2022 - Apr 2023",
      "highlights": [
        "Architected cloud ingestion framework for 40,000+ employee HR records from Oracle HCM, Workday, and SuccessFactors into GCP BigQuery.",
        "Enforced data security through GPG encryption, role-based access controls, and automated key rotation shell scripts, reducing overhead by 80%."
      ]
    },
    {
      "company": "Deloitte (Client: Motor Insurers’ Bureau)",
      "role": "Data Engineer",
      "period": "London, UK | Mar 2021 - May 2021",
      "highlights": [
        "Engineered data quality scoring platform on Azure for 35M+ vehicle insurance records across MID, CUE, and MIAFTR databases using Terraform, ADF, Azure SQL, and IICS."
      ]
    },
    {
      "company": "HSBC",
      "role": "Senior Cloud & Data Engineer",
      "period": "London, UK / Pune, India | Jan 2015 - Nov 2021",
      "highlights": [
        "Executed AWS to GCP migration proof-of-concept for CESOP financial payment reporting using Terraform, DataProc, and Cloud Functions.",
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
        "Multi-Cloud Control Plane (ATLAS 2.0)",
        "GCP Cloud Asset Inventory (CAI)",
        "Log Routers & Sinks & Buckets",
        "GCS Object Lifecycle Management",
        "CMEK & Cloud KMS",
        "BigQuery Linked Datasets",
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
        "CMEK Encryption & Cloud KMS",
        "PII Identification & Fernet Masking",
        "GPG Key Management & Rotation",
        "Private DNS Forwarding",
        "Azure Key Vault"
      ]
    }
  ],
  "certifications": [
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
      "id": "azure-az900",
      "provider": "azure",
      "title": "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "issuer": "Microsoft",
      "date": "2024",
      "badge_color": "#0089D6"
    },
    {
      "id": "azure-dp900",
      "provider": "azure",
      "title": "Microsoft Certified: Data Fundamentals (DP-900)",
      "issuer": "Microsoft",
      "date": "2024",
      "badge_color": "#0089D6"
    },
    {
      "id": "oci-foundations",
      "provider": "oracle",
      "title": "Oracle Cloud Infrastructure: Certified Foundations Associate",
      "issuer": "Oracle",
      "date": "2024",
      "badge_color": "#F80000"
    }
  ]
};
