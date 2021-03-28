import React, { useState, useEffect } from "react";
import {
  readTransactions,
  updateTransaction,
  deleteTransaction,
} from "../../repository/transactions";

import TransactionCard from "../TransactionCard/index";
import TransactionForm from "../TransactionForm";

export const MovementsList = () => {
  const [transactionsList, setTransactionsList] = useState();
  const [transactionSelected, setTransactionSelected] = useState();

  const transactionsRef = readTransactions();
  useEffect(() => {
    transactionsRef.on("value", (snapshot) => {
      const transactions = snapshot.val();
      const transactionsList = [];
      for (let id in transactions) {
        transactionsList.push({ id, ...transactions[id] });
      }
      setTransactionsList(transactionsList.reverse());
    });
  }, []);

  const selectTrx = (transaction) => {
    setTransactionSelected({...transaction});
  };

  const editTrx = ({ property, value }) => {
    setTransactionSelected({
      ...transactionSelected,
      [property]: value,
    });
  };

  const saveChange = () => {
    updateTransaction({ transaction: transactionSelected });
    setTransactionSelected();
  };

  const deleteTrx = (transaction) => {
    deleteTransaction({ transaction });
  };

  return (
    <div>
      {transactionsList
        ? transactionsList.map((transaction) => (
            <TransactionCard
              key={transaction.transactionId}
              handleEdit={() => selectTrx(transaction)}
              handleDelete={() => deleteTrx(transaction)}
              transaction={transaction}
            />
          ))
        : "Loading ..."}
      <hr />

      {transactionSelected && (
        <TransactionForm
          transaction={transactionSelected}
          handleOnChange={(change) => editTrx(change)}
          handleSave={saveChange}
          handleCancel={() => setTransactionSelected()}
        />
      )}
    </div>
  );
};
