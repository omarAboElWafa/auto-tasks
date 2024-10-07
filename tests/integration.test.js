// tests/integration.test.js
const { ScheduleBuilder } = require("../src/index");
const cron = require("node-cron");

jest.mock("node-cron");

describe("Integration Test", () => {
  // TODO: Write integration tests here
  //   it("should allow chaining methods together", () => {
  //     const callBackTask = jest.fn();
  //     const schedule = new ScheduleBuilder()
  //       .every("week")
  //       .at("10:00", "am")
  //       .on("monday")
  //       .do(callBackTask);

  //   });

  it("should throw an error if every is not set to week or day", () => {
    expect(() => {
      new ScheduleBuilder()
        .every("invalid")
        .at("10:00", "am")
        .on("monday")
        .do(() => {});
    }).toThrow(
      "Invalid time unit, every must be set to 'week' or 'day' or 'hour'"
    );
  });

  it("should throw an error if on is not a valid day of the week", () => {
    expect(() => {
      new ScheduleBuilder()
        .every("day")
        .at("10:00", "am")
        .on("invalid-day")
        .do(() => {});
    }).toThrow("Invalid time unit, every must be set to week");
  });

  it("should throw an error if at is not a valid time format", () => {
    expect(() => {
      new ScheduleBuilder()
        .every("day")
        .at("invalid-time")
        .on("monday")
        .do(() => {});
    }).toThrow("Invalid time format");
  });
});
