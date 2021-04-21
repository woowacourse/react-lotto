import React, { Component } from 'react';
import { WinningNumberFormWrapper } from './WinningNumberForm.styles';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import Button from '../common/Button';
import { isValidWinningNumber, isWinningNumberDuplicated } from '../../services/validation';
import ALERT_MESSAGE from '../../constants/alertMessage';

type Props = {
  formRef: React.RefObject<HTMLFormElement>;
  handleWinningNumber: (winningNumber: WinningNumber) => void;
};

type State = {
  [key: string]: number;
};

export default class WinningNumberForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
      bonus: 0,
    };

    this.handleWinningNumberInputChange = this.handleWinningNumberInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWinningNumberInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, valueAsNumber: value } = event.target;

    if (!isValidWinningNumber(value)) {
      alert(ALERT_MESSAGE.NUMBER_RANGE_EXCEEDED);
      event.target.value = '';
      this.setState({ [name]: 0 });
      return;
    }

    this.setState({ [name]: value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { first, second, third, fourth, fifth, sixth, bonus } = this.state;
    const winningNumber = {
      numbers: [first, second, third, fourth, fifth, sixth],
      bonus,
    };

    if (isWinningNumberDuplicated(winningNumber)) {
      alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
      return;
    }

    this.props.handleWinningNumber(winningNumber);
  }

  render() {
    return (
      <WinningNumberFormWrapper onSubmit={this.handleSubmit} ref={this.props.formRef}>
        <label className="input-label">당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
        <Wrapper className="winning-number-input-wrapper" display="flex">
          <div>
            <h4 className="input-caption">당첨 번호</h4>
            <Wrapper display="flex" onChange={this.handleWinningNumberInputChange}>
              <Input type="number" name="first" required />
              <Input type="number" name="second" required />
              <Input type="number" name="third" required />
              <Input type="number" name="fourth" required />
              <Input type="number" name="fifth" required />
              <Input type="number" name="sixth" required />
            </Wrapper>
          </div>
          <div>
            <h4 className="input-caption">보너스 번호</h4>
            <Wrapper display="flex" onChange={this.handleWinningNumberInputChange}>
              <Input type="number" name="bonus" required />
            </Wrapper>
          </div>
        </Wrapper>
        <Button fullWidth>결과 확인하기</Button>
      </WinningNumberFormWrapper>
    );
  }
}
