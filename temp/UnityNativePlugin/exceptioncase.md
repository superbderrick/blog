---
title: ClassNotFoundException on Unity Android plugin
date: 2020-06-29 21:06:93
category: UnityNativePlugin
draft: false
---


Android Unity nativeplugin 을 개발 도중에 ClassNotFoundException Exception나는 경우를 만났다

 비슷한 형태의 Error Log

> com.unity3d.player.UnityPlayer$c.run(Unknown
 > Source:20) 02-05 22:45:56.281:
 > E/Unity(23488): Caused by:
 > java.lang.ClassNotFoundException:
 > Didn't find class


 작업하고 있는 plug in은 다음과 같이 라이브러리별 Dependency를 가지고 있다

 A: Unity에서 Native API를 호출 가능하게 해주는 Bridge 역할의 AAR
  
 B: 특정 기능의 역할의 AAR

 - A에서 B를 참조하는 형태

 A AAR를 Build 하는 과정에서 Compile error가 나지 않고, 
 Build gradle에 Implmention 형태로 Dependency를 걸어져서 자동으로 
 A와 B의 Defendency가 형성 될 줄 알았는데, 실제 Runtime에서는 위의 에러같이 문제가 발생했다

 정답은 각각의 A,B AAR을 Unity Editor에 포함해 주어야 한다
 

 
 자세하게는 > Editor/Plugin/Android/A,B both aar files

 
 ——————————————————————————————————-

 While I am working on Unity native plugin development, I met a "ClassNotFoundException" case

 Similar Error Log

> com.unity3d.player.UnityPlayer$c.run(Unknown
 > Source:20) 02-05 22:45:56.281:
 > E/Unity(23488): Caused by:
 > java.lang.ClassNotFoundException:
 > Didn't find class

My project has a dependency like this

A: AAR in order to connect between Unity and Native
 
B: Some feature's AAR
  
c: A has a defendcy on B


Becasue When I build in Android studio to make an aar file, it was fine without any error and  with Implmention property in build gradle
I thought that it had been fine but 
It occured an error

The solution is that It has to contatin a and b aar files both on Unity Editor
 
 Detail... 
 > Editor/Plugin/Android/A,B both aar files


 




 
