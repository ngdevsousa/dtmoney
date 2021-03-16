import { Container } from "./style";

export function TransactionsTable() {
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
  )
}