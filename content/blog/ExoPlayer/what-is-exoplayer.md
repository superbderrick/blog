---
title: ExoPlayer 개발자 문서 번역 00 - ExoPlayer 란?
date: 2020-02-05 10:02:68
category: ExoPlayer
draft: false
---

# ExoPlayer 란?
 [ExoPlayer](https://github.com/google/ExoPlayer)는 안드로이드 용 애플리케이션 레벨의 미디어 플레이어입니다.
 웹이나 로컬에 있는 음악이나 동영상을 재생할 때 사용하는 [MediaPlayer](https://developer.android.com/reference/android/media/MediaPlayer) API의 대안이 될 수 있습니다.
 현재 안드로이드 MediaPlayer API는 ExoPlayer 에서 지원하는 DASH , SmoothStreaming , adaptive playback 기능들을 지원하지 않습니다.
 MediaPlayer API와 달리 ExoPlayer는 쉽게 customize 가능하고 확장이 쉽습니다. 또한 Play Store 애플리케이션 업데이트를 통해 지속해서 업데이트할 수 있습니다.

 
아래의 사이트들을 Exoplayer의 관련된 많은 정보를 제공합니다.

 [ExoPlayer developer blog](https://medium.com/google-exoplayer)
 
 [ExoPlayer release note ](https://github.com/google/ExoPlayer/blob/release-v2/RELEASENOTES.md)
 
 [Exoplayer API Java doc ](https://exoplayer.dev/doc/reference/)

# ExoPlayer 장단점


 ExoPlayer는 안드로이드의 built in 되어 있는 MediaPlayer API의 비해 많은 이점을 가지고있습니다.  
 


Fewer device specific issues and less variation in behavior across different devices and versions of Android.
The ability to update the player along with your application. Because ExoPlayer is a library that you include in your application apk, you have control over which version you use and you can easily update to a newer version as part of a regular application update.
The ability to customize and extend the player to suit your use case. ExoPlayer is designed specifically with this in mind, and allows many components to be replaced with custom implementations.
Support for playlists, as well as the ability to clip, merge and loop media.
Support for DASH and SmoothStreaming, neither of which are supported by MediaPlayer. Many other formats are also supported. See the Supported formats page for details.
Support for advanced HLS features, such as correct handling of #EXT-X-DISCONTINUITY tags.
Support for Widevine common encryption on Android 4.4 (API level 19) and higher.
The ability to quickly integrate with a number of additional libraries using official extensions. For example the IMA extension makes it easy to monetize your content using the Interactive Media Ads SDK.
It’s important to note that there are also some disadvantages:

For audio only playback on some devices, ExoPlayer may consume significantly more battery than MediaPlayer. See the Battery consumption page for details.
Including ExoPlayer in your app adds a few hundred kilobytes to the APK size. This is likely only a concern for extremely lightweight apps. Guidance for shrinking ExoPlayer can be found on the APK shrinking page.


위의 글은 [ExoPlayer 개발자 문서 사이트](https://exoplayer.dev/) 내용을 토대로 작성된 글입니다. :) 