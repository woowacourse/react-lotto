<p align="middle" >
  <img width="200px;" src="https://raw.githubusercontent.com/woowacourse/javascript-lotto/main/src/images/lotto_ball.png"/>
</p>
<h2 align="middle">Level2 - 행운의 로또</h2>
<p align="middle">React 로또 어플리케이션</p>
</p>

## 🚀 Getting Started

- Boilerplate는 페어와 협의하여 자유롭게 선택합니다.
- CSS는 레벨1에 있는 코드를 직접 찾아서 자유롭게 재활용합니다.
- 불필요한 Third-Party 없이 React에서 제공되는 것만으로 구현합니다.
- 테스트 도구 선정부터 작성까지 일절 관여하지 않습니다. 자유롭게 즐겨보세요.
  <br>

## 📝 Requirements

### Step1

- 리액트 제한사항
  - [x] 클래스 컴포넌트를 사용한다.
- 구입금액 입력
  - [x] 로또 구입 금액을 입력하면, 유효성 검사 결과를 실시간으로 표시한다.
    - [x] 최소 화폐단위(1원) 미만의 자릿수가 포함된 경우
    - [x] 로또 1장의 가격(1,000원) 미만일 경우
    - [x] 로또 1장의 가격(1,000원)으로 나누어 떨어지지 않을 경우
- 로또 발급 및 확인
  - [x] 로또 구입 금액을 제출하면, 자동구매로 금액에 해당하는 로또를 발급한다.
  - [x] 번호보기 토글 버튼을 클릭하면 복권번호를 볼 수 있다.
- 당첨번호 발표
  - [x] 로또 발급 후 카운트 다운(3초)후에 이번주 당첨번호와 결과확인 버튼이 표시된다.
- 당첨결과 확인
  - [x] 결과 확인하기 버튼을 누르면 구매한 복권의 당첨여부 및 수익률을 모달로 표시된다.
    - [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
  - [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

### Step2

- [ ] Step1의 클래스 컴포넌트를 함수형 컴포넌트로 마이그레이션 한다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/react-lotto/blob/main/LICENSE) licensed.
