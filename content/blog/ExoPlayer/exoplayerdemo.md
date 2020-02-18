---
title: ExoPlayer 개발자 문서 번역 01 - ExoPlayer Demo 실행 해보기
date: 2020-02-10 14:02:91
category: ExoPlayer
draft: false
---

# ExoPlayer Demo

ExoPlayer Demo app은 두 가지 목적을 가지고 있습니다
  - ExoPlayer 사용법의 비교적 단순하지만 완전한 기능을 갖춘 예제를 제공하고 앱 개발에 좋은 편리한 출발점으로 사용할 수 있습니다
  - ExoPlayer를 쉽게 사용해 볼 수 있고, Demo app을 사용하면 포함된 sample 외에도 자신의 콘텐츠 재생을 테스트할 수 있습니다
 
이 페이지는 Demo app 을 다운 받고 컴파일하고 실행하는 방법을 설명합니다. 또한, 자신의 미디어를 재생하는 데 사용하는 방법도 설명합니다


# Source code 받기

메인 Demo app의 source code는 ExoPlayer Git Hub project의 demo/main folder에서 찾을 수 있습니다
아직 source code를 받지 않았으면 , Clone 후 프로젝트를 로컬 디렉터리에 복사하세요

``` 
git clone https://github.com/google/ExoPlayer.git
```


그런 다음 Android Studio에서 프로젝트를 엽니다. Android Project view 타입으로 보면 데모 앱의 관련 폴더가 확장된 걸 확인 할 수 있습니다




![Figure 1. The project in Android Studio ](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-project.png?raw=true)
#### Figure 1. The project in Android Studio  



# Compiling and running


Demo app을 compile하고 실행하려면 Android Studio에서 demo configuration을 선택하고 실행해야 합니다
Demo app은 연결된 Android 디바이스에 설치되어 실행됩니다. 가능하면 실제 디바이스와 테스트 하는 것이 가장 좋습니다. 만약 실제 디바이스 대신에 에뮬레이터와 테스트하려면 사용하려면 지원되는 장치의 에뮬레이터 API 레벨이 23 이상인 시스템 이미지를 사용해야 합니다


![Figure 2. SampleChooserActivity and PlayerActivity](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-screenshots.png?raw=true)

#### Figure 2. SampleChooserActivity and PlayerActivity


Demo app 은 sample 목록 Activity(SampleChooserActivity)을 제공합니다. sample 항목들을 선택하면 재생을 위한 두 번째 Activity (PlayerActivity)가 열립니다. 데모에는 재생 컨트롤 및 트랙 선택 기능이 있고 또한, ExoPlayer의 Event Logger 유틸리티 클래스를 사용하여 유용한 디버그 정보를 시스템 로그에 출력할 수 있습니다.

다음 command를 통해 확인할 수 있습니다. (다른 태그에 대한 오류 도확인 가능)

``` 
adb logcat EventLogger:V *:E

``` 

# Enabling interactive media ads

ExoPlayer와 Interactive Media Ads SDK를 사용하면 Content로 쉽게 수익을 창출할 수 있습니다. 

Demo app에서 IMA Extension을 사용하려면 Android Studio에서 Build varient를 withExtensionsDebug 또는 withExtensionsRelease로 설정하면 됩니다.

![Figure 3. Selecting the withExtensionsDebug build variant](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-build-variants.png?raw=true)

#### Figure 3. Selecting the withExtensionsDebug build variant
 

IMA Extension을 사용하도록 설정하면 Demo app 의 sample 목록에있는 'IMA Sample' 을 찾을 수 있습니다.


위의 글은 [ExoPlayer 개발자 문서 사이트](https://exoplayer.dev/) 내용을 토대로 작성된 글입니다. :) 