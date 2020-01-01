---
title: WebRTC concept 및 API 정리
date: "2019-12-17T14:40:00.000Z"
layout: post
draft: false
path: "/posts/webrtc/webrtc_study01/"
category: "WebRTC"
tags:
  - "WebRTC"
description: "WebRTC concept 및 API 정리"
---

# Introduction
- WebRTC is an open source project to enable realtime communication of audio, video and data in Web and native apps.


# Major APIs
- getUserMedia(): capture audio and video.
- MediaRecorder: record audio and video.
- RTCPeerConnection: stream audio and video between users.
- RTCDataChannel: stream data between users.

# Where can I use WebRTC?
In Firefox, Opera and in Chrome on desktop and Android. WebRTC is also available for native apps on iOS and Android.

# What is signaling?

WebRTC uses RTCPeerConnection to communicate streaming data between browsers, but also needs a mechanism to coordinate communication and to send control messages, a process known as signaling. Signaling methods and protocols are not specified by WebRTC. 


# What are STUN and TURN?
WebRTC is designed to work peer-to-peer, so users can connect by the most direct route possible. However, WebRTC is built to cope with real-world networking: client applications need to traverse NAT gateways and firewalls, and peer to peer networking needs fallbacks in case direct connection fails. As part of this process, the WebRTC APIs use STUN servers to get the IP address of your computer, and TURN servers to function as relay servers in case peer-to-peer communication fails. 

# WebRTC secure
Encryption is mandatory for all WebRTC components, and its JavaScript APIs can only be used from secure origins (HTTPS or localhost). Signaling mechanisms aren't defined by WebRTC standards, so it's up to you make sure to use secure protocols.
