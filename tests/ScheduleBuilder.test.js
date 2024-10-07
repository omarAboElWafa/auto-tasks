const ScheduleBuilder = require("../src/ScheduleBuilder.js");

describe("test ScheduleBuilder - every", () => {
  it("should return scheduleData object", () => {
    const scheduleBuilder = new ScheduleBuilder().every("day");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("every");
    expect(scheduleBuilder.scheduleData.every).toBe("day");
  });

  it("should return scheduleData object", () => {
    const scheduleBuilder = new ScheduleBuilder().every("week");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("every");
    expect(scheduleBuilder.scheduleData.every).toBe("week");
  });

  it("should return scheduleData object", () => {
    const scheduleBuilder = new ScheduleBuilder().every("hour");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("every");
    expect(scheduleBuilder.scheduleData.every).toBe("hour");
  });

  it("should be override every value to week", () => {
    const scheduleBuilder = new ScheduleBuilder().every();
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("every");
    expect(scheduleBuilder.scheduleData.every).toBe("week");
  });

  it("should throw error", () => {
    expect(() => new ScheduleBuilder().every("test")).toThrow(
      "Invalid time unit, every must be set to 'week' or 'day' or 'hour'"
    );
  });

  it("should throw error", () => {
    expect(() => new ScheduleBuilder().every(45)).toThrow(
      "Invalid time unit, every must be set to string."
    );
  });

  it("should throw error", () => {
    expect(() => new ScheduleBuilder().every("monday")).toThrow(
      "Invalid time unit, every must be set to 'week' or 'day' or 'hour'"
    );
  });
});

describe("test ScheduleBuilder - on", () => {
  it("should return scheduleData object", () => {
    const scheduleBuilder = new ScheduleBuilder().on("monday");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("on");
    expect(scheduleBuilder.scheduleData.on).toBe("monday");
  });

  it("should return scheduleData object", () => {
    const scheduleBuilder = new ScheduleBuilder().on("Friday");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("on");
    expect(scheduleBuilder.scheduleData.on).toBe("Friday");
  });

  it("should return _excutionChain object", () => {
    const scheduleBuilder = new ScheduleBuilder().on("monday");
    expect(scheduleBuilder).toHaveProperty("_excutionChain");
    expect(scheduleBuilder._excutionChain).toContain("on");
    expect(scheduleBuilder._excutionChain).toContain("every");
  });

  it("should throw error", () => {
    expect(() => new ScheduleBuilder().on()).toThrow("Invalid day of week");
  });

  it("should throw error", () => {
    expect(() => new ScheduleBuilder().on("anyday")).toThrow(
      "Invalid day of week"
    );
  });
});

describe("test ScheduleBuilder - at", () => {
  it("should return scheduleData object - 'at' string value - without period", () => {
    const scheduleBuilder = new ScheduleBuilder().at("10:00");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("10:00");
    expect(scheduleBuilder.scheduleData).toHaveProperty("period");
    expect(scheduleBuilder.scheduleData.period).toBe("am");
  });

  it("should return scheduleData object - 'at' string value - with period", () => {
    const scheduleBuilder = new ScheduleBuilder().at("02:45", "pm");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("02:45");
    expect(scheduleBuilder.scheduleData.period).toBe("pm");
  });

  it("should return scheduleData object - 'at' string value - with period capital", () => {
    const scheduleBuilder = new ScheduleBuilder().at("12:45", "AM");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("12:45");
    expect(scheduleBuilder.scheduleData.period).toBe("am");
  });

  it("should return scheduleData object - single 'at' number value - with period", () => {
    const scheduleBuilder = new ScheduleBuilder().at(5, "pm");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("05:00");
    expect(scheduleBuilder.scheduleData.period).toBe("pm");
  });

  it("should return scheduleData object - single 'at' string value - with period", () => {
    const scheduleBuilder = new ScheduleBuilder().at("6", "Am");
    expect(scheduleBuilder).toHaveProperty("scheduleData");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("06:00");
    expect(scheduleBuilder.scheduleData.period).toBe("am");
  });

  it("should return scheduleData object - single 'at' string value - without period", () => {
    expect(() => {
      const scheduleBuilder = new ScheduleBuilder().at("10");

      expect(scheduleBuilder).toHaveProperty("scheduleData");
      expect(scheduleBuilder.scheduleData).toHaveProperty("at");
      expect(scheduleBuilder.scheduleData.at).toBe("10:00");
    });
  });

  it("should return scheduleData - 'at' value string - empty", () => {
    const scheduleBuilder = new ScheduleBuilder().at("");
    expect(scheduleBuilder.scheduleData).toHaveProperty("at");
    expect(scheduleBuilder.scheduleData.at).toBe("00:00");

    expect(scheduleBuilder.scheduleData).toHaveProperty("period");
    expect(scheduleBuilder.scheduleData.period).toBe("am");

    expect(scheduleBuilder._excutionChain).toEqual(["every", "at"]);
  });

  it("should throw error - 'at' value string with triple value", () => {
    expect(() => new ScheduleBuilder().at("10:00:00")).toThrow(
      "Invalid time format or time period"
    );
  });

  it("should throw error - 'at' value string with triple value - with period", () => {
    expect(() => new ScheduleBuilder().at("10:00:00", "pm")).toThrow(
      "Invalid time format or time period"
    );
  });
});

describe("test ScheduleBuilder", () => {
  it("should return scheduleData object - chain every on at", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder
      .every("week")
      .on("monday")
      .at("10:00").scheduleData;

    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("week");

    expect(scheduleData).toHaveProperty("on");
    expect(scheduleData.on).toBe("monday");

    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("10:00");

    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("am");

    expect(scheduleBuilder._excutionChain).toEqual(["every", "on", "at"]);

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });

  it("should return scheduleData object - chain on at only", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder.on("monday").at("10:00").scheduleData;

    //overrided every
    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("week");

    expect(scheduleData).toHaveProperty("on");
    expect(scheduleData.on).toBe("monday");

    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("10:00");

    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("am");

    expect(scheduleBuilder._excutionChain).toEqual(["every", "on", "at"]);

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });

  it("should return scheduleData object - chain at only", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder.at("10:00", "pm").scheduleData;

    //overrided every
    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("day");

    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("10:00");

    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("pm");

    expect(scheduleBuilder._excutionChain).toEqual(["every", "at"]);

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });

  it("should return scheduleData object - chain every only", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder.every("week").scheduleData;

    scheduleBuilder._excutionChain = ["every"];

    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("week");

    // overrided on
    expect(scheduleData).toHaveProperty("on");
    expect(scheduleData.on).toBe("monday");

    // overrided at
    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("00:00");

    // overrided period
    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("am");

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });

  it("should return scheduleData object - chain on only", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder.on("monday").scheduleData;

    scheduleBuilder._excutionChain = ["every", "on"];

    // overrided every
    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("week");

    expect(scheduleData).toHaveProperty("on");
    expect(scheduleData.on).toBe("monday");

    // overrided at
    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("00:00");

    // overrided period
    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("am");

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });

  it("should throw error - chain on and at - on is empty", () => {
    const scheduleBuilder = new ScheduleBuilder();
    expect(() => scheduleBuilder.on().at("10:00")).toThrow(
      "Invalid day of week"
    );
  });

  it("should return scheduleData object - chain on and at - at is empty", () => {
    const scheduleBuilder = new ScheduleBuilder();
    const scheduleData = scheduleBuilder.on("monday").at().scheduleData;
    expect(scheduleData).toHaveProperty("every");
    expect(scheduleData.every).toBe("week");

    expect(scheduleData).toHaveProperty("on");
    expect(scheduleData.on).toBe("monday");

    expect(scheduleData).toHaveProperty("at");
    expect(scheduleData.at).toBe("00:00");

    expect(scheduleData).toHaveProperty("period");
    expect(scheduleData.period).toBe("am");

    expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
  });
});

// describe("test ScheduleBuilder - callback tasks - do()", () => {
//   it("should return scheduleData object - with callback task", () => {
//     const scheduleBuilder = new ScheduleBuilder();
//     const scheduleData = scheduleBuilder
//       .every("week")
//       .on("monday")
//       .at("10:00")
//       .do(() => console.log("Hello world!"));

//     console.log(scheduleData, "scheduleData>>>>>");

//     expect(scheduleData).toHaveProperty("every");
//     expect(scheduleData.every).toBe("week");

//     expect(scheduleData).toHaveProperty("on");
//     expect(scheduleData.on).toBe("monday");

//     expect(scheduleData).toHaveProperty("at");
//     expect(scheduleData.at).toBe("10:00");

//     expect(scheduleData).toHaveProperty("period");
//     expect(scheduleData.period).toBe("am");

//     expect(scheduleData).toHaveProperty("task");
//     expect(scheduleData.task).toBeInstanceOf(Function);

//     expect(scheduleBuilder._excutionChain).toEqual(["every", "on", "at", "do"]);

//     expect(scheduleBuilder.scheduleData).toEqual(scheduleData);
//   });
// });
