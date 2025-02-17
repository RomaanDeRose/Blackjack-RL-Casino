import styled from "styled-components";

const ActionButton = styled.button<{
  backgroundColor: string;
  boxShadowColor: string;
}>((props) => ({
  backgroundColor: props.boxShadowColor,
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
  transition: "all 0.15s ease",
  "&:hover": {
    boxShadow: `0 0 15px 0px ${props.boxShadowColor}`,
    backgroundColor: `${props.backgroundColor}`,
  },
  "&:active": {
    transform: "scale(0.95)",
  },
}));

export default ActionButton;
