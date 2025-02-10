// tests/integration.test.js
const { ScheduleBuilder } = require("../src/index");
const cron = require("node-cron");

jest.mock("node-cron");

describe("Integration Test", () => {
  // TODO: Write integration tests here
  it("should schedule a cron job with the expected cron expression and callback", () => {
    // Arrange: create a callback function and build a schedule.
    const callBackTask = jest.fn();
    new ScheduleBuilder()
      .every("week")
      .at("10:00", "am")
      .on("monday")
      .do(callBackTask);

    // Define the expected cron expression for Monday at 10:00 AM.
    const expectedCronExpression = "0 10 * * 1";

    // Assert: node-cron.schedule should have been called exactly once with the expected expression and a function.
    expect(cron.schedule).toHaveBeenCalledTimes(1);
    expect(cron.schedule).toHaveBeenCalledWith(
      expectedCronExpression,
      expect.any(Function)
    );

    // Optionally, verify that the scheduled callback works as expected.
    // Extract the function passed to node-cron.schedule.
    const scheduledFunction = cron.schedule.mock.calls[0][1];

    // Manually invoke the scheduled function.
    scheduledFunction();

    // Verify that the original callback task was executed.
    expect(callBackTask).toHaveBeenCalled();
  });

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

describe("ScheduleBuilder Integration Tests", () => {
  // Clear mocks before each test so tests don't interfere.
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Example 1: every week on monday at 05:30 pm", () => {
    const callBackTask = jest.fn();
    new ScheduleBuilder()
      .every("week")
      .on("monday")
      .at("05:30", "pm")
      .do(callBackTask);

    // Expected cron expression: "30 17 * * 1"
    const expectedCronExpression = "30 17 * * 1";

    // Verify that node-cron.schedule was called correctly.
    expect(cron.schedule).toHaveBeenCalledTimes(1);
    expect(cron.schedule).toHaveBeenCalledWith(
      expectedCronExpression,
      expect.any(Function)
    );

    // Manually invoke the scheduled callback.
    const scheduledFunction = cron.schedule.mock.calls[0][1];
    scheduledFunction();
    expect(callBackTask).toHaveBeenCalled();
  });

  test("Example 2: every day at 10:00 am", () => {
    const callBackTask = jest.fn();
    new ScheduleBuilder().every("day").at("10:00", "am").do(callBackTask);

    // Expected cron expression: "0 10 * * *"
    const expectedCronExpression = "0 10 * * *";

    expect(cron.schedule).toHaveBeenCalledTimes(1);
    expect(cron.schedule).toHaveBeenCalledWith(
      expectedCronExpression,
      expect.any(Function)
    );

    const scheduledFunction = cron.schedule.mock.calls[0][1];
    scheduledFunction();
    expect(callBackTask).toHaveBeenCalled();
  });

  test("Example 3: every hour on monday", () => {
    const callBackTask = jest.fn();
    new ScheduleBuilder().on("monday").every("hour").do(callBackTask);

    // Expected cron expression: "0 * * * 1"
    const expectedCronExpression = "0 * * * 1";

    expect(cron.schedule).toHaveBeenCalledTimes(1);
    expect(cron.schedule).toHaveBeenCalledWith(
      expectedCronExpression,
      expect.any(Function)
    );

    const scheduledFunction = cron.schedule.mock.calls[0][1];
    scheduledFunction();
    expect(callBackTask).toHaveBeenCalled();
  });

  test("Example 4: on tuesday at 10:00 am", () => {
    const callBackTask = jest.fn();
    new ScheduleBuilder().on("tuesday").at("10:00", "am").do(callBackTask);

    // Expected cron expression: "0 10 * * 2"
    const expectedCronExpression = "0 10 * * 2";

    expect(cron.schedule).toHaveBeenCalledTimes(1);
    expect(cron.schedule).toHaveBeenCalledWith(
      expectedCronExpression,
      expect.any(Function)
    );

    const scheduledFunction = cron.schedule.mock.calls[0][1];
    scheduledFunction();
    expect(callBackTask).toHaveBeenCalled();
  });
});
