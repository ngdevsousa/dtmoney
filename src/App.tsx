import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root")
export function App() {
  const [isNewTrxModalOpen, setIsNewTrxModalOpen] = useState(false);

  function handleOpenNewTrxModal() {
    setIsNewTrxModalOpen(true);
  }
  function handleCloseNewTrxModal() {
    setIsNewTrxModalOpen(false);
  }

  return (
    <>
      <Header onNewTrxModal={handleOpenNewTrxModal} />
      <Dashboard />
      <Modal isOpen={isNewTrxModalOpen} onRequestClose={handleCloseNewTrxModal}>
        <h2>Cadastro</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
