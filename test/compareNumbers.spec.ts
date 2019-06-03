// tslint:disable:no-unused-expression
import { expect } from "chai";
import { compareNumbers } from "../src";

describe("compareNumbers", () => {
  const shouldBeGreater = [[2, 1], [1.1, 1.01], [Infinity, -Infinity]];

  const shouldBeLess = [[1, 2], [1.01, 1.1], [-Infinity, Infinity]];

  const shouldBeEqual = [
    [1, 1],
    [1.1, 1.1],
    [Infinity, Infinity],
    [-Infinity, -Infinity],
    [null, null],
    [NaN, NaN],
    [undefined, undefined]
  ];

  const shouldThrow = [[null, undefined], [null, NaN], [undefined, NaN]];

  shouldBeGreater.forEach(args => {
    describe(`when args are ${args[0]} and ${args[1]}`, () => {
      it("returns a value greater than zero", () => {
        expect(compareNumbers(args[0], args[1])).to.be.greaterThan(0);
      });
    });
  });

  shouldBeLess.forEach(args => {
    describe(`when args are ${args[0]} and ${args[1]}`, () => {
      it("returns a value less than zero", () => {
        expect(compareNumbers(args[0], args[1])).to.be.lessThan(0);
      });
    });
  });

  shouldBeEqual.forEach(args => {
    describe(`when args are ${args[0]} and ${args[1]}`, () => {
      it("returns zero", () => {
        expect(compareNumbers(args[0], args[1])).to.equal(0);
      });
    });
  });

  shouldThrow.forEach(args => {
    describe(`when args are ${args[0]} and ${args[1]}`, () => {
      it("throws an error", () => {
        expect(() => compareNumbers(args[0], args[1])).to.throw(Error);
      });
    });
  });

  it("sorts numbers as expected", () => {
    const unsorted = [1, -5.5, Infinity, 102, -Infinity, 0];
    const sorted = [-Infinity, -5.5, 0, 1, 102, Infinity];
    expect(unsorted.sort(compareNumbers)).to.deep.equal(sorted);
  });
});
