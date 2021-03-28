import React from "react";
import moment from "moment";
import { MonetaryAmount } from "../../domain/monetary-amount";
import { TransactionType } from "../../domain/transaction";
import { translate } from "../../i18n/index";
import Button from "../Button/index";

function TransactionForm({ transaction, handleOnChange, handleSave, handleCancel }) {
    return (
      <div className="card-container">
        <div className="description-container">
          <p className="date">
            <span className="date-text">
              {moment.unix(transaction.timestamp).format("DD")}
            </span>
            <span className="date-text month">
              {moment.unix(transaction.timestamp).format("MMM")}
            </span>
          </p>
          <div>
            <p className="category">{translate(transaction.category)}</p>
            <p className="concept">concept or description</p>
          </div>
        </div>
  
        <div>
          <input
            className="form-control form-control-sm"
            type="number"
            placeholder="0.00 €"
            onChange={(e) => handleOnChange({
              property: "amount",
              value: MonetaryAmount.fromUnitary(e.target.value)
            })}
            value={MonetaryAmount.ofCurrency(transaction.amount).toEuros()}
          />
          <p
            className={`highlight ${
              transaction.type === TransactionType["INCOME"]
                ? "income-text"
                : "expense-text"
            }`}
          >
          </p>
        </div>
        <div>
        <Button
            title='save'
            type="success"
            size={"btn-sm"}
            handleClick={handleSave}
          />
          <Button
            title='cancel'
            type="secondary"
            size={"btn-sm"}
            handleClick={handleCancel}
          />
        </div>
      </div>
    );
  }
  
  export default TransactionForm;
  