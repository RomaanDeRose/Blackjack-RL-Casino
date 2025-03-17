import styled from "styled-components";

const ActionButton = styled.button<{
  backgroundColor: string;
  boxShadowColor: string;
}>((props) => ({
  all: "unset",
  boxSizing: "content-box",
  width: "90px",
  height: "70px",
  fontFamily: "system-ui",
  fontSize: "1.1rem",
  color: "#fff",
  fontWeight: 500,
  textTransform: "uppercase",
  textAlign: "center",
  backgroundColor: props.backgroundColor,
  boxShadow: `0px 10px 0px ${props.boxShadowColor}, 0px 11px 5px hsla(0, 0%, 0%, 0.5)`,
  borderbottom: "1px solid hsla(0, 0%, 100%, 0.2)",
  borderRadius: "8px",
  margin: "1rem .5rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
  "&:active": {
    boxShadow: `0px 3px 0px ${props.boxShadowColor}, 0px 4px 6px hsla(0, 0%, 0%, 0.7)`,
    transform: "translateY(7px)",
  },
}));

export default ActionButton;
