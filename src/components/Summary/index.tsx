import { useContext } from "react";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "./style";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong> R$ 200,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong> R$ 800,00</strong>
      </div>
    </Container>
  );
}
