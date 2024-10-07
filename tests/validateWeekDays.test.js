const { validateWeekDays } = require("../src/utils/validators.js");

describe("validateWeekDays", () => {
  it(`should return 1 if day is sunday`, () => {
    const day = "sunday";
    const result = validateWeekDays(day);
    expect(result).toBe(1);
  });

  it(`should return 2 if day is monday`, () => {
    const day = "monday";
    const result = validateWeekDays(day);
    expect(result).toBe(2);
  });

  it(`should return 3 if day is tuesday`, () => {
    const day = "tuesday";
    const result = validateWeekDays(day);
    expect(result).toBe(3);
  });

  it(`should return 4 if day is wednesday`, () => {
    const day = "wednesday";
    const result = validateWeekDays(day);
    expect(result).toBe(4);
  });

  it(`should return 5 if day is thursday`, () => {
    const day = "thursday";
    const result = validateWeekDays(day);
    expect(result).toBe(5);
  });

  it(`should return 6 if day is friday`, () => {
    const day = "friday";
    const result = validateWeekDays(day);
    expect(result).toBe(6);
  });

  it(`should return 7 if day is saturday`, () => {
    const day = "saturday";
    const result = validateWeekDays(day);
    expect(result).toBe(7);
  });

  it(`should return 7 if day is SaTurdaY`, () => {
    const day = "SaTurdaY";
    const result = validateWeekDays(day);
    expect(result).toBe(7);
  });

  it(`should return 6 if day is fRiDAY`, () => {
    const day = "fRiDAY";
    const result = validateWeekDays(day);
    expect(result).toBe(6);
  });

  it(`should return 5 if day is thURsday`, () => {
    const day = "thURsday";
    const result = validateWeekDays(day);
    expect(result).toBe(5);
  });

  it(`should return 4 if day is wEdnesdaY`, () => {
    const day = "wEdnesdaY";
    const result = validateWeekDays(day);
    expect(result).toBe(4);
  });

  it(`should return 3 if day is TUESDAY`, () => {
    const day = "TUESDAY";
    const result = validateWeekDays(day);
    expect(result).toBe(3);
  });

  it(`should return false if day is invalid`, () => {
    expect(() => {
      const result = validateWeekDays("xx");
      result.toBeFalsy();
    });
  });

  it(`should return false if day is invalid - 1`, () => {
    expect(() => {
      const result = validateWeekDays("mon");
      result.toBeFalsy();
    });
  });

  it(`should return false if day is invalid - 2`, () => {
    expect(() => {
      const result = validateWeekDays("monda");
      result.toBeFalsy();
    });
  });
});
