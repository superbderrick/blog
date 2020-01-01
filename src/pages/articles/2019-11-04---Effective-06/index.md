---
title: Effective Java 06 유효기간이 지난 객체 참조는 폐기하라
date: "2019-11-04T19:50:00.000Z"
layout: post
draft: false
path: "/posts/java/effective06/"
category: "EffectiveJava"
tags:
  - "EffectiveJava"
  - "Java"
description: "Effective Java 정리하기 chapter 06"
---


Effective Java 규칙6 유효기간이 지난 객체 참조는 폐기하라

C/C++ 처럼 메모리를 관리해야하는 언어와 달리 자바는 Garbage Collector 에 의해 자동으로 적절한 시기에 안쓰는 메모리를 해제한다.

프로그램에 메모리 누수가 많을 경우,Garbage Collector 해야할 일이 많아져 성능이 저하되거나 메모리 요구량이 증가될수 있다.

스택에 객체가 가득 차면 스택크기를 늘려서 객체를 저장한다. 그리고 다시 스택 크기가 줄어든다면, 더이상 참조되지 않는 객체들이 생긴다. 이러한 참조를 obsolete reference(다시 이용되지 않을 참조)라고 한다.

 Garbage Collector obsolete reference를 제거하지 못하고,의도치 않게 객체가 쌓이는 현상을 unintentional object retention(의도치 않은 객체 보유)이라고 한다. 


	public Object pop() {

		if (size == 0)

			throw new EmptyStackException();

		Object result = elements[--size];

		## elements[size] = null 

		return results;

	}

해결법 : 사용하지 않을 객체 참조는 무조건 null로 만드는게 최선이다.

객체 참조를 null 처리하는 것은 예외적인 조치가 되어야 한다. 꼼꼼히 예외처리도, 가장 좋은 방법은 변수를 정의할 때 그 유효범위를 최대한 좁게 만들면 자연스럽게 해결된다.


