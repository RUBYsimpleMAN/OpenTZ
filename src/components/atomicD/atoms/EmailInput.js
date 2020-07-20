import React, { Component } from 'react';
import Input from './Input';
import styled from 'styled-components';
import emailArrowPath from './email-arrow.svg';

const Wrapper = styled.div`
  &:after {
    content: url("${emailArrowPath}");
    position: absolute;
    top: 13px;
    right: 13px;
    z-index: 1;
    pointer-events: none;
  }
  width: 320px;
  position: relative;
  height:44px;
  display: block;
`;
class EmailInput extends Component {
  render() {
    return (
      <Wrapper>
        <Input
          type="email"
          placeholder="Email"
        />
      </Wrapper>
    );
  }
}

export default EmailInput;
