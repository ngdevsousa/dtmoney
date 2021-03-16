import { useContext } from "react";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "./style";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, trx) => {
      switch (trx.type) {
        case "deposit":
          acc.deposits += trx.amount;
          acc.total += trx.amount;
          break;
        case "withdraw":
          acc.withdraws += trx.amount;
          acc.total -= trx.amount;
          break;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  );

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>{formatCurrency(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>- {formatCurrency(withdraws)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong> {formatCurrency(total)}</strong>
      </div>
    </Container>
  );
}
