const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed True", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });
  it("returns no when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
