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

### Step1

- `Class Component`를 사용합니다.
- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급한다.
  - 소비자는 **자동 구매**만 할 수 있다.
  - 로또 1장의 가격은 1,000원이다.
  - 로또 1장의 가격보다 적은 가격을 입력하면 `alert`을 표시한다.
  - 거스름돈이 존재하는 경우 거스름돈 액수를 `alert`으로 알려주고, 로또를 자동 발급한다.
- [x] 번호보기 토글 버튼을 클릭하면 복권 번호를 볼 수 있다.
- [x] 당첨번호를 수동으로 입력할 수 있다.
  - 7개(6개의 당첨번호 + 1개의 보너스 번호)로 이루어져있다.
  - 각 당첨번호는 1~45 사이의 숫자이며, 이 외의 값이 입력되는 경우 입력창 하단에 안내 메세지가 나타난다.
  - 중복된 번호를 입력한 경우 입력창 하단에 안내 메세지가 나타난다.
  - 당첨번호가 모두 입력되지 않은 경우 결과 확인하기 버튼이 비활성화되어있다.
- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
  - 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

### Step2

- [x] Step1의 `Class Component`를 `Function Component`로 마이그레이션 합니다.

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
