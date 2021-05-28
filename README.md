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
- 테스트 도구 선정부터 작성까지 일절 관여하지 않습니다. 자유롭게 즐겨보세요
  <br>

## 📝 Requirements

### Step1 (Class Component)

- [ ] 로또 구입 금액을 입력할 수 있다.
- [ ] 입력한 구입 금액에 해당하는 갯수의 로또를 발급해야 한다.
  - 로또 1장의 가격은 1,000원이다.
  - 소비자는 **자동 구매**만 할 수 있다.
- [ ] 번호 보기 토글 버튼을 클릭할 수 있다.
  - 복권 번호를 볼 수 있다.
- [ ] 결과 확인하기 버튼을 누를 수 있다.
  - 당첨 통계, 수익률을 보여주는 모달이 나타난다.
  - 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [ ] 다시 시작하기 버튼을 누를 수 있다.
  - 게임이 초기화 된다.

### Component 구성

- [ ] `App.js`: 최상위 컴포넌트

- [ ] `MoneyInput`: 로또 구입 금액 컴포넌트
  - [ ] Input Component
  - [ ] Button Component
- [ ] `PurchasedNumberList`: 번호들의 컴포넌트
  - [ ] Toggle Component
- [ ] `PurchasedNumberItem`: 번호 Detail
  - [ ] LottoNumber Component
- [ ] `WinningNumber.js`: 당첨 번호 컴포넌트
  - [ ] Input Component
  - [ ] Button Component
- [ ] `Modal.js`: Modal 컴포넌트
  - [ ] Button Component

### Step2

- [ ] Step1의 `Class Component`를 `Function Component`로 마이그레이션 합니다.

### 공통 심화

- [ ] UI를 통해 **실시간으로** 당첨 번호 발표까지 남은 시간을 제공합니다.
- [ ] 다시 시작하기 버튼을 누르면 당첨 번호 발표 시간도 사라진다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/react-lotto/blob/main/LICENSE) licensed.
