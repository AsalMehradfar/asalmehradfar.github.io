---
title: 'CryptoMamba: Leveraging State Space Models for Accurate Bitcoin Price Prediction'
share: false
# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Mohammad Shahab Sepehri
  - admin
  - Mahdi Soltanolkotabi
  - Salman Avestimehr

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-06-06T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *2025 IEEE International Conference on Blockchain and Cryptocurrency*
publication_short: In *ICBC 2025*

abstract: Predicting Bitcoin price remains a challenging problem due to the high volatility and complex non-linear dynamics of cryptocurrency markets. Traditional time-series models, such as ARIMA and GARCH, and recurrent neural networks, like LSTMs, have been widely applied to this task but struggle to capture the regime shifts and long-range dependencies inherent in the data. In this work, we propose CryptoMamba, a novel Mamba-based State Space Model (SSM) architecture designed to effectively capture long-range dependencies in financial time-series data. Our experiments show that CryptoMamba not only provides more accurate predictions but also offers enhanced generalizability across different market conditions, surpassing the limitations of previous models. Coupled with trading algorithms for real-world scenarios, CryptoMamba demonstrates its practical utility by translating accurate forecasts into financial outcomes. Our findings signal a huge advantage for SSMs in stock and cryptocurrency price forecasting tasks.

# Summary. An optional shortened abstract.
summary: CryptoMamba introduces a novel Mamba-based state space model architecture for Bitcoin price prediction, demonstrating superior forecasting accuracy and trading performance over traditional and deep learning baselines by effectively capturing long-range dependencies and market volatility.

tags:
  - Bitcoin
  - Machine Learning
  - Cryptocurrency
  - State Space Models

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1109/ICBC64466.2025.11114565

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/abs/2501.01010
  # - type: poster
  #   url: https://iclr.cc/virtual/2025/poster/30242
  - type: code
    url: https://github.com/MShahabSepehri/CryptoMamba
  # - type: source
  #   url: https://ieeexplore.ieee.org/document/11114565
  # - type: dataset
  #   url: https://huggingface.co/datasets/shahab7899/MediConfusion

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

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
# slides: ""
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
