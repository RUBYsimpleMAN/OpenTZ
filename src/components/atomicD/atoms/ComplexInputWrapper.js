import styled from "styled-components";

const ComplexInputWrapper = styled.div`
  &:after {
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }
  width: 320px;
  position: relative;
  /* display: inline-block; */
`;
export default ComplexInputWrapper;
