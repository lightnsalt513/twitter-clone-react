<br />
<br />

1. [Overview](#overview)
2. [주요 페이지 및 컴포넌트 구성](#structure)
3. [기술 스택](#techstack)

<br />
<br />

## 1. Overview <a id="overview"></a>
### 1) 프로젝트 개요
* [Twitter 클론코딩 강의](https://nomadcoders.co/nwitter)를 통해 리액트을 사용한 CRUD 기능을 실습하고 Firebase를 사용하여 로그인 인증 및 리얼타임 DB 사용 경험
> Demo URL : https://lightnsalt513.github.io/twitter-clone-react
* 습득 개념 :    
  * React 기본 활용방법, 컴포넌트 구성단위 및 useState, useEffect 등의 Hooks 사용
  * React router를 사용한 라우팅
  * Firebase의 DB, cloud storage 및 authentication
  * Github pages를 이용한 deployment
* 주요 기능 :
  * Firebase를 활용한 Sign Up/로그인/로그아웃 기능
  * 텍스트와 이미지 포스팅 기능
  * 입력된 포스트를 Firebase DB에 저장하고 모든 유저의 포스트를 메인 화면에 노출
  * 접속한 유저의 글에 '편집' 및 '삭제' 기능 제공
  * 접속한 사용자의 username 은 프로필 화면에서 편집 가능
* 추가/변경 부분 : (강의 내용 외)
  * CSS 대신 SCSS 사용
  * 로그인 시 username도 등록하도록 추가
  * 프로필 이미지 추가/편집 기능 추가
  * 포스트에 username, 작성일과 시간, 프로필 사진 노출
  * Like 기능 추가
  * Comment 기능 추가

<br />
<br />

## 2. 주요 페이지 및 컴포넌트 구성 <a id="structure"></a>
| 경로      | 컴포넌트명 | 설명                                         |
| --------- | ----------------- | -------------------------------------------- |
| /         | Auth <br /> ㄴ AuthForm | 로그인 페이지 <br />  | 
| /         | Home <br /> ㄴNavigation <br /> ㄴNweet <br /> ㄴNweetFactory <br /> ㄴComment <br /> ㄴCommentFactory | 전체 포스트를 노출하며, 개인 포스트 등록 및 수정이 가능한 메인 페이지. <br /> 각 포스트에 대한 코멘트 및 Like 기능 포함   |      
| /profile  | Profile   | 사용자 이름과 이미지 편집, 로그아웃이 가능한 프로필 페이지 |


<br />
<br />

## 3. 기술 스택 <a id="techstack"></a>
### 주요 기술 스택
* DB & Server : `Firebase`
* FE : 
  * `React`
  * `SCSS`

&nbsp;
### 기타 주요 라이브러리
* `react-router-dom` :
  * React에서 라우팅을 도와주는 라이브러리 
* `uuid` :
  * 범용고유식별자 생성 라이브러리
* `@fortawesome` :
  * Font Awesome 아이콘 라이브러리