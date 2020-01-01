---
title: Effective Java 01 생성자 대신 펙터리 메서드 사용하기
date: "2019-08-24T16:51:00.000Z"
layout: post
draft: false
path: "/posts/java/effective01/"
category: "EffectiveJava"
tags:
  - "EffectiveJava"
  - "Java"
description: "Effective Java 정리하기 chapter 01"
---

Public 으로 선언한 생성자 대신에 정적 메서드를 제공하는 방법의 장단점


장점

1.생성자와 다르게 펙터리메서드에는 이름이 있다.

2.호출 할때마다 새로운 객체 생성이 필요하지 않는다.

3.생성자와는 달리 반환 값이 자료형의 하위 자료형을 객체로 반환 할 수 있음.

4.형인자 자료형 객체를 만들때 편한점이 있다.

단점

1.하위 클래스를 만들수 없다.

2.뚜렷히 구분이 힘들다. 



