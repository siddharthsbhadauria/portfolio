# portfolio

My personal site: https://siddharthsbhadauria.netlify.app/ (mirrored at https://siddharthsbhadauria.github.io/portfolio/).

I'm a Senior Cloud, Data & AI Engineer in London with 12+ years across GCP, AWS and Azure. The site covers my work history, certifications and the side projects below, and has a contact form.

## Projects shown on the site

| Project | What it does |
| :--- | :--- |
| [homelab-mlops](https://github.com/siddharthsbhadauria/homelab-mlops) | Anomaly detection on my NAS telemetry with scikit-learn, MLflow, FastAPI and Prometheus ([dashboard](https://siddharthsbhadauria.github.io/homelab-mlops/)) |
| [auto-datapulse](https://github.com/siddharthsbhadauria/auto-datapulse) | Collects NAS telemetry every 15 minutes into DuckDB, with a data contract and dbt models |
| [cloud-finops-rag](https://github.com/siddharthsbhadauria/cloud-finops-rag) | Daily LLM API price benchmark: 60 models, ranked by MMLU per dollar ([dashboard](https://siddharthsbhadauria.github.io/cloud-finops-rag/)) |
| [tf-cost-governor](https://github.com/siddharthsbhadauria/tf-cost-governor) | Monthly cost estimates for AWS, GCP and Azure Terraform blueprints ([dashboard](https://siddharthsbhadauria.github.io/tf-cost-governor/)) |
| [awesome-ai-discoveries](https://github.com/siddharthsbhadauria/awesome-ai-discoveries) | Bot that logs one new open-source AI repo three times a day ([directory](https://siddharthsbhadauria.github.io/awesome-ai-discoveries/)) |

## How the site is built

Plain HTML, CSS and JavaScript with no build step. All content lives in `data/portfolio_data.js`; `app.js` renders it. Pushing to `main` deploys to both GitHub Pages and Netlify.

To run it locally: `python -m http.server` and open http://localhost:8000.

## Links

- LinkedIn: https://linkedin.com/in/siddharthsbhadauria
- Credly: https://www.credly.com/users/siddharthsbhadauria/badges

## License

MIT
