import styled from "styled-components";

const ActionButton = styled.button<{
  backgroundColor: string;
  boxShadowColor: string;
}>((props) => ({
  backgroundColor: props.backgroundColor,
  color: "#fff",
  textTransform: "uppercase",
  textAlign: "center",
  width: "85px",
  height: "85px",
  fontSize: "1.1rem",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  boxSizing: "content-box",
  transition: "box-shadow, transform 0.2s",
  "&:hover": {
    boxShadow: `0 0 15px 0px ${props.boxShadowColor}`,
  },
  "&:active": {
    transform: "scale(0.9)",
  },
}));

export default ActionButton;
