import ActionButton from "./components/ActionButton";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import cards from "./assets/cards/cards.ts";

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
      <p>
        Cantidad de cartas: <Score>{cards.length}</Score>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <img
            key={card.id}
            src={card.img}
            alt={card.nombre}
            style={{ width: "100px", height: "150px" }}
          />
        ))}
      </div>
    </Wrapper>
  );
}
