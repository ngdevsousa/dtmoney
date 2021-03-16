import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

enum TrxType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw"
}

export function NewTransactionModal({
  isOpen,
  onClose
}: NewTransactionModalProps) {
  const [trxType, setTrxType] = useState<TrxType>(TrxType.DEPOSIT);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onClose} className="react-modal-close">
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastro</h2>
        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTrxType(TrxType.DEPOSIT)}
            isActive={trxType === TrxType.DEPOSIT}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setTrxType(TrxType.WITHDRAW)}
            isActive={trxType === TrxType.WITHDRAW}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
