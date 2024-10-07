const validateTimePeriod =
  require("../src/utils/validators").validateTimePeriod;

describe("validateTimePeriod", () => {
  it("should return true if period is am", () => {
    const period = "am";
    const result = validateTimePeriod(period);
    expect(result).toBe(true);
  });

  it("should return true if period is pm", () => {
    const period = "pm";
    const result = validateTimePeriod(period);
    expect(result).toBe(true);
  });

  it("should return false if period is AM", () => {
    const period = "AM";
    const result = validateTimePeriod(period);
    expect(result).toBe(true);
  });

  it("should return false if period is PM", () => {
    const period = "PM";
    const result = validateTimePeriod(period);
    expect(result).toBe(true);
  });

  it("should return false if period is empty", () => {
    const period = "";
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is null", () => {
    const period = null;
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is undefined", () => {
    const period = undefined;
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is 0", () => {
    const period = 0;
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is 1", () => {
    const period = 1;
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is 'abc'", () => {
    const period = "abc";
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });

  it("should return false if period is '123'", () => {
    const period = "123";
    const result = validateTimePeriod(period);
    expect(result).toBe(false);
  });
});
