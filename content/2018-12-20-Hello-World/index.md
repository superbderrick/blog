---
title: "Pod lib lint Error case  SWIFT_VERSION 3.0 is unsupported case"
path: blog/hello-world-rolwins-first-blog
tags: [Cocoapods]
cover: ./rolwin.jpg
date: 2020-08-17
excerpt: Blogging and writing about tech stacks is always been my thing. I like to experiment with different technologies and write my views on them. Web technologies has always been my passion. Check my blog for codebits on various web technologies.
---

일반적으로 cocoapods을 이용해 iOS용 오픈소스를 배포하는 경우에 Terminal에서 Pod command를 이용합니다
Cocopoad trunk에 push 하기 전에 보통은 `$ Pod lib lint` command를 이용해 pod spec 파일이 올바르게 구성되었는지 확인이 필요합니다
예전에 만들어놓은 [Custom UI Library](https://github.com/superbderrick/SummerSlider)를 Swift 5.0을 지원하기 위해 새롭게 pod spec 파일을 배포 하는 경우가 생겼고, 작업하는 도중에 다음과 같은 문제를 만났습니다

Normally when we release own iOS opensources with cocoapod, we have to use pod commands in terminal interface 
Especially before push to cocoapods trunk, we have to use `$ Pod lib lint` command in order to check our pod'spec file correctly

I found an error case while I was working on new version release of my opensource, after excuted `$ Pod lib lint` command it showed error like below 


        - NOTE  | xcodebuild:  error: SWIFT_VERSION '3.0' is unsupported, supported versions are: 4.0, 4.2, 5.0. (in target 'App' from project 'App')

    -> SummerSlider (0.4.0)
        - ERROR | [iOS] xcodebuild: Returned an unsuccessful exit code. You can use `--verbose` for more information.
        - NOTE  | xcodebuild:  note: Using new build system
        - NOTE  | xcodebuild:  note: Building targets in parallel
        - NOTE  | [iOS] xcodebuild:  note: Planning build
        - NOTE  | [iOS] xcodebuild:  note: Constructing build description
        - NOTE  | xcodebuild:  error: SWIFT_VERSION '3.0' is unsupported, supported versions are: 4.0, 4.2, 5.0. (in target 'App' from project 'App')
        - NOTE  | [iOS] xcodebuild:  warning: Skipping code signing because the target does not have an Info.plist file and one is not being generated automatically. (in target 'App' from project 'App')
        - NOTE  | xcodebuild:  error: SWIFT_VERSION '3.0' is unsupported, supported versions are: 4.0, 4.2, 5.0. (in target 'SummerSlider' from project 'Pods')

    [!] SummerSlider did not pass validation, due to 1 error.
    You can use the `--no-clean` option to inspect any issue.


문제가 발생하는 원인은 라이브러리 파일들이 포함된 위치에 swift version 설정하는 `.swift-version` 파일이 존재하지만, 해당 파일의 기능이 deprecated 되어서 error가 발생하는 것입니다

해결 방법은`.swift-version` 파일을 삭제하면 됩니다 :)

만약 배포하는 라이브러리에 Swift compile을 버전을 지정하고 싶은 경우에는, pod spec 파일에  spec·swift_version을 지정해주면 됩니다


The cause of error case is an existence of .swift-version file which to set up swift version for libary
But it already deprecated and don't need it anymore

To fix the error, just delete the .swift-version file

if you want to set up swift compileversion on your libary, just setup into pod file about `. swift_version` and see below sample :)

E.g

    Pod::Spec.new do |spec|
    spec.name          = 'Reachability'
    spec.version       = '3.1.0'
    spec.license       = { :type => 'BSD' }
    spec.homepage      = 'https://github.com/tonymillion/Reachability'
    spec.authors       = { 'Tony Million' => 'tonymillion@gmail.com' }
    spec.summary       = 'ARC and GCD Compatible Reachability Class for iOS and OS X.'
    spec.source        = { :git => 'https://github.com/tonymillion/Reachability.git', :tag => 'v3.1.0' }
    spec.module_name   = 'Rich'
    spec.swift_version = '4.0'

    spec.ios.deployment_target  = '9.0'
    spec.osx.deployment_target  = '10.10'

    spec.source_files       = 'Reachability/common/*.swift'
    spec.ios.source_files   = 'Reachability/ios/*.swift', 'Reachability/extensions/*.swift'
    spec.osx.source_files   = 'Reachability/osx/*.swift'

    spec.framework      = 'SystemConfiguration'
    spec.ios.framework  = 'UIKit'
    spec.osx.framework  = 'AppKit'

    spec.dependency 'SomeOtherPod'
    end



