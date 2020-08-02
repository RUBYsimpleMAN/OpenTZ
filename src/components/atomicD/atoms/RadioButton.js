import styled from 'styled-components';
import { main } from '../../themes/themes';
import React, { Component } from 'react';
const Input = styled.input`
  & {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 7px;
  }
  &:checked + *:before {
    border-color: ${main.colors.purple};
  }
  &:checked + * {
    color: ${main.colors.darkShade75};
  }
  &:checked + *:after {
    opacity: 1;
  }
`;

const ClickableContent = styled.div`
  & {
    position: relative;
    padding: 0 0 0 35px;
    cursor: pointer;
    color: ${main.colors.darkShade50};
    width: fit-content;
  }
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: 0;
    width: 20px;
    height: 20px;
    border: 1px solid ${main.colors.darkShade25};
    border-radius: 50%;
    background: #FFF;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(180deg, ${main.colors.purple} 0%, ${main.colors.lightBlue} 100%);
    opacity: 0;
    transition: .2s;
  }
`;

class RadioButton extends Component {
  render() {
    const { children, value, ...rest } = this.props;
    return (
      <label>
        <Input
          type="radio"
          value={ value }
          { ...rest }
        />
        <ClickableContent
          children={ children ?? value }
        />
      </label>
    );
  }
}

export default RadioButton;
