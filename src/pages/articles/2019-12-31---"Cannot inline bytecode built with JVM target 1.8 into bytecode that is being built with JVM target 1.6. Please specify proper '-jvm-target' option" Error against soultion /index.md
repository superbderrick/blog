---
title: Android Build Error solution regarding "Cannot inline bytecode built with JVM target 1.8 into bytecode that is being built with JVM target 1.6. Please specify proper '-jvm-target'"
date: "2019-12-26T14:11:00.000Z"
layout: post
draft: false
path: "/posts/android/tip/builerror01"
category: "Android"
tags:
  - "Android"
description: "Android Build Error solution"
---

## Cause 
JVM 1.6 Compiler doesn't support an inline bytecode feature

## Solution

After change the JVM Compile version to 1.8, it can fix the build error 

   <img src="https://github.com/superbderrick/Blog/blob/master/src/pages/articles/2019-12-31---%22Cannot%20inline%20bytecode%20built%20with%20JVM%20target%201.8%20into%20bytecode%20that%20is%20being%20built%20with%20JVM%20target%201.6.%20Please%20specify%20proper%20'-jvm-target'%20option%22%20Error%20against%20soultion%20/1.png?raw=true">


### Following steps
1. Go to Android Setting Window -> Preferences -> Kotlin Compiler 
2. Change The Kotlin Compiler Version from 1.6 to 1.8 version
3. Add a kotlin options at app/build.gradle

<pre><code>
kotlinOptions {
    jvmTarget = "1.8"
} 
       
</code></pre>


<pre><code>

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

</code></pre>

