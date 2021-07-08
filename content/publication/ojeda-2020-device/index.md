---
title: On-device event filtering with binary neural networks for pedestrian
  detection using neuromorphic vision sensors
publication_types:
  - "1"
authors:
  - Fernando Cladera Ojeda
  - Anthony Bisulco
  - Daniel Kepple
  - Volkan Isler
  - Daniel D Lee
publication: "*2020 IEEE International Conference on Image Processing (ICIP)*"
abstract: >
  In this work, we present a hardware-efficient architecture for pedestrian
  detection with neuromorphic Dynamic Vision Sensors (DVSs), asynchronous camera
  sensors that report discrete changes in light intensity. These imaging sensors
  have many advantages compared to traditional frame-based cameras, such as
  increased dynamic range, lower bandwidth requirements, and higher sampling
  frequency with lower power consumption. Our architecture is composed of two
  main components: an event filtering stage to denoise the input image stream
  followed by a low-complexity neural network. For the first stage, we use a
  novel point-process filter (PPF) with an adaptive temporal windowing scheme
  that enhances classification accuracy. The second stage implements a
  hardware-efficient Binary Neural Network (BNN) for classification. To
  demonstrate the reduction in complexity achieved by our architecture, we
  showcase a Field-Programmable Gate Array (FPGA) implementation of the entire
  system which obtains a 86& reduction in latency compared to current neural
  network floating-point architectures.
featured: true
image:
  filename: featured.png
date: 2020-01-01
links:
  - url: https://ieeexplore.ieee.org/document/9191148
    name: Paper
    icon_pack: ai
    icon: ieee
publishDate: 2021-07-07T10:30:11.698Z
---
