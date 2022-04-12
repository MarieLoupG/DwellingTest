
// Check the card number and return a boolean to specify if it is an error and a message
function checkCardNumber(cardNumber) {
    // Remove spaces and non number caracters and just leave numbers
    const cardNoSpaces = cardNumber.replace(/\s/g, '').replace(/\D/g, "");

    if (cardNoSpaces.length === 0){
      return {error: true, message: 'Invalid number: please enter a number'};
    }

    if (cardNoSpaces.length < 16){
      const missing = 16 - cardNoSpaces.length;
      const endOfMessage = missing > 1 ? ' digits missing' : ' digit missing' ;
      return {error: true, message: 'Invalid number: '+missing+endOfMessage};
      
    } else {
      let sum = 0;
      // Check the last number to see if we should sum
      const validityCheck = Number(cardNoSpaces.slice(15, 16));
      if (validityCheck === 2 || validityCheck === 5){
        // Add the first 12 numbers
        const result = cardNoSpaces.slice(0, 12);
        const numbersToAdd = result.split("");
        sum = numbersToAdd.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
      }
      return {error: false, message: 'Your balance is $'+sum};
    }
  }

  module.exports = {
    checkCardNumber
  }