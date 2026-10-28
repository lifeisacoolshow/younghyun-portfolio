# 김영현 포트폴리오

반응형으로 제작한 정적 포트폴리오 웹사이트입니다.

## 로컬에서 보기

프로젝트 파일을 내려받아 압축을 푼 다음 VS Code에서 index.html을 열거나 Live Server로 실행하세요. index.html은 실제 메인 화면인 main.html로 연결됩니다.

## 주요 파일

- main.html: 메인 화면 구조
- styles.css: 메인 화면 스타일과 반응형 레이아웃
- script.js: 프로젝트 카드, 탭 필터, 인트로 동작
- detail.css: 프로젝트 상세페이지 공통 스타일
- picl.html, compose.html, groundseesaw.html, runon.html, dandi.html, goodal-ai.html: 프로젝트 상세페이지
- images-*.zip: 이미지 파일 묶음. GitHub Pages 배포 시 원래 images/ 경로로 자동 압축 해제됩니다.

## GitHub Pages 배포

main 브랜치에 변경 사항을 올리면 GitHub Actions가 자동으로 사이트를 배포합니다. 저장소의 Settings → Pages에서 배포 소스를 GitHub Actions로 설정한 뒤, 저장소의 Actions 탭에서 배포 완료를 확인하세요.
