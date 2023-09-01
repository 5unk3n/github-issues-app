# 원티드 프리온보딩 프론트엔드 인턴십 2주차 개인 과제

## 프로젝트 소개

GitHub의 특정 레포지토리의 이슈 목록과 상세 내용을 확인하는 웹 페이지 입니다.

배포 링크: https://main.d2f1nti56h3zgo.amplifyapp.com/

### 데모 영상

![이슈 데모 수정](https://github.com/5unk3n/github-issues-app/assets/97281800/9e5c2bc6-cda2-48d7-82a8-dd1e628db12b)

## 개발 기간

2023.08.29 ~ 2023.09.01

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint">

## 프로젝트 실행 방법

```shell
git clone https://github.com/5unk3n/github-issues-app.git
npm install
npm start
```

### 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜issues.ts
 ┣ 📂components
 ┃ ┣ 📂ErrorBoundary
 ┃ ┃ ┗ 📜ErrorBoundary.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.styled.ts
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂Issues
 ┃ ┃ ┣ 📂IssueDetail
 ┃ ┃ ┃ ┣ 📜IssueDetail.styled.ts
 ┃ ┃ ┃ ┗ 📜IssueDetail.tsx
 ┃ ┃ ┣ 📂IssueList
 ┃ ┃ ┃ ┣ 📜IssueList.styled.ts
 ┃ ┃ ┃ ┗ 📜IssueList.tsx
 ┃ ┃ ┗ 📂IssueListItem
 ┃ ┃ ┃ ┣ 📜IssueListItem.styled.ts
 ┃ ┃ ┃ ┗ 📜IssueListItem.tsx
 ┃ ┗ 📂Layout
 ┃ ┃ ┣ 📜Layout.styled.ts
 ┃ ┃ ┗ 📜Layout.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useInfiniteScroll.ts
 ┣ 📂libs
 ┃ ┗ 📜axios.ts
 ┣ 📂pages
 ┃ ┣ 📂IssueDetailPage
 ┃ ┃ ┗ 📜IssueDetailPage.tsx
 ┃ ┣ 📂IssuesPage
 ┃ ┃ ┗ 📜IssuesPage.tsx
 ┃ ┗ 📂NotFoundPage
 ┃ ┃ ┣ 📜NotFoundPage.styled.ts
 ┃ ┃ ┗ 📜NotFoundPage.tsx
 ┣ 📂routes
 ┃ ┗ 📜Router.tsx
 ┣ 📂style
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂types
 ┃ ┗ 📜type.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
```
