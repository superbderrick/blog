---
title: Effective Java 04 객체 생성을 막을 때는 Private 생성자를 사용하라
date: "2019-09-05T16:51:00.000Z"
layout: post
draft: false
path: "/posts/effective-04/"
category: "EffectiveJava"
tags:
  - "EffectiveJava"
  - "Java"
description: "Effective Java 정리하기 chapter 04"
---

객체 생성을 막을 때는 Private 생성자를 사용하라

java.lang.Math 나 java.util.Array 같이 정적 메서드나 필드만 모은 Util성 클래스들이있다.

이떄의 객채생성 방지를 위해,
Private 생성자를 이용해, 객체 생성을 막는 방법.


