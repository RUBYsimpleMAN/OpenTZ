/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { main } from "../../themes/themes";

const Input = styled.input`
  &::placeholder {
    color: ${main.colors.darkShade25};
  }
  &:hover, &:focus {
    border: 1px solid ${main.colors.darkShade50};
    outline: none;
  }
  width: 320px;
  height: 44px;
  padding: 0;

  background: #FFFFFF;
  border: 1px solid ${main.colors.darkShade25};
  box-sizing: border-box;
  border-radius: 4px;

  color: ${main.colors.darkShade75};

  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  padding-left: 15px;
`;

export default Input;
