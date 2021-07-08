---
title: Near-chip Dynamic Vision Filtering for Low-Bandwidth Pedestrian Detection
publication_types:
  - "1"
authors:
  - Anthony Bisulco
  - Fernando Cladera Ojeda
  - Volkan Isler
  - Daniel Dongyuel Lee
publication: "*2020 IEEE Computer Society Annual Symposium on VLSI (ISVLSI)*"
abstract: >
  This paper presents a novel end-to-end system for pedestrian detection using
  Dynamic Vision Sensors (DVSs). We target applications where multiple sensors
  transmit data to a local processing unit, which executes a detection
  algorithm. Our system is composed of (i) a near-chip event filter that
  compresses and denoises the event stream from the DVS, and (ii) a Binary
  Neural Network (BNN) detection module that runs on a low-computation edge
  computing device (in our case a STM32F4 microcontroller). We present the
  system architecture and provide an end-to-end implementation for pedestrian
  detection in an office environment. Our implementation reduces transmission
  size by up to 99.6% compared to transmitting the raw event stream. The average
  packet size in our system is only 1397 bits, while 307.2 kb are required to
  send an uncompressed DVS time window. Our detector is able to perform a
  detection every 450 ms, with an overall testing F1 score of 83%. The low
  bandwidth and energy properties of our system make it ideal for IoT
  applications.
featured: true
image:
  filename: featured.png
date: 2020-01-01
links:
  - url: https://arxiv.org/abs/2004.01689
    name: Paper
    icon_pack: ai
    icon: arxiv
publishDate: 2021-07-07T10:30:11.697Z
---
