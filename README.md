# 질병 검색 서비스

질병을 검색할 수 있습니다.

<br />

## 🎉 **배포 주소**

- [https://7b.netlify.app/](https://7b.netlify.app/)

<br />

## 👬 **팀원**

- 프론트엔드 4명 (쉐어 프로그래밍를 활용한 공동 작업)

<br>

## 📅 **개발 기간**

- 2022년 05월 18일 ~ 2022년 05월 20일

<br />

## 🔧 **기술스택**

- Typescript, React, Sass, react-query, redux-toolkit, recoil

<br />

## 💻 **설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone https://github.com/Yu-jae-min/POB_Humanscape.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 📒 **구현 목록**

|메인|
|:-:|
|![기능](https://user-images.githubusercontent.com/78616893/169333225-3bc95877-e507-45df-afa2-5222808f05f6.gif)|

<br />

### # 검색 기능

- [x] 검색어 입력

  - [x] 검색어 입력 후 아이콘 클릭 및 엔터 시 한국임상정보에 결과 페이지로 이동

- [x] 검색어 추천 기능

  - [x] 검색어 입력 후 검색어 추천 목록 로딩 시 Spinner 노출

  - [x] 검색어 입력 시 검색창 하단에 추천 목록 리스트 노출

  - [x] 추천 목록 리스트 클릭 시 해당 추천 목록 리스트 값에 한국임상정보에 결과 페이지로 이동

  - [x] 방향키 이동 이벤트

    - [x] 추천 목록 리스트 노출 후 위 아래 방향키 입력 시 redux-toolkit을 통해 관리하는 index 값을 업데이트

    - [x] redux-toolkit을 통해 관리하는 index에 맞는 목록의 배경 색상 변경 및 해당 목록의 value로 input value 업데이트

  - [x] split 메소드와 정규식을 활용하여 검색 창에 입력한 값과 추천 목록 리스트 값 중 입력한 값과 일치하는 부분의 mark태그 추가하여 볼드 처리

  - [x] 검색어 입력 시 관련 추천 검색어 없는 경우 '검색어 없음' 노출

<br>

### # API 호출

- [x] 한글 입력 시 연속 된 호출을 막기 위해 setTimeout 함수를 사용하여 디바운싱 처리

- [x] react-query 활용한 비동기 통신

  - [x] 호출별로 로컬 캐싱, 캐싱되어 있는 데이터의 경우 컴포넌트가 마운트 및 언마운트 되어도 재호출 하지 않음

  - [x] react-query에 defalut 옵션인 retry를 사용하여 호출 실패 시 재요청 횟수를 3번으로 제한

  - [x] react-query에서 enabled 옵션을 활용하여 요청에 사용한 파라미터가 유효한 경우에만 쿼리 활성화

  - [x] 쿼리 요청 시 trim 메소드를 활용하여 공백 제거

  - [x] 요청 예외 처리

    - [x] 추천 검색어가 한 개인 경우에만 단일 객체 타입으로 응답, react-query의 비동기 요청 과정에서 데이터를 가공해 전달

    - [x] react-query의 isError 값을 사용하여 에러 시 '현재 추천 검색어를 가져올 수 없음' 노출

<br>

### # 크로스 브라우징 이슈

- [x] MacOS Chrome 환경 대응

  - [x] keyDown 이벤트가 두번 실행되는 문제가 발생, Composing 상태를 나타내는 isComposing가 true가 되는 경우의 조건을 넣어 해결

<br>

### # 배포

  - [x] Netlify 배포

  - [x] proxy 설정을 통한 CORS 에러 처리

<br>