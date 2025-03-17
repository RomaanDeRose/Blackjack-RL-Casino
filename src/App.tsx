import ActionButton from "./components/ActionButton";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import cards from "./assets/cards/cards.ts";

export default function App() {
  return (
    <Wrapper>
      <ActionButton
        backgroundColor="rgb(28, 255, 77)"
        boxShadowColor="rgb(33, 195, 68)"
      >
        pedir
      </ActionButton>
      <ActionButton
        backgroundColor="rgb(255, 28, 28)"
        boxShadowColor="rgb(185, 32, 32)"
      >
        plantar
      </ActionButton>
      <ActionButton
        backgroundColor="rgb(28, 141, 255)"
        boxShadowColor="rgb(32, 111, 189)"
      >
        dividir
      </ActionButton>
      <ActionButton
        backgroundColor="rgb(255, 214, 28)"
        boxShadowColor="rgb(200, 169, 31)"
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
