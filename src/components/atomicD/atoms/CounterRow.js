import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { main } from '../../themes/themes';

const Wrapper = styled.div`
  width: 300px;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  margin: 7px 0px;

  text-align: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${main.colors.darkShade100};
`;

const Title = styled.span`
  position: absolute;
  left: 0px;
`;

const Counter = styled.div`
  width: 92px;
  height: 30px;

  position: absolute;
  right: 0px;
`;

const CounterButton = styled.button`
  & {
    width: 30px;
    height: 30px;
    box-sizing: border-box;

    position: absolute;

    background: #FFF;
    color: ${main.colors.darkShade50};
    border: 1px solid ${main.colors.darkShade25};
    border-radius: 50%;
    outline: none;
  }
  &:disabled {
    opacity: 0.38;
  }
`;

const RightButton = styled(CounterButton)`
  right: 0px;
`;

const LeftButton = styled(CounterButton)`
  left: 0px;
`;

class CounterRow extends PureComponent {
  render() {
    const { value, fieldname, title } = this.props;
    return (
      <Wrapper>
        <Title
          children={ title ?? fieldname }
        />
        <Counter>
          <LeftButton
            children="-"
            data-fieldname={ fieldname }
            disabled={ value === 0 }
          />
          { value }
          <RightButton
            children="+"
            data-fieldname={ fieldname }
          />
        </Counter>
      </Wrapper>
    );
  }
}

export default CounterRow;
