const functions = require("./functions");

test('Balance Checker Error - card number is invalid: too short', () => {
  expect(functions.checkCardNumber("1409 3484 ")).toStrictEqual({error: true, message: "Invalid number: 8 digits missing"});
})

test('Balance Checker Error - card number is invalid: length is 16 but has forbidden caracters', () => {
  expect(functions.checkCardNumber("1409 3484 s,*s s(s;")).toStrictEqual({error: true, message: "Invalid number: 8 digits missing"});
})

test('Balance Checker - card number is valid and ends with 1: balance is 0', () => {
  expect(functions.checkCardNumber("1409 3484 2342 0001")).toStrictEqual({error: false, message: "Your balance is $0"});
});

test('Balance Checker - card number is valid and ends with 2: balance is 44', () => {
    expect(functions.checkCardNumber("1409 3484 2342 0002")).toStrictEqual({error: false, message: "Your balance is $44"});
});
