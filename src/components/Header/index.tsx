import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onNewTrxModal: () => void;
}

export function Header({ onNewTrxModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onNewTrxModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
