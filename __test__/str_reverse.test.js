// import { strReverse } from "../../JS/str_reverse.js";
const strReverse = require("../JS/str_reverse");

describe("Checking the reverse function", () => {
  it("should reverse string", () => expect(strReverse("тест")).toBe("Перевернутая строка: тсет"));
});

describe("Checking string value", () => {
    it("should string value", () => expect(strReverse(123)).toBe("Это не строка!"));
  });