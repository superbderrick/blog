---
title: Effective Java 03 Private 생성자나 enum 자료형은 싱글턴 패턴을 따르도록 설계 하라
date: "2019-09-05T16:51:00.000Z"
layout: post
draft: false
path: "/posts/effective-03/"
category: "EffectiveJava"
tags:
  - "EffectiveJava"
  - "Java"
description: "Effective Java 정리하기 chapter 03"
---

Private 생성자나 enum 자료형은 싱글턴 패턴을 따르도록 설계 하라

1.싱글턴 패턴이란?:

싱글턴 패턴(Singleton pattern)을 따르는 클래스는, 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.
주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.

2.싱글톤 이점


