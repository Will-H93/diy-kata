const humanCatDogYears = number => {
  const newArray = [number];
  let catYears = "";
  let dogYears = "";
  let year = "";
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (number === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else if (number > 2) {
    year = number - 2;
    catYears = 15 + 9 + (year * 4);
    dogYears = 15 + 9 + (year * 5);
  } else {
    catYears = 0;
    dogYears = 0;
  }
  newArray.push(catYears, dogYears);
  return newArray;
};

module.exports = humanCatDogYears;
