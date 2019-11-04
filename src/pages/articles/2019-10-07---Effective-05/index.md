---
title: Effective Java 05 불필요한 객체는 만들지 마라
date: "2019-11-04T19:50:00.000Z"
layout: post
draft: false
path: "/posts/effective-05/"
category: "EffectiveJava"
tags:
  - "EffectiveJava"
  - "Java"
description: "Effective Java 정리하기 chapter 05"
---


Effective Java 규칙5 불필요한 객체는 만들지마라

1. String 생성할때 new String("abcdefg") 이런식으로 만들면 불필요한 객체를 생성하게 된다.
차라리 String  key = "abcdefg" 이런식으로 만들면 객체는 하나만 생성되고, 다른곳에서 사용을 하더라도 jvm 에서 객체를 생성하지 않고 동일한 객체를 사용하게 된다.


2.

# Bad Case
public class Person {
  private final Date birthDate;
  
  public boolean isBabyBoomer() {
  
    Calendar gmtCal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
    gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
    Date boomStart = gmtCal.getTime();
    gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
    Date boomEnd = gmtCal.getTime();
    return birthDate.compareTo(boomStart) >= 0 && birthDate.compareTo(boomEnd) < 0;
  }

}

# Good Case
public class Person {
  private final Date birthDate;
  
  static {
    Calendar gmtCal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
    gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
    BOOM_START = gmtCal.getTime();
    gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
    BOOM_END = gmtCal.getTime();
  }

  public boolean isBabyBoomer() {
    return birthDate.compareTo(BOOM_START) >= 0 && birthDate.compareTo(BOOM_END) < 0;
  }
}

Good case 와 같이 정적 초기화 블록(static initializer)를 통해 불 필요한 객체생성을 막는다.

이렇게 개선된 Person 클래스는 Calendar, TimeZone 그리고 Date 객체를 클래스가 초기화 될 때 한 번만 만든다. isBabyBoomer가 호출될 때마다 만들지 않는다.
 isBabyBoomer가 자주 호출되는 메서드였다면 성능은 크게 개선될 것이다.
  

초기화 지연(lazy initialization) 기법을 사용하면 나는 방법이 될수 있다.

