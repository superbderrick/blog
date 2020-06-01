---
title: [Android][ExoPlayer][2020.02.10]ExoPlayer 개발자 문서 번역 01 - ExoPlayer Demo 실행 해보기
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


그런 다음 Android Studio에서 프로젝트를 엽니다. Android Project view 타입으로 보면 Demo app 앱의 관련 폴더가 확장된 걸 확인 할 수 있습니다




![Figure 1. The project in Android Studio ](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-project.png?raw=true)
#### Figure 1. The project in Android Studio  



# Compiling and running


Demo app을 compile하고 실행하려면 Android Studio에서 demo configuration을 선택하고 실행해야 합니다
Demo app은 연결된 Android 디바이스에 설치되어 실행됩니다. 가능하면 실제 디바이스와 테스트 하는 것이 가장 좋습니다. 만약 실제 디바이스 대신에 에뮬레이터와 테스트하려면 사용하려면 지원되는 장치의 에뮬레이터 API 레벨이 23 이상인 시스템 이미지를 사용해야 합니다


![Figure 2. SampleChooserActivity and PlayerActivity](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-screenshots.png?raw=true)

#### Figure 2. SampleChooserActivity and PlayerActivity


Demo app 은 sample 목록 Activity(SampleChooserActivity)을 제공합니다. sample 항목들을 선택하면 재생을 위한 두 번째 Activity (PlayerActivity)가 열립니다. Demo app에는 재생 컨트롤 및 트랙 선택 기능이 있고 또한, ExoPlayer의 Event Logger 유틸리티 클래스를 사용하여 유용한 디버그 정보를 시스템 로그에 출력할 수 있습니다.

다음 command를 통해 확인할 수 있습니다. (다른 태그에 대한 오류 도확인 가능)

``` 
adb logcat EventLogger:V *:E

``` 

# Enabling interactive media ads

ExoPlayer와 Interactive Media Ads SDK를 사용하면 Content로 쉽게 수익을 창출할 수 있습니다
Demo app에서 IMA Extension을 사용하려면 Android Studio에서 Build varient를 withExtensionsDebug 또는 withExtensionsRelease로 설정하면 됩니다

![Figure 3. Selecting the withExtensionsDebug build variant](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-build-variants.png?raw=true)

#### Figure 3. Selecting the withExtensionsDebug build variant
 

IMA Extension을 사용하도록 설정하면 Demo app 의 sample 목록에있는 'IMA Sample' 을 찾을 수 있습니다


# Enabling extension decoders

ExoPlayer에는 AV1, VP9, ​​Opus, FLAC 및 FFmpeg (오디오 전용)를 포함하여 번들 Software Decorder를 사용할 수있는 다양한 Extension 기능이 있습니다 Demo app 은 다음과 같이 이러한 Extension을 포함하고 사용하도록 빌드 할 수 있습니다

1. 사용하려는 extension을 포함해서 빌드를 진행하면 됩니다. 각각의 Extension의 특이사항은 각각의 Readme.md 파일을 참고하세요
2. Android Studio에서 Build varient를 withExtensionsDebug 또는 withExtensionsRelease로 설정해야합니다
3. Compile후 설치를 진행합니다

![Figure Figure 4. Selecting the demo_extDebug build variant](https://github.com/superbderrick/Blog/blob/master/content/blog/ExoPlayer/demo-app-build-variants.png?raw=true)

#### Figure 4. Selecting the demo_extDebug build variant

기본적으로 extension decoder는 적합한 플랫폼 디코더가없는 경우에만 사용됩니다. 아래 섹션에 설명 된대로 Extension 디코더를 선호하도록 지정할 수 있습니다


# Playing your own content

Demo app 에서 자신의 콘텐츠를 재생하는 방법에는 여러 가지가 있습니다.

1. Editing assets/media.exolist.json


Demo app 에 나열된 sample contents들은 asset / media.exolist.json에서로드됩니다 헤당 JSON 파일을 편집하면 Demoo app 에서 Sample contents들을 추가 및 제거 할 수 있습니다 
스키마는 다음과 같습니다. 여기서 [O]는 선택적 속성을 나타냅니다.

``` 
[
  {
    "name": "Name of heading",
    "samples": [
      {
        "name": "Name of sample",
        "uri": "The URI of the sample",
        "extension": "[O] Sample type hint. Values: mpd, ism, m3u8",
        "drm_scheme": "[O] Drm scheme if protected. Values: widevine, playready, clearkey",
        "drm_license_url": "[O] URL of the license server if protected",
        "drm_key_request_properties": "[O] Key request headers if protected",
        "drm_multi_session": "[O] Enables key rotation if protected",
        "ad_tag_uri": "[O] The URI of an ad tag, if using the IMA extension"
        "spherical_stereo_mode": "[O] Enables spherical view. Values: mono, top_bottom, left_right",
        "subtitle_uri": "[O] The URI of a subtitle sidecar file",
        "subtitle_mime_type": "[O] The MIME type of subtitle_uri (required if subtitle_uri is set)",
        "subtitle_language": "[O] The BCP47 language code of the subtitle file (ignored if subtitle_uri is not set)",
      },
      ...etc
    ]
  },
  ...etc
]
``` 


Sample playlist는 스키마를 사용하여 지정할 수 있습니다

``` 
[
  {
    "name": "Name of heading",
    "samples": [
      {
        "name": "Name of playlist sample",
        "playlist": [
          {
            "uri": "The URI of the first sample in the playlist",
            "extension": "[O] Sample type hint. Values: mpd, ism, m3u8"
            "drm_scheme": "[O] Drm scheme if protected. Values: widevine, playready, clearkey",
            "drm_license_url": "[O] URL of the license server if protected",
            "drm_key_request_properties": "[O] Key request headers if protected",
            "drm_multi_session": "[O] Enables key rotation if protected"
          },
          {
            "uri": "The URI of the first sample in the playlist",
            "extension": "[O] Sample type hint. Values: mpd, ism, m3u8"
            "drm_scheme": "[O] Drm scheme if protected. Values: widevine, playready, clearkey",
            "drm_license_url": "[O] URL of the license server if protected",
            "drm_key_request_properties": "[O] Key request headers if protected",
            "drm_multi_session": "[O] Enables key rotation if protected"
          },
          ...etc
        ]
      },
      ...etc
    ]
  },
  ...etc
]

```     


Key request header가 필요한 경우 각 헤더에 대한 문자열 속성을 포함하는 객체로 지정됩니다.

```
"drm_key_request_properties": {
  "name1": "value1",
  "name2": "value2",
  ...etc
}
```

sample 목록 Activity(SampleChooserActivity)에서 overflow menu  메뉴에는 Extension 디코더 선호 여부 및 사용해야하는 ABR 알고리즘을 지정하는 옵션이 있습니다


1. Loading an external exolist.json file


 Demo app * .exolist.json 규칙에 따라 명명 된 외부 JSON 파일을로드 할 수 있습니다
 예를 들어 https://yourdomain.com/samples.exolist.json에서 이러한 파일을 호스팅하는 경우 다음을 사용하여 Demo app에서 파일을 열 수 있습니다

```
adb shell am start -d https://yourdomain.com/samples.exolist.json
```
Demo app 이 설치된 장치에서 * .exolist.json link (예 : 브라우저 또는 이메일 클라이언트)를 클릭하면 Demo app 에서 링크가 열립니다. 따라서 * .exolist.json JSON 파일을 호스팅하면 Demo app 앱에서 다른 사람이 시도 할 수있는 간단한 컨텐츠 배포 방법이 제공됩니다


3. Firing an intent


intent 사용하여 샘플 목록을 무시하고 직접 재생을 시작할 수 있습니다. 
단일 샘플을 재생하려면 인 텐트의 동작을 com.google.android.exoplayer.demo.action.VIEW로 설정하고 데이터 URI를 재생할 샘플의 데이터 URI로 설정합니다. 이러한 방법은 터미널에서 바로 영상을 재생 할  수 있습니다

```
adb shell am start -a com.google.android.exoplayer.demo.action.VIEW \
    -d https://yourdomain.com/sample.mp4
```


Firing an intent 추가 옵션들

- 샘플 구성 추가 옵션
  - extension [String] Sample type hint -  유효한 값 : mpd, ism, m3u8.
  - prefer_extension_decoders [Boolean] Extension 디코더가 내장 플랫폼 디코더보다 선호되는지 설정 여부.
  - drm_scheme [String] DRM scheme을 보호가능지 여부 - 유효한 값 : widevine, playready 및 clearkey,  DRM scheme UUIDs도가능.
  - drm_license_url [String] 라이센스 서버의 URL도 보호가능한지 여부
  - drm_key_request_properties [String array] 키 Request의 헤더도 보호가능하지 여부 - name1, value1, name2, value2 등으로 압축됩니다. 
  - drm_multi_session : [Boolean] Key rotation 설정.
  - ad_tag_uri [String] IMA 확장을 사용하는 경우 광고 태그의 URI.
  - sphere_stereo_mode [String] sphere_stereo_mode 설정 -  값 : mono, top_bottom 및 left_right.
  - subtitle_uri [String] 자막  파일의 URI입니다.
  - subtitle_mime_type : [String] subtitle_uri의 MIME 유형 - (subtitle_uri가 설정된 경우 필요).
  - subtitle_language : [String] 자막 파일의 BCP47 언어 코드입니다 (subtitle_uri가 설정되지 않은 경우 무시).

- 플레이어 구성 옵션
  - abr_algorithm [String] ABR 설정여부 - default or randome.
  - tunneling [Boolean] tunneling 기능 설정.


an optional string extra can be set with --es (e.g., --es extension mpd).
 An optional boolean extra can be set with --ez (e.g., --ez prefer_extension_decoders TRUE). An optional string array extra can be set with --esa (e.g., --esa drm_key_request_properties name1,value1).


adb shell을 사용하여 인 텐트를 시작 할경우 각자료형에 parameter는 다음과 같이 설정 할 수 있습니다.
- String --es (Ex  --es extension mpd)
- Boolean -ez (Ex --ez prefer_extension_decoders TRUE)
- Array --esa (Ex --esa drm_key_request_properties name1, value1)


Sample 


```
adb shell am start -a com.google.android.exoplayer.demo.action.VIEW_LIST \
    --es uri_0 https://a.com/sample1.mp4 \
    --es uri_1 https://b.com/sample2.fake_mpd \
    --es extension_1 mpd

```





위의 글은 [ExoPlayer 개발자 문서 사이트](https://exoplayer.dev/) 내용을 토대로 작성된 글입니다. :) 