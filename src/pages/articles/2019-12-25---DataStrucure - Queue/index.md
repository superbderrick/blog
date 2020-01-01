---
title: Datastrucure 정리 Stack
date: "2019-12-25T14:11:00.000Z"
layout: post
draft: false
path: "/posts/datastrucure/stack/"
category: "Datastrucure"
tags:
  - "Datastrucure"
description: "Datastrucure Stack"
---

# Datastrucure 정리 Stack

한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO(Last In First Out) 형식의 Datastrucure

스택(Stack)는 LIFO(Last In First Out) 를 따른다. 즉, 가장 최근에 스택에 추가한 항목이 가장 먼저 제거될 항목이다.

pop(): 스택에서 가장 위에 있는 항목을 제거한다.
push(item): item 하나를 스택의 가장 윗 부분에 추가한다.
peek(): 스택의 가장 위에 있는 항목을 반환한다.
isEmpty(): 스택이 비어 있을 때에 true를 반환한다.

- 스택이 유용한 경우는 재귀 알고리즘을 사용할 떄다. 재귀적으로 함수를 호출해야 하는 경우에 임시 데이터를 스텍에 넣어 두었던 임시데이터를 뺴 줘야 한다. 스텍은 이런 일련의 행위를 직관적으로 가능하게 해준다.
또한 스택은 재귀 알고리즘을 반복적 형태(iterative)를 통해서 구현할 수 있게 해준다.

- 웹 브라우저 방문기록 (뒤로가기)
- 실행 취소 (undo)
- 역순 문자열 만들기

# Implement sample code 

https://github.com/superbderrick/Technical_Interview/blob/master/datastrucure/stack/DerrickStack.java