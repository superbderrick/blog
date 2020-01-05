---
title: Android kotlin grammars dataClass,lateinit,object
date: "2019-12-31T21:34:00.000Z"
layout: post
draft: false
path: "/posts/android/kotlin/grammar/dataclass"
category: "Android"
tags:
  - "Android"
  - "Kotlin"

description: "Study note for kotlin grammars dataClass,lateinit,object"
---

## concepts list
- dataclass
- lateinit
- object and class differences


### Data class

A data class is a concept not tied to any specific programming language, it’s a pattern that’s convenient enough to most programmers as a simple way to represent, encapsulate and move information around.
A data class refers to a class that contains only fields and crud methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes do not contain any additional functionality and cannot independently operate on the data that they own.
Usually, data classes represent real-world entities, and it’s common to have dozens or hundreds of these classes in a project, which means that creating, modifying and manipulating these objects it’s a very common task for a developer.

### Refs

- https://blog.usejournal.com/beyond-gson-evaluating-json-parsers-for-android-kotlin-e7aa4bcc413e
- https://android.jlelse.eu/kotlin-for-android-developers-data-class-c2ad51a32844
- https://freemmer.tistory.com/119
