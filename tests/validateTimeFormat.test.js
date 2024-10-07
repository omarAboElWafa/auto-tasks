const { validateTimeFormat } = require("../src/utils/validators");

describe("test validateTimeFormat validator - valid", () => {
  it("should return true", () => {
    expect(validateTimeFormat("01:00")).toBe(true);
  });

  it("should return true", () => {
    expect(validateTimeFormat("12:00")).toBe(true);
  });

  it("should return true", () => {
    expect(validateTimeFormat("12:30")).toBe(true);
  });

  it("should return true", () => {
    expect(validateTimeFormat("00:00")).toBe(true);
  });
});

describe("test validateTimeFormat validator - invalid", () => {
  it("should return false", () => {
    expect(validateTimeFormat("13:00")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("25:00")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("01:60")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("op:aa")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("aaaaaaa")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("12")).toBe(false);
  });

  it("should return false", () => {
    expect(validateTimeFormat("12:")).toBe(false);
  });
});
