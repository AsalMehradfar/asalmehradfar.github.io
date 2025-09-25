---
title: 'Leveraging Uncertainty Estimation for Efficient LLM Routing'
share: false
# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Tuo Zhang
  - admin
  - Dimitrios Dimitriadis
  - Salman Avestimehr

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2025-06-29T00:00:00Z'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *The Collaborative and Federated Agentic Workflows Workshop @ ICML*
publication_short: In *CFAgentic @ ICML 2025*

abstract: Deploying large language models (LLMs) in edge-cloud environments requires an efficient routing strategy to balance cost and response quality. Traditional approaches prioritize either human-preference data or accuracy metrics from benchmark datasets as routing criteria, but these methods suffer from rigidity and subjectivity. Moreover, existing routing frameworks primarily focus on accuracy and cost, neglecting response quality from a human preference perspective. In this work, we propose the Confidence-Driven LLM Router, a novel framework that leverages uncertainty estimation to optimize routing decisions. To comprehensively assess routing performance, we evaluate both system cost efficiency and response quality. In particular, we introduce the novel use of LLM-as-a-Judge to simulate human rating preferences, providing the first systematic assessment of response quality across different routing strategies. Extensive experiments on MT-Bench, GSM8K, and MMLU demonstrate that our approach outperforms state-of-the-art routing methods, achieving superior response quality while maintaining cost efficiency.

# Summary. An optional shortened abstract.
# summary: We present a multi-level benchmark dataset for AI-driven analog and radio-frequency circuit design.

tags:
  - LLM Routing
  - Collaborative Agentic Workflows

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
# hugoblox:
#   ids:
#     doi: 10.5555/123456

# Custom links
links:
  - type: pdf
    url: https://openreview.net/pdf?id=DJpEIwKJt7
  # - type: code
  #   url: https://github.com/AvestimehrResearchGroup/AICircuit
  - type: dataset
    url: https://huggingface.co/datasets/AsalMehradfar/uncertainty_0.1
  # - type: poster
  #   url: https://neurips.cc/media/PosterPDFs/NeurIPS%202024/100111.png?t=1732934030.9055893
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: https://arxiv.org/abs/2505.21923
  # - type: video
  #   url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  # caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->
<!-- 
Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
