import Modal from "react-modal";
import { Container } from "./styles";
import closeSvg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onClose
}: NewTransactionModalProps) {
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
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
