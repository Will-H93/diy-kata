const numberToReversedDigits = number => {
  const myArray = Array.from(String(number), Number);
  myArray.reverse();
  return myArray;
};

module.exports = numberToReversedDigits;
