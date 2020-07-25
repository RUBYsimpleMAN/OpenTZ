import styled from 'styled-components';
import { main } from '../../themes/themes';

const Button = styled.button`
  &:disabled {

  }
  &:hover, &:focus {
    outline:none;
  }
  &:hover${ props => props.filled ? "" : ":before" } {
    opacity: 50%;
  }
  width: 99px;
  height: 44px;

  position: relative;
  box-sizing: border-box;

  color: ${ props =>
    props.filled
      ? "#FFFFFF"
      : main.colors.purple
  };
  background: ${ props =>
    props.filled
      ? `linear-gradient(180deg, ${main.colors.purple} 0%, ${main.colors.lightBlue} 100%)`
      : "#FFFFFF"
  };
  background-clip: padding-box;
  border: solid 2px transparent;
  border-radius: 22px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(180deg, ${main.colors.purple} 0%, ${main.colors.lightBlue} 100%);
  }
`;
export default Button;
