import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((res) => console.log(res.data));
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
          <tr>
            <td>Devops</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>TI</td>
            <td>01/01/0001</td>
          </tr>
          <tr>
            <td>Devops</td>
            <td className="withdraw"> - R$ 1.000,00</td>
            <td>TI</td>
            <td>01/01/0001</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
