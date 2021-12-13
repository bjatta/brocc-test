import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;
export default StyledApp;
