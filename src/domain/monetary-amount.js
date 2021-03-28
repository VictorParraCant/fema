export class MonetaryAmount {
    static defaultCurrency = "EUR";
    static ZERO = MonetaryAmount.of(0);
    static INFINITY = MonetaryAmount.of(Number.POSITIVE_INFINITY);
    amountInCents;
    currency;

    constructor(amountInCents, currency) {
        if ((!Number.isSafeInteger(amountInCents)) && (isFinite(amountInCents)) || isNaN(amountInCents)) {
            throw new Error("amountInCents must be an integer");
        }

        this.amountInCents = amountInCents;
        this.currency = currency || MonetaryAmount.defaultCurrency;
        this.currency = this.currency.toUpperCase();

        if (this.currency !== "EUR") throw new Error("Invalid currency");
    }

    static fromUnitary(amount) {
        const cents = Math.round(amount * 100);
        return new MonetaryAmount(cents);
    }

    static of(cents) {
        return new MonetaryAmount(cents);
    }

    static ofCurrency({
        amountInCents,
        currency
    }) {
        return new MonetaryAmount(amountInCents, currency);
    }

    zero() {
        return new MonetaryAmount(0, this.currency);
    }

    toEuros() {
        return +(this.amountInCents / 100).toFixed(2);
    }

    add(amount) {
        if (this.currency !== amount.currency)
            throw new Error("Incompatible currencies");

        return new MonetaryAmount(
            this.amountInCents + amount.amountInCents,
            this.currency
        );
    }

    subtract(amount) {
        if (this.currency !== amount.currency)
            throw new Error("Incompatible currencies");

        return new MonetaryAmount(
            this.amountInCents - amount.amountInCents,
            this.currency
        );
    }

    multiply(times) {
        //check rounding
        return new MonetaryAmount(
            Math.round(this.amountInCents * times),
            this.currency
        );
    }

    equal(amount) {
        return this.amountInCents === amount.amountInCents
    }

    greaterThan(amount) {
        return this.amountInCents > amount.amountInCents
    }

    greaterOrEqualThan(amount) {
        return this.amountInCents >= amount.amountInCents
    }
}