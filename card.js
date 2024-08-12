function creditCardNumber(cardNumber) {
    if (cardNumber.length < 12 || cardNumber.length > 16) {
        return "Invalid Credit Card";
    }
    return "X".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}

module.exports = creditCardNumber;
