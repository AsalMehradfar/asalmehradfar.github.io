---
title: "Supervised Learning for Analog and RF Circuit Design: Benchmarks and Comparative Insights"
share: false
authors:
  - admin
  - Xuzhe Zhao
  - Yue Niu
  - Sara Babakniya
  - Mahdi Alesheikh
  - Hamidreza Aghasi
  - Salman Avestimehr
date: "2025-01-21T00:00:00Z"

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-03T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Automating analog and radio-frequency (RF) circuit design using machine learning (ML) significantly reduces the time and effort required for parameter optimization. This study explores supervised ML-based approaches for designing circuit parameters from performance specifications across various circuit types, including homogeneous and heterogeneous designs. By evaluating diverse ML models, from neural networks like transformers to traditional methods like random forests, we identify the best-performing models for each circuit. Our results show that simpler circuits, such as low-noise amplifiers, achieve exceptional accuracy with mean relative errors as low as 0.3\% due to their linear parameter-performance relationships. In contrast, complex circuits, like power amplifiers and voltage-controlled oscillators, present challenges due to their non-linear interactions and larger design spaces. For heterogeneous circuits, our approach achieves an 88\% reduction in errors with increased training data, with the receiver achieving a mean relative error as low as 0.23\%, showcasing the scalability and accuracy of the proposed methodology. Additionally, we provide insights into model strengths, with transformers excelling in capturing non-linear mappings and k-nearest neighbors performing robustly in moderately linear parameter spaces, especially in heterogeneous circuits with larger datasets. This work establishes a foundation for extending ML-driven design automation, enabling more efficient and scalable circuit design workflows, with open-source datasets and code to support reproducibility.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  - Analog and RF Circuit Design 
  - Design Automation
  # - Analog Radio-Frequency Circuit
  - Machine Learning
  - Multi-Level Dataset and Benchmark

featured: false

hugoblox:
  ids:
    arxiv: 2501.11839v1 

links:
  # - type: pdf
  #   url: https://arxiv.org/pdf/2501.11839
# - type: preprint
#   provider: arxiv
#   id: arXiv:2501.11839v1 
# - type: code
#   url: https://github.com/HugoBlox/hugo-blox-builder
# - type: slides
#   url: https://www.slideshare.net/
# - type: dataset
#   url: "#"
# - type: poster
#   url: "#"
# - type: source
#   url: "#"
# - type: video
#   url: https://youtube.com
# - type: custom
#   label: Custom Link
#   url: http://example.org

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  # caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work is driven by the results in my [previous AICircuit paper](/publications/AICircuit/).

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
