---
title: 2020.02.21 OAuth2 정리
date: 2020-02-21 15:02:41
category: OAuth2 
draft: false
---

OAuth 2.0 이란 ?:

OAuth 2.0 is the industry-standard protocol for authorization. OAuth 2.0 focuses on client developer simplicity while providing specific authorization flows for web applications, desktop applications, mobile phones, and living room devices. This specification and its extensions are being developed within the IETF OAuth Working Group.


배경 :
실제 서비스 운영과정 중에 사용가 가입되어있는 외부 서비스의 DATA를 사용하기에 제약이 있음
- 단순히 ID Password를 저장 후, 외부서비스에 접근하기에 보안 적으로 매우 위험함
- Access Token base system으로 더욱 진보된 방법을 취할 수 있음

각각 의 역할

![Parts](https://github.com/superbderrick/Blog/blob/master/content/blog/OAuth2%20/part.png?raw=true)


Access Register
- OAuth를 이용해서 Resource Server에 접속하기 위해서는 우선 Resource Server에 등록하는 과정이 필요함
- 등록시 필요한 DATA
  - ID
  - Serect KEY
  - Authorized redirect URLs

Access Approve By Resource Owner 

OAuth의 첫번째 절차는 Resource Owner가 Resource Server에게 Client의 접근을 승인한다는 것을 알림

-  Client 서비스에서 Resource Owner가 사용하자고 할 서비스의 로그인 여부에 따라 Resource Server은 로그인 요청 및 서비스이용 범위를 요청 받아야 함 이때 Authorized redirect URL을 사용하고 서비스 범위를 서버에 저장


Access Approve By Resource Server

- Resource Server는 Client가 등록된 Client가 맞는지 확인하기 위해서 Resource Owner을 통해서 Client에게 Authorization code를 전달합니다. 이 값을 받은 Client는 이 값과 Client secret의 값을 Resource Server로 전송해서 Client의 신원을 Resource Owner에게 증명 작업

- Resource server give resource owner authorization code and then client is received using redirect way
- Client request to server with Combineing Client ID, Client Serect, Access code 


Access token

- Resource server give to client access token




참고 : 

- https://opentutorials.org/course/3405
- https://oauth.net/2/