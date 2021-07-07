---
abstract: >
  This paper presents a Dynamic Vision Sensor (DVS) based system for reasoning
  about high speed motion. As a representative scenario, we consider the case of
  a robot at rest reacting to a small, fast approaching object at speeds higher
  than 15m/s. Since conventional image sensors at typical frame rates observe
  such an object for only a few frames, estimating the underlying motion
  presents a considerable challenge for standard computer vision systems and
  algorithms. In this paper we present a method motivated by how animals such as
  insects solve this problem with their relatively simple vision systems. Our
  solution takes the event stream from a DVS and first encodes the temporal
  events with a set of causal exponential filters across multiple time scales.
  We couple these filters with a Convolutional Neural Network (CNN) to
  efficiently extract relevant spatiotemporal features. The combined network
  learns to output both the expected time to collision of the object, as well as
  the predicted collision point on a discretized polar grid. These critical
  estimates are computed with minimal delay by the network in order to react
  appropriately to the incoming object. We highlight the results of our system
  to a toy dart moving at 23.4m/s with a 24.73{\deg} error in , 18.4mm average
  discretized radius prediction error, and 25.03% median time to collision
  prediction error.
slides: ""
url_pdf: ""
publication_types:
  - "1"
authors:
  - admin
  - Robert Ford
author_notes:
  - Equal contribution
  - Equal contribution
publication: In *International Conference on Robotics and Automation 2021*
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere
  tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin
  condimentum.
url_dataset: ""
url_project: ""
publication_short: In *ICRA*
url_source: ""
url_video: ""
title: Fast Motion Understanding with Spatiotemporal Neural Networks and Dynamic
  Vision Sensors
doi: ""
featured: true
tags: []
projects:
  - DVS
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)"
  focal_point: ""
  preview_only: false
date: 2013-07-01T00:00:00Z
url_slides: ""
publishDate: 2017-01-01T00:00:00Z
url_poster: ""
url_code: ""
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/).
