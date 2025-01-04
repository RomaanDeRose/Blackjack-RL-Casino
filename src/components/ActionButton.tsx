import styled from "styled-components";

const ActionButton = styled.button<{
  backgroundColor: string;
  boxShadowColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  width: 85px;
  height: 85px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  box-sizing: content-box;
  transition: box-shadow, transform 0.2s;
  &:hover {
    box-shadow: 0 0 15px 0px ${(props) => props.boxShadowColor};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default ActionButton;
