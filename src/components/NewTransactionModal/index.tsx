import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

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
  const { createTrx } = useContext(TransactionsContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<TrxType>(TrxType.DEPOSIT);

  async function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTrx({
      title,
      amount,
      category,
      type
    });

    onClose();
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType(TrxType.DEPOSIT);
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
            onClick={() => setType(TrxType.DEPOSIT)}
            isActive={type === TrxType.DEPOSIT}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType(TrxType.WITHDRAW)}
            isActive={type === TrxType.WITHDRAW}
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
