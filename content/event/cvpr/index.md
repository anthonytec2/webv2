---
abstract: >2
       High-speed perception-action systems are important for mobile robot systems to react in dynamic environments. Event-based cameras have attractive properties for these systems such as high dynamic range, efficient energy use and low latency sensing. At Samsung’s AI Center in NY (SAIC-NY) we have been working on novel DVS-based systems and algorithms to capitalize on these properties. Our previous work in this domain includes a near-chip architecture for low-complexity pedestrian detection on bandwidth-limited networks. In this talk, we will present an overview of our most recent work where the goal is to create high speed perception-action systems for collision avoidance. The introduction of robots to kitchen environments will require avoidance of incoming high-speed moving obstacles such as falling spices, liquids or sharp objects that they should avoid. Our experimental test-bed to explore these systems consists of shooting a toy-dart(22m/s) at a target located on a linear-actuator with a static event-based camera observing the motion head-on. During the dart’s flight, we developed a perception system to extract time to collision and impact location on the camera plane from the event-stream  for triggering a collision avoidance system. The entire dart flight is around 150ms, hence we also analyze the various latencies of the perception-action system and system tradeoffs for collision avoidance. As a result of this analysis, we found an initial observability latency of the dart up to 100ms, which resulted in the use of a telescopic lens to reduce this delay to 20ms. A benefit of using an event-camera in this scenario as opposed to a 60Hz frame-based imager is that the perception process can acquire ~100ms of in-focus events as opposed to one or two motion blurred frames. Inspecting our perception performance using event-data, we established our perception system to estimate time to collision within 24.73% and impact location within 18.4mm on our testing dataset. Overall, our perception system and minimal system latency allows our system to successfully avoid a fast incoming toy dart. 
slides: ""
url_pdf: ""
summary: Fast Perception Action Systems for Event-based Vision
title: 2021 Workshop on Event-based Vision
location: Virtual
date: 2030-06-19T13:00:00.000Z
date_end: 2030-06-19T21:00:00.000Z
all_day: false
event: CVPR 2021
event_url: https://tub-rip.github.io/eventvision2021/
publishDate: 2017-01-01T00:00:00.000Z
featured: true
authors:
  - Anthony Bisulco
  - Daewon Lee
  - Daniel D. Lee
  - Volkan Isler
url_video: ""
url_slides: ""
links:
  - url: https://tub-rip.github.io/eventvision2021/
    name: Workshop
    icon_pack: ai
    icon: ieee
  - url: https://www.youtube.com/watch?v=6ciNkcjV6EI
    name: Video
    icon_pack: fab
    icon: youtube
  - url: https://tub-rip.github.io/eventvision2021/slides/CVPRW21_Samsung_AIC-NY.pdf
    name: Slides
    icon: file-pdf
    icon_pack: far
tags: []
categories: []
projects: []
image:
  caption: ""
  focal_point: Right
  filename: featured.png
  alt_text: Event based camera fast motion estimation
url_code: ""
---
