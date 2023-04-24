import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlack={isBlack} v></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
  ${(props) =>
    props.isBlack &&
    `
      background-color: black;
    `}
  &:hover {
    background-color: red;
  }
`;
