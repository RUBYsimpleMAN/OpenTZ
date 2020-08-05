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
  width: 100%;
  box-sizing: border-box;
  display: none;
  padding: 0px 0px 0px 14px;
  position: absolute;
  overflow: hidden;
  z-index: 2;

  background-color: #FFFFFF;
  border: 1px solid ${ main.colors.darkShade50 };
  border-top: none;
  border-radius: 0 0 4px 4px;
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
  onExpand = (event) => {
    event.stopPropagation();
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  onContentClick = event => {
    event.stopPropagation();
    this.props.onContentClick( event.target.dataset, event.target.textContent );
  }
  render() {
    return (
      <Wrapper>
        <DropButton
          onClick={ this.onExpand }
          style={ this.state.isHidden ? withoutStyles : dropButtonStylesWhenShow }
          children={ this.props.title }
        />
        <Content
          onClick={ this.onContentClick }
          style={ this.state.isHidden ? withoutStyles : contentStylesWhenShow }
          children={ this.props.children }
        />
      </Wrapper>
    );
  }
}

export default DropDown;
