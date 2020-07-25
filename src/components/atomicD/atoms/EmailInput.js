import React, { Component } from 'react';
import Input from './Input';
import styled from 'styled-components';
import emailArrowPath from './email-arrow.svg';
import ComplexInputWrapper from './ComplexInputWrapper';

const Wrapper = styled(ComplexInputWrapper)`
  &:after {
    content: url("${emailArrowPath}");
    top: 13px;
    right: 13px;
  }
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
