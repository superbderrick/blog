---
title: Unity Object 이동 관련 API 정리
date: "2019-09-19T16:51:00.000Z"
layout: post
draft: false
path: "/posts/Arrange-Unity-Moving-API/"
category: "UnityAPI"
tags:
  - "Unity"
  - "API"
description: "Unity Object 이동 관련 API 정리"
---


# 각각의 좌표계

## 월드 좌표
- 월드를 기준으로 태양이 우주를 중심으로 0.0.0에 위치라고 하면 내위치를 말하는 것이 월드 좌표
- 오브젝트의 위치를 나타내는 좌표계로, 화면의 중심을 원점(0,0,0)으로 하는 3차원 상대좌표
- 월드 좌표계는 게임 화면을 투영하는 카메라의 위치와 회전 상태에 따라 달라지므로 반드시 화면의 중심이 원점이 되는것은 아님

 
 ## 상대좌표
 - 자신의 위치를 중심으로 생각하고 자신의 위치를 계산
 - 만약 부모 객체가 있다면 부모객체의 좌표와의 거리를 나타냄


# Object의 이동 API

## Transform
 -  1.Transform.position (월드)
    - The world space position of the Transform

 -  2.Transform.translate (상대)
     - Moves the transform in the direction and distance of translation


## Rigidbody  

-  1.MovePosition
    - 



  




