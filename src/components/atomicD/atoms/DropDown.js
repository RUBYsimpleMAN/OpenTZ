/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';
import { main } from '../../themes/themes';
import arrowDownPath from './arrow-down.svg';
import ComplexInputWrapper from './ComplexInputWrapper';


const Wrapper = styled(ComplexInputWrapper)`
  &:after {
    content: url("${arrowDownPath}");
    top: calc(50% - 12px);
    right: 1rem;
  }
`;

const DropButton = styled.button`
  &:hover, &:focus  {
    border-color: ${main.colors.darkShade50};
    outline: none;
  }
  width: 100%;
  height: 44px;

  background: #FFFFFF;
  border: 1px solid ${main.colors.darkShade25};
  box-sizing: border-box;
  border-radius: 4px;

  color: ${main.colors.darkShade75};

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  padding-left: 15px;
  text-align: left;
  display: block;
  cursor: pointer;
  position: relative;
`;

const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #FFFFFF;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  border: 1px solid ${ main.colors.darkShade50 };
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  padding: 5px;
`;

const contentStylesWhenShow = {
  display: "block"
};
const dropButtonStylesWhenShow = {
  borderRadius: "4px 4px 0 0",
  borderColor: main.colors.darkShade50
};

const withoutStyles = {};
class DropDown extends Component {
  state = {
    isHidden: true
  }
  onClick = (event) => {
    event.stopPropagation();
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <Wrapper>
        <DropButton
          onClick={ this.onClick }
          style={ this.state.isHidden ? withoutStyles : dropButtonStylesWhenShow }
        >
          Dropdown
        </DropButton>
        <Content
          style={ this.state.isHidden ? withoutStyles : contentStylesWhenShow }
          children={ this.props.children }
        />
      </Wrapper>
    );
  }
}

export default DropDown;
