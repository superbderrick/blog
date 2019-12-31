---
title: Cannot inline bytecode built with JVM target 1.8 into bytecode that is being built with JVM target 1.6. Please specify proper '-jvm-target' option against soultion
date: "2019-12-26T14:11:00.000Z"
layout: post
draft: false
path: "/posts/android_Info/"
category: "Android"
tags:
  - "Android"
description: "Cannot inline bytecode built with JVM target 1.8 into bytecode that is being built with JVM target 1.6. Please specify proper '-jvm-target' option against soultion"
---

# Solution 

After change JVM Compile version it can fix the build error 

1. Go to Android Setting Window -> Preferences -> Kotlin Compiler 
2. Change The Kotlin Compiler Version from 1.6 -> 1.8
3. Add some code for kotlin version defintion at build.gradle file 
    (app/build.gradle)

EX) 
android {
    compileSdkVersion 28
    buildToolsVersion "29.0.2"
    defaultConfig {
        applicationId "supebderrick.github.trailerplayer"
        minSdkVersion 22
        targetSdkVersion 28
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        kotlinOptions {
            jvmTarget = "1.8"
        }
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}

