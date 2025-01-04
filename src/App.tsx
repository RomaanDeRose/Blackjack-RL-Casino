import ActionButton from "./components/ActionButton";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <ActionButton
        backgroundColor="#1CFF4D"
        boxShadowColor="rgba(28, 255, 77, 0.5)"
      >
        pedir
      </ActionButton>
      <ActionButton
        backgroundColor="#FF1C1C"
        boxShadowColor="rgba(255, 28, 28, 0.7)"
      >
        plantar
      </ActionButton>
      <ActionButton
        backgroundColor="#1C8DFF"
        boxShadowColor="rgba(28, 141, 255, 0.5)"
      >
        dividir
      </ActionButton>
      <ActionButton
        backgroundColor="#FFD61C"
        boxShadowColor="rgba(255, 214, 28, 0.5)"
      >
        doblar
      </ActionButton>
      <Score>8</Score>
      <Score>14</Score>
    </Wrapper>
  );
}
