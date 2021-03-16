import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type}>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
