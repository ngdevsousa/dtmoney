import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./context/TransactionsContext";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
export function App() {
  const [isNewTrxModalOpen, setIsNewTrxModalOpen] = useState(false);

  function handleOpenNewTrxModal() {
    setIsNewTrxModalOpen(true);
  }
  function handleCloseNewTrxModal() {
    setIsNewTrxModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onNewTrxModal={handleOpenNewTrxModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTrxModalOpen}
        onClose={handleCloseNewTrxModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
