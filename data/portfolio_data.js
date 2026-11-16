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
    "bio": "Senior Cloud and Data Engineer with 12+ years building cloud infrastructure, data pipelines and AI platforms on Google Cloud (GCP), AWS and Microsoft Azure, mostly for banks and other regulated clients. At Deloitte I currently build GCP logging, asset inventory and alerting infrastructure for JPMorgan Chase that handles 50M+ events a day. Before that I maintained the Terraform AWS EKS modules behind 3,600+ deployments and 700+ microservices. I also co-built Deloitte's internal GenAI platform used by 75,000+ staff."
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
      "summary": "Telemetry to alert, end to end on a home NAS. auto-datapulse collects host and disk metrics every 15 minutes and models them with dbt on DuckDB; homelab-mlops builds 18 sliding-window features, trains Isolation Forest and LOF with MLflow tracking, serves scores from FastAPI in under 10 ms and opens GitHub Issues on anomalies.",
      "long_description": "Two services that share one DuckDB file on a UGREEN NAS. auto-datapulse is the data side: it collects host and disk telemetry every 15 minutes, checks each batch against a data contract and builds dbt models on DuckDB. homelab-mlops is the ML side: it reads that store, engineers sliding-window features in SQL, benchmarks anomaly models in MLflow, serves real-time scores through FastAPI with Prometheus metrics and Grafana dashboards and raises incidents as GitHub Issues.",
      "architecture": [
        "auto-datapulse: 15-minute collection, data-contract checks, dbt Core models on DuckDB",
        "homelab-mlops: 18 sliding-window features computed in DuckDB SQL",
        "Isolation Forest vs LOF benchmarked and tracked in MLflow",
        "FastAPI inference under 10 ms, Prometheus metrics, Grafana dashboards",
        "Anomalies raised as GitHub Issues with de-duplication and debounce",
        "Runs in Docker Compose under Portainer, about 450 MB RAM in total"
      ],
      "tech": [
        "DuckDB",
        "dbt Core",
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
      "tagline": "Daily LLM API price benchmark",
      "description": "GitHub Actions pipeline that pulls API prices for the top 60 LLMs from OpenRouter, checks them against a data contract, joins published MMLU scores and ranks each model in DuckDB by quality per blended dollar.",
      "long_description": "Every day a GitHub Actions job pulls current per-token prices for the top 60 models across eight providers from the OpenRouter API. A Python data contract rejects missing fields, negative prices and out-of-range scores before anything is published. DuckDB blends input and output prices 75/25 and divides MMLU by that price to score value. The results go to a static dashboard on GitHub Pages with a price-against-quality chart and a sortable table.",
      "architecture": [
        "Daily GitHub Actions cron",
        "OpenRouter models API for live prices across 8 providers",
        "Python data contract: required fields, non-negative prices, MMLU 0 to 100",
        "DuckDB: blended price (75% input, 25% output) and MMLU per dollar",
        "Static dashboard on GitHub Pages: scatter chart and sortable table"
      ],
      "tech": [
        "Python",
        "DuckDB",
        "OpenRouter API",
        "GitHub Actions",
        "GitHub Pages"
      ],
      "live_url": "https://siddharthsbhadauria.github.io/cloud-finops-rag/",
      "github_url": "https://github.com/siddharthsbhadauria/cloud-finops-rag",
      "badge": "Runs daily",
      "summary": "Daily benchmark of 60 LLM API prices across 8 providers, scored by MMLU per dollar in DuckDB and published to GitHub Pages.",
      "cadence": "runs daily"
    },
    {
      "id": "tf-cost-governor",
      "category": "homelab",
      "title": "TF-Cost-Governor",
      "tagline": "Monthly cost and guardrails for Terraform, before apply",
      "description": "GitHub Actions job that parses three Terraform blueprints (AWS EKS with GPU nodes, GCP Vertex AI with BigQuery, Azure AKS with Cosmos DB), prices every resource, records the security guardrail it enforces and totals the monthly bill in DuckDB.",
      "long_description": "Every morning a Python script reads each resource block in the AWS, GCP and Azure blueprints. It maps each one to an on-demand monthly price estimate and to the control it is written to enforce (KMS encryption, IMDSv2, private endpoints, TLS 1.2), then totals cost by cloud and by resource in DuckDB. The dashboard shows where the money goes and one way to spend less on each resource.",
      "architecture": [
        "Terraform blueprints for AWS EKS, GCP Vertex AI and Azure AKS",
        "Python parser for every resource block, no plan or apply needed",
        "Per-resource monthly price estimates and security guardrails",
        "DuckDB totals by cloud and by resource",
        "Daily GitHub Actions run publishing to GitHub Pages"
      ],
      "tech": [
        "Terraform",
        "Python",
        "DuckDB",
        "GitHub Actions",
        "GitHub Pages"
      ],
      "live_url": "https://siddharthsbhadauria.github.io/tf-cost-governor/",
      "github_url": "https://github.com/siddharthsbhadauria/tf-cost-governor",
      "badge": "Runs daily",
      "summary": "Estimated monthly cost and security guardrails for multi-cloud Terraform (AWS, GCP, Azure), totalled in DuckDB and refreshed daily on GitHub Actions.",
      "cadence": "runs daily"
    },
    {
      "id": "awesome-ai-discoveries",
      "category": "genai",
      "title": "Awesome-AI-Discoveries",
      "tagline": "A running log of open-source AI repos",
      "description": "Python bot on GitHub Actions that searches GitHub three times a day for agent, RAG and MCP repositories and logs one new find per run to a searchable directory.",
      "long_description": "Three times a day a small Python bot runs eight GitHub search queries by topic with a star floor (for example topic:rag stars:>500), sorted by most recently updated. It skips anything already logged, adds the first new repo to the README and a JSON file. A Pages deploy turns that into a directory with the latest finds, a breakdown by topic and a filterable table. 270+ repos so far.",
      "architecture": [
        "GitHub Actions cron at 00:00, 08:00 and 16:00 UTC",
        "Eight GitHub search API queries by topic with star floors",
        "One new repo per run, de-duplicated against the log",
        "Keyword-based topic categories",
        "Static directory on GitHub Pages with search and filters"
      ],
      "tech": [
        "Python",
        "GitHub API",
        "GitHub Actions",
        "GitHub Pages"
      ],
      "summary": "Bot that logs a new open-source agent, RAG or MCP repo three times a day. 270+ repos, searchable by topic and language.",
      "cadence": "runs 3× daily",
      "live_url": "https://siddharthsbhadauria.github.io/awesome-ai-discoveries/",
      "github_url": "https://github.com/siddharthsbhadauria/awesome-ai-discoveries",
      "badge": "Runs 3× daily"
    }
  ],
  "experience": [
    {
      "company": "Deloitte (Client: JPMorgan Chase & Co.)",
      "role": "Senior Cloud Infrastructure & Observability Engineer",
      "period": "London, UK | Jun 2026 - Present",
      "highlights": [
        "Built organisation-wide log routing in Terraform for audit, network flow and platform logs, fanning organisation-level sinks into 16 Pub/Sub topics that stream to the SIEM and the Kafka databus.",
        "Cut long-term log storage costs by about 94% with GCS lifecycle rules that move logs to Archive after 90 days and delete them at 540 days.",
        "Rolled out Cloud KMS HSM customer-managed keys (CMEK) with 30-day rotation across GCS, Cloud Logging, BigQuery and Pub/Sub.",
        "Designed an active/standby asset inventory export across two regions: 12 scheduled jobs a day on Cloud Run and Cloud Functions with a 2-hour freshness target.",
        "Moved the export service to Cloud Run v2 without downtime, using container digest pinning, Direct VPC egress and keyless Workload Identity Federation.",
        "Built an alert pipeline that sends Cloud Monitoring alerts to Kafka and ServiceNow through Pub/Sub, with delivery in under 60 seconds.",
        "Wrote Terraform blueprints that deploy unchanged across environments, each covered by automated BDD tests (pytest-bdd)."
      ]
    },
    {
      "company": "Career Break",
      "role": "Parental Leave",
      "period": "London, UK | Oct 2025 - May 2026",
      "highlights": [
        "Planned parental leave after the AWS EKS platform engagement ended."
      ]
    },
    {
      "company": "Deloitte (Client: JPMorgan Chase & Co.)",
      "role": "Senior Consultant, DevOps Engineer",
      "period": "London, UK | Aug 2024 - Sep 2025",
      "highlights": [
        "Maintained the core Terraform AWS EKS cluster modules and the blueprints that connect services to S3, DynamoDB, RDS, MSK, SQS and SNS, cutting provisioning time by 65%.",
        "Scaled the EKS module to 3,600+ deployments running 700+ microservices for 20+ business lines.",
        "Reworked the cluster module into a multi-tenant model with per-tenant resource allocation and isolation.",
        "Led Kubernetes upgrades from v1.19 to v1.34 with written migration guides, across 50+ production releases with no downtime.",
        "Built Python and Go test suites that validate module changes before they reach deployment."
      ]
    },
    {
      "company": "Deloitte (Internal: PairD GenAI Platform)",
      "role": "Senior Consultant",
      "period": "London, UK | May 2024 - Aug 2024",
      "highlights": [
        "Co-built Deloitte's internal AI assistant for 75,000+ staff, serving 100,000+ queries a day across OpenAI and Google Gemini models.",
        "Kept model traffic on private networks using Google Private Service Connect and custom DNS forwarding.",
        "Built RAG pipelines on Postgres pgvector and Qdrant and tuned prompt templates to improve retrieval accuracy.",
        "Converted Azure workloads to Terraform and ARM templates and deployed containers to Azure Container Apps and AKS."
      ]
    },
    {
      "company": "Deloitte (Internal: GenAI LLM Evaluation)",
      "role": "Senior Consultant",
      "period": "London, UK | Apr 2024 - May 2024",
      "highlights": [
        "Built an evaluation pipeline with DeepEval scoring answer relevancy, contextual accuracy, completeness and latency.",
        "Benchmarked Mistral 7B, Llama 3 and Gemini 1.0 Pro on Vertex AI against a standard set of business prompts.",
        "Automated metric collection and charts in Python, cutting evaluation time from 2 weeks to under 4 hours."
      ]
    },
    {
      "company": "Deloitte (Internal: DataSAFE M&A Accelerator)",
      "role": "Architect & Senior Developer",
      "period": "London, UK | Dec 2023 - Mar 2024",
      "highlights": [
        "Built processing pipelines for 10TB+ of GPG-encrypted datasets with schema validation, integrity checks and automated decryption.",
        "Wrote Python tooling that finds and masks personal data (PII) across 1,000+ database columns using Fernet encryption.",
        "Built event-driven Azure Functions that unmask datasets only for authorised consumers."
      ]
    },
    {
      "company": "Deloitte (Client: UBS AG)",
      "role": "Azure Data Engineer",
      "period": "London, UK | Jul 2023 - Aug 2023",
      "highlights": [
        "Built migration and archival pipelines moving legacy Credit Suisse application data into UBS Azure across 1,000+ systems.",
        "Tripled ingestion throughput from PostgreSQL, Sybase and Oracle with Azure Functions and Azure Data Factory pipelines.",
        "Provisioned infrastructure with Terraform and set up CI/CD in GitLab and Azure DevOps.",
        "Designed file validation, GPG encryption and archival workflows that meet financial compliance and legal hold rules."
      ]
    },
    {
      "company": "Deloitte (Client: Virgin Media O2)",
      "role": "Senior Cloud Data Engineer",
      "period": "London, UK | Jul 2022 - Apr 2023",
      "highlights": [
        "Built pipelines loading HR records for 40,000+ employees from Oracle HCM, Workday and SuccessFactors into BigQuery.",
        "Protected the data with GPG encryption, role-based access and Python scripts for automated PII masking.",
        "Automated GPG key generation and rotation with shell scripts, cutting maintenance effort by 80%."
      ]
    },
    {
      "company": "Deloitte (Client: Motor Insurers' Bureau)",
      "role": "Data Engineer",
      "period": "London, UK | Mar 2022 - May 2022",
      "highlights": [
        "Built a data quality scoring platform on Azure for the MID, CUE and MIAFTR insurance databases (35M+ records).",
        "Provisioned Azure Data Factory, Azure SQL Server, storage accounts and Informatica Secure Agents with Terraform.",
        "Configured Informatica Cloud (IICS) profiling and validation rules that produce automated quality scorecards."
      ]
    },
    {
      "company": "Infosys (Client: HSBC)",
      "role": "Senior Cloud & Data Engineer",
      "period": "London, UK / Pune, India | Jan 2015 - Nov 2021",
      "highlights": [
        "CESOP reporting: built an AWS to GCP migration proof of concept for payment reporting, with Terraform for Dataproc and Cloud Functions.",
        "Streaming: built pipelines moving 10M+ messages a day from Apache Kafka to BigQuery through GCS with Apache NiFi.",
        "Change data capture: set up IBM CDC (DB2) and Attunity Replicate (Oracle) through Kafka Connect and AWS Lambda for transfers between AWS and GCP.",
        "Legacy migration: led transformation pipelines in IBM DataStage, Hadoop, Hive, Sqoop and Oracle for the Common Data Repository migration."
      ]
    }
  ],
  "skills": [
    {
      "category": "Google Cloud",
      "items": [
        "BigQuery",
        "Pub/Sub",
        "Cloud Run",
        "Cloud Functions",
        "Cloud Scheduler",
        "Cloud Logging (Log Router",
        "sinks",
        "log buckets)",
        "Cloud Monitoring",
        "Cloud Asset Inventory",
        "Cloud Storage",
        "Cloud KMS",
        "Private Service Connect",
        "Vertex AI",
        "Artifact Registry",
        "Dataproc"
      ]
    },
    {
      "category": "AWS",
      "items": [
        "EKS",
        "S3",
        "DynamoDB",
        "RDS",
        "MSK",
        "SQS",
        "SNS",
        "Lambda"
      ]
    },
    {
      "category": "Azure",
      "items": [
        "AKS",
        "Container Apps",
        "Functions",
        "Data Factory",
        "API Management",
        "Blob Storage",
        "Cosmos DB",
        "SQL Server",
        "Key Vault",
        "Azure OpenAI"
      ]
    },
    {
      "category": "Infrastructure & DevOps",
      "items": [
        "Terraform",
        "Kubernetes",
        "Docker",
        "GitHub Actions",
        "GitLab CI/CD",
        "Azure DevOps",
        "ARM templates"
      ]
    },
    {
      "category": "Data Engineering",
      "items": [
        "Apache Kafka",
        "Kafka Connect",
        "Apache NiFi",
        "dbt Core",
        "DuckDB",
        "AbInitio",
        "IBM DataStage",
        "PostgreSQL",
        "Oracle"
      ]
    },
    {
      "category": "AI & ML",
      "items": [
        "RAG",
        "pgvector",
        "Qdrant",
        "DeepEval",
        "Gemini",
        "Llama 3",
        "Mistral 7B",
        "scikit-learn",
        "MLflow",
        "FastAPI"
      ]
    },
    {
      "category": "Security",
      "items": [
        "CMEK with Cloud KMS HSM",
        "Workload Identity Federation",
        "PII masking",
        "GPG key management"
      ]
    },
    {
      "category": "Languages & Tools",
      "items": [
        "Python",
        "Go",
        "SQL",
        "PySpark",
        "Bash",
        "pytest",
        "GitHub Copilot",
        "Claude Code"
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
      "label": "EKS cluster deployments on the Terraform module I maintained",
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
      "label": "faster EKS provisioning from the cluster module and service blueprints",
      "context": "JPMorgan Chase"
    },
    {
      "value": "4 hrs",
      "label": "LLM evaluation turnaround, down from 2 weeks, with DeepEval automation",
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
