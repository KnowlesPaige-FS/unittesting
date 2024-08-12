// Requirements
// TDD - create tests for a module that will:
// obscure credit card number except the last 4 digit
// Test make sure the function obscures credit card numbers that are between the length of 12 and 16 digits


const creditCardNumber = require('./card.js');

describe("Obscure Credit Card Number", () => {
    test("Should obscure a 12-digit credit card number", () => {
        expect(creditCardNumber("123456789012")).toEqual("XXXXXXXX9012");
    });

    test("Should obscure a 16-digit credit card number", () => {
        expect(creditCardNumber("1234567812345678")).toEqual("XXXXXXXXXXXX5678");
    });

    test("Should obscure a 14-digit credit card number", () => {
        expect(creditCardNumber("12345678901234")).toEqual("XXXXXXXXXX1234");
    });

    test("Should return 'Invalid Credit Card' for a too-short credit card number", () => {
        expect(creditCardNumber("1234567890")).toEqual("Invalid Credit Card");
    });

    test("Should return 'Invalid Credit Card' for a too-long credit card number", () => {
        expect(creditCardNumber("123456789012345678")).toEqual("Invalid Credit Card");
    });

    test("Should return 'Invalid Credit Card' for an empty string", () => {
        expect(creditCardNumber("")).toEqual("Invalid Credit Card");
    });
});
