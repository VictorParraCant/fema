import React, { useState } from "react";
import { Transaction } from "../../domain/transaction";
import Button from "../Button";
import CategoriesForm from "../CategoriesForm";
import { createTransaction } from "../../repository/transactions";

function AmountForm() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("EXPENSE");
  const [category, setCategory] = useState("UNKNOWN");

  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeType = (type) => {
    setType(type);
  };

  const handleChangeCategory = (category) => {
    if (category.trim() !== "") {
      setCategory(category);
    }
  };

  const addTransaction = () => {
    const transaction = Transaction.addTransaction({ amount, type, category });
    createTransaction({ transaction });
    setAmount("");
  };
  return (
    <form className="row">
      <div className="col">
        <Button
          type="success"
          size={"btn-sm"}
          disabled={type === "INCOME"}
          handleClick={() => handleChangeType("INCOME")}
          title="Income"
        />

        <Button
          type="danger"
          size={"btn-sm"}
          disabled={type === "EXPENSE"}
          handleClick={() => handleChangeType("EXPENSE")}
          title="Expense"
        />
      </div>

      <div className="col">
        <CategoriesForm
          selectCategory={(category) => handleChangeCategory(category)}
        />
      </div>

      <div className="col">
        <input
          className="form-control form-control-sm"
          type="number"
          placeholder="0.00 €"
          onChange={handleOnChange}
          value={amount}
        />
      </div>
      <div className="col">
        <Button
          type="primary"
          size={"btn-sm"}
          handleClick={addTransaction}
          title={`ADD ${type}`}
        />
      </div>
    </form>
  );
}

export default AmountForm;
