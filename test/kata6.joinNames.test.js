const { joinNames } = require("../src");

const array1 = [
  {
    name: 'Bart'
  },
  {
    name: 'Lisa'
  },
  {
    name: 'Maggie'
  }
];

const array2 = [
  {
    name: 'Homer'
  },
  {
    name: 'Marge'
  },
  {
    name: 'Bart'
  },
  {
    name: 'Lisa'
  },
  {
    name: 'Maggie'
  }
];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(array1)).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(array2)).toEqual('Homer, Marge, Bart, Lisa & Maggie');
  });
});
