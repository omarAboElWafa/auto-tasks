const mapNumberToTimeFormat =
  require("../src/utils/converters").mapNumberToTimeFormat;

describe("mapNumberToTimeFormat", () => {
  it("should return 12:00 AM if number is 0", () => {
    const time = mapNumberToTimeFormat(0);
    expect(time).toBe("00:00");
  });

  it("should return 01:00 AM if number is 1", () => {
    const time = mapNumberToTimeFormat(1);
    expect(time).toBe("01:00");
  });

  it("should return 02:00 AM if number is 2", () => {
    const time = mapNumberToTimeFormat(2);
    expect(time).toBe("02:00");
  });

  it("should return 03:00 AM if number is 3", () => {
    const time = mapNumberToTimeFormat(3);
    expect(time).toBe("03:00");
  });

  it("should return 04:00 AM if number is 4", () => {
    const time = mapNumberToTimeFormat(4);
    expect(time).toBe("04:00");
  });

  it("should return 05:00 AM if number is 5", () => {
    const time = mapNumberToTimeFormat(5);
    expect(time).toBe("05:00");
  });

  it("should return 06:00 AM if number is 6", () => {
    const time = mapNumberToTimeFormat(6);
    expect(time).toBe("06:00");
  });

  it("should return 07:00 AM if number is 7", () => {
    const time = mapNumberToTimeFormat(7);
    expect(time).toBe("07:00");
  });

  it("should return 08:00 AM if number is 8", () => {
    const time = mapNumberToTimeFormat(8);
    expect(time).toBe("08:00");
  });

  it("should return 09:00 AM if number is 9", () => {
    const time = mapNumberToTimeFormat(9);
    expect(time).toBe("09:00");
  });

  it("should return 10:00 AM if number is 10", () => {
    const time = mapNumberToTimeFormat(10);
    expect(time).toBe("10:00");
  });

  it("should return 11:00 AM if number is 11", () => {
    const time = mapNumberToTimeFormat(11);
    expect(time).toBe("11:00");
  });

  it("should return 12:00 PM if number is 12", () => {
    const time = mapNumberToTimeFormat(12);
    expect(time).toBe("12:00");
  });

  it("should throw error if number is 13", () => {
    expect(() => {
      mapNumberToTimeFormat(13);
    }).toThrow("Invalid time format");
  });

  it("should throw error if number is -1", () => {
    expect(() => {
      mapNumberToTimeFormat(-1);
    }).toThrow("Invalid time format");
  });

  it("should throw error if number is string '1'", () => {
    expect(() => {
      mapNumberToTimeFormat("1");
    }).toThrow("Invalid time format");
  });

  it("should throw error if number is string '13'", () => {
    expect(() => {
      mapNumberToTimeFormat("13");
    }).toThrow("Invalid time format");
  });
});
