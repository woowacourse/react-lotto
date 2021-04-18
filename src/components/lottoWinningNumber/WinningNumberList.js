import React, { Component } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  text-align: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + Label {
    border: 1px solid #c71f1f;
    background-color: #c71f1f;
    color: #fce9e9;
    font-weight: bold;
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 4px;
  padding: 4px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #d3c5c5;
  border-radius: 50%;
  background-color: #d3c5c5;

  &:hover {
    border: 1px solid #c71f1f;
    background-color: #c71f1f;
    color: #fce9e9;
  }
`;

class WinningNumberList extends Component {
  render() {
    return (
      <Ul>
        {Array.from({ length: 45 }, (_, idx) => {
          return (
            <li key={idx + 1}>
              <Checkbox
                type="checkbox"
                id={`winningNumber${idx + 1}`}
                name={idx + 1}
                // onChange={this.selectInput(idx + 1)}
                // checked={
                //   this.state.winningNumbers.includes(idx + 1) ? true : false
                // }
              />
              <Label htmlFor={`winningNumber${idx + 1}`}>{idx + 1}</Label>
            </li>
          );
        })}
      </Ul>
    );
  }
}

export default WinningNumberList;
