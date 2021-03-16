import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NewTransactionPayload {
  title: string;
  amount: number;
  category: string;
  type: TrxType;
}

enum TrxType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw"
}

export function NewTransactionModal({
  isOpen,
  onClose
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [trxType, setTrxType] = useState<TrxType>(TrxType.DEPOSIT);

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();
    const payload: NewTransactionPayload = {
      title,
      amount,
      category,
      type: trxType
    };

    api.post("/transactions", payload)
  }

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
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastro</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

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
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
