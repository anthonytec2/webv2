---
title: Fast Motion Understanding with Spatiotemporal Neural Networks and Dynamic
  Vision Sensors
publication_types:
  - "1"
authors:
  - Anthony Bisulco
  - Fernando Cladera Ojeda
  - Volkan Isler
  - Daniel D Lee
publication: "*2021 IEEE International Conference on Robotics and Automation*"
publication_short: 2021 ICRA
abstract: This paper presents a Dynamic Vision Sensor (DVS) based system for
  reasoning about high speed motion. As a representative scenario, we consider
  the case of a robot at rest reacting to a small, fast approaching object at
  speeds higher than 15m/s. Since conventional image sensors at typical frame
  rates observe such an object for only a few frames, estimating the underlying
  motion presents a considerable challenge for standard computer vision systems
  and algorithms. In this paper we present a method motivated by how animals
  such as insects solve this problem with their relatively simple vision
  systems. Our solution takes the event stream from a DVS and first encodes the
  temporal events with a set of causal exponential filters across multiple time
  scales. We couple these filters with a Convolutional Neural Network (CNN) to
  efficiently extract relevant spatiotemporal features. The combined network
  learns to output both the expected time to collision of the object, as well as
  the predicted collision point on a discretized polar grid. These critical
  estimates are computed with minimal delay by the network in order to react
  appropriately to the incoming object. We highlight the results of our system
  to a toy dart moving at 23.4m/s with a 24.73° error in θ, 18.4mm average
  discretized radius prediction error, and 25.03% median time to collision
  prediction error.
featured: true
image:
  filename: featured.png
date: 2020-01-01
publishDate: 2021-07-07T10:30:11.699Z
---
