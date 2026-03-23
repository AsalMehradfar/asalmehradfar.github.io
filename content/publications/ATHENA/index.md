---
title: 'ATHENA: Adaptive Test-Time Steering for Improving Count Fidelity in Diffusion Models'
share: false
# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Mohammad Shahab Sepehri
  - admin
  - Berk Tinaz
  - Salman Avestimehr
  - Mahdi Soltanolkotabi

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: "2026-03-21T00:00:00Z"

# Schedule page publish date (NOT publication's date).
# publishDate: '2025-06-06T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article']

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Text-to-image diffusion models achieve high visual fidelity but surprisingly exhibit systematic failures in numerical control when prompts specify explicit object counts. To address this limitation, we introduce ATHENA, a model-agnostic, test-time adaptive steering framework that improves object count fidelity without modifying model architectures or requiring retraining. ATHENA leverages intermediate representations during sampling to estimate object counts and applies count-aware noise corrections early in the denoising process, steering the generation trajectory before structural errors become difficult to revise. We present three progressively more advanced variants of ATHENA that trade additional computation for improved numerical accuracy, ranging from static prompt-based steering to dynamically adjusted count-aware control. Experiments on established benchmarks and a new visually and semantically complex dataset show that ATHENA consistently improves count fidelity, particularly at higher target counts, while maintaining favorable accuracy--runtime trade-offs across multiple diffusion backbones.

# Summary. An optional shortened abstract.
summary: ATHENA is a model-agnostic, training-free test-time steering framework for improving object count fidelity in text-to-image diffusion models by estimating counts during sampling and applying early corrective guidance.

tags:
  - Text-to-Image Generation
  - Diffusion Models
  - Test-Time Scaling
  - Adaptive Steering

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    arxiv: 2603.19676v1 

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/abs/2603.19676
  # - type: poster
  #   url: https://iclr.cc/virtual/2025/poster/30242
  - type: code
    url: https://github.com/MShahabSepehri/ATHENA
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
