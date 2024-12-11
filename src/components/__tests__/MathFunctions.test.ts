import { expect, test, describe } from "vitest";
import { sum, multiply } from "@/utils/math-functions";

describe("Math Functions", () => {
  test("adds 1 and 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("multiply 5 and 2 to equal 10", () => {
    expect(multiply(5, 2)).toBe(10);
  });
});
