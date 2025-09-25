---
title: '🦅 FALCON: An ML Framework for Fully Automated Layout-Constrained Analog Circuit Design'
share: false
# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Xuzhe Zhao
  - Yilun Huang
  - Emir Ceyani
  - Yankai Yang
  - Shihao Han
  - Hamidreza Aghasi
  - Salman Avestimehr

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025-09-18T00:00:00Z'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *The Thirty-ninth Annual Conference on Neural Information Processing Systems (NeurIPS)*
publication_short: In *NeurIPS 2025*

abstract: Designing analog circuits from performance specifications is a complex, multi-stage process encompassing topology selection, parameter inference, and layout feasibility. We introduce FALCON, a unified machine learning framework that enables fully automated, specification-driven analog circuit synthesis through topology selection and layout-constrained optimization. Given a target performance, FALCON first selects an appropriate circuit topology using a performance-driven classifier guided by human design heuristics. Next, it employs a custom, edge-centric graph neural network trained to map circuit topology and parameters to performance, enabling gradient-based parameter inference through the learned forward model. This inference is guided by a differentiable layout cost, derived from analytical equations capturing parasitic and frequency-dependent effects, and constrained by design rules. We train and evaluate FALCON on a large-scale custom dataset of 1M analog mm-wave circuits, generated and simulated using Cadence Spectre across 20 expert-designed topologies. Through this evaluation, FALCON demonstrates >99\% accuracy in topology inference, <10\% relative error in performance prediction, and efficient layout-aware design that completes in under 1 second per instance. Together, these results position FALCON as a practical and extensible foundation model for end-to-end analog circuit design automation.

# Summary. An optional shortened abstract.
summary: We present FALCON, a fully automated machine learning framework for analog circuit design that selects topologies based on performance specifications and infers parameters to satisfy those specifications while minimizing layout cost.

tags:
  - Analog and RF Circuit Design 
  - Graph Neural Networks
  # - Gradient Reasoning 
  - Layout-Aware Optimization
  # - Design Automation 
  - Physics-Informed Machine Learning

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
# hugoblox:
#   ids:
#     doi: 10.5555/123456

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2505.21923
  - type: code
    url: https://github.com/AsalMehradfar/FALCON
  - type: dataset
    url: https://github.com/AsalMehradfar/FALCON/tree/main/dataset
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
