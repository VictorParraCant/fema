import firebase from "../infrastructure/firebase";
const db = firebase.database();

export const createTransaction = ({ transaction }) => {
  const transactionsRef = db.ref("transactions");
  transactionsRef.push(transaction);
};

export const readTransactions = () => {
  const transactionsRef = db.ref("/transactions");
  return transactionsRef;
};

export const updateTransaction = ({ transaction }) => {
  const transactionsRef = db.ref("transactions").child(transaction.id);
  transactionsRef.update({ ...transaction });
};

export const deleteTransaction = ({ transaction }) => {
  const transactionsRef = db.ref("transactions").child(transaction.id);
  transactionsRef.remove();
};
