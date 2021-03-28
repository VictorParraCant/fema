import { MonetaryAmount } from "./monetary-amount";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const TransactionType = {
  INCOME: "income",
  EXPENSE: "expense",
};

export const TransactionExpenseTypes = [
  "MEAL_EXPENSE",
  "TRANSPORT_EXPENSE",
  "RENT_EXPENSE",
  "HOUSE_EXPENSE",
  "WATER_EXPENSE",
  "LIGHT_EXPENSE",
  "PHONE_EXPENSE",
  "EDUCATION_EXPENSE",
  "HEALTH_INSURANCE_EXPENSE",
  "INCIDENTAL_EXPENSE",
  "LEISURE_EXPENSE",
  "GIFT_EXPENSE",
  "UNKNOWN",
];

export const TransactionCategory = {
  SALARY_INCOME: "salary-income",
  MEAL_EXPENSE: "meal-expense",
  TRANSPORT_EXPENSE: "transport-expense",
  RENT_EXPENSE: "rent-expense",
  HOUSE_EXPENSE: "house-expense",
  WATER_EXPENSE: "water-expense",
  LIGHT_EXPENSE: "light-expenses",
  PHONE_EXPENSE: "phone-expense",
  EDUCATION_EXPENSE: "education-expense",
  HEALTH_INSURANCE_EXPENSE: "health-insurance-expense",
  INCIDENTAL_EXPENSE: "incidental-expenses",
  LEISURE_EXPENSE: "leisure-expense",
  GIFT_EXPENSE: "gift-expenses",
  UNKNOWN: "unknown",
};

export class Transaction {
  static defaultAmount = MonetaryAmount.ZERO;
  static defaultType = TransactionType["EXPENSE"];

  constructor({
    transactionId,
    type,
    amount,
    timestamp,
    merchantName,
    concept,
    category,
  }) {
    this.transactionId = transactionId || uuidv4();
    this.amount = amount || Transaction.defaultAmount;
    this.type = type || Transaction.defaultType;
    // TODO: Delete null, all properties are required
    this.timestamp = timestamp || moment().unix();
    this.merchantName = merchantName || null;
    this.concept = concept || null;
    this.category = category || TransactionCategory["UNKNOWN"];
  }

  static addTransaction({ amount, type, category }) {
    return new Transaction({
      amount: MonetaryAmount.fromUnitary(amount),
      type: TransactionType[type],
      category: TransactionType[category],
    });
  }
}
