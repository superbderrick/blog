---
title: Android Kotlin Study Gson,DataClass,@SerializedName
date: "2019-12-31T21:34:00.000Z"
layout: post
draft: false
path: "/posts/android_Info/"
category: "Android"
tags:
  - "Android"
  - "Kotlin"

description: "Study note for kotlin grammars"
---

### Gson

Gson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object. Gson can work with arbitrary Java objects including pre-existing objects that you do not have source-code of.

There are a few open-source projects that can convert Java objects to JSON. However, most of them require that you place Java annotations in your classes; something that you can not do if you do not have access to the source-code. Most also do not fully support the use of Java Generics. Gson considers both of these as very important design goals.


### Data class

A data class is a concept not tied to any specific programming language, it’s a pattern that’s convenient enough to most programmers as a simple way to represent, encapsulate and move information around.
A data class refers to a class that contains only fields and crud methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes do not contain any additional functionality and cannot independently operate on the data that they own.
Usually, data classes represent real-world entities, and it’s common to have dozens or hundreds of these classes in a project, which means that creating, modifying and manipulating these objects it’s a very common task for a developer.

### Refs

- https://github.com/google/gson
- https://blog.usejournal.com/beyond-gson-evaluating-json-parsers-for-android-kotlin-e7aa4bcc413e
- https://android.jlelse.eu/kotlin-for-android-developers-data-class-c2ad51a32844
- https://freemmer.tistory.com/119
- https://howtodoinjava.com/gson/gson-serializedname/