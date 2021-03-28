import React from "react";
import moment from "moment";
import { MonetaryAmount } from "../../domain/monetary-amount";
import { TransactionType } from "../../domain/transaction";
import { translate } from "../../i18n/index";
import Button from "../Button/index";

import "./styles.scss";

function TransactionCard({ transaction, handleEdit, handleDelete }) {
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
        <p
          className={`highlight ${
            transaction.type === TransactionType["INCOME"]
              ? "income-text"
              : "expense-text"
          }`}
        >
          <span>
            {MonetaryAmount.ofCurrency(transaction.amount).toEuros()} €
          </span>
        </p>
      </div>
      <div>
      <Button
          title="edit"
          type="primary"
          size={"btn-sm"}
          handleClick={handleEdit}
        />
        <Button
          icon="fas fa-trash"
          type="danger"
          size={"btn-sm"}
          handleClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default TransactionCard;
