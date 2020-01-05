---
title: Android Study some networking modules
date: "2020-01-03T15:34:00.000Z"
layout: post
draft: false
path: "/posts/android/network/modules"
category: "Android"
tags:
  - "Android"
  - "Kotlin"

description: "Study note for kotlin grammars"
---

## concepts list
- Interceptor okhttp
- http addQueryParameter
- Retrofit.Builder
- okHttpClient
- dto,vo
- gson


### Gson

Gson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object. Gson can work with arbitrary Java objects including pre-existing objects that you do not have source-code of.

There are a few open-source projects that can convert Java objects to JSON. However, most of them require that you place Java annotations in your classes; something that you can not do if you do not have access to the source-code. Most also do not fully support the use of Java Generics. Gson considers both of these as very important design goals.



### Refs

- https://howtodoinjava.com/gson/gson-serializedname/
- https://github.com/google/gson