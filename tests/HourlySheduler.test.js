const HourlyScheduler = require("../src/schedulers/HourlyScheduler");

describe("HourlyScheduler", () => {
  it("should return a cron expression", () => {
    const scheduler = new HourlyScheduler("tuesday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 2");
  });

  it("should return a cron expression - 1", () => {
    const scheduler = new HourlyScheduler();
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("* * * * *");
  });

  it("should return a cron expression - 2", () => {
    const scheduler = new HourlyScheduler("monday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 1");
  });

  it("should return a cron expression - 3", () => {
    const scheduler = new HourlyScheduler("sunday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 0");
  });

  it("should return a cron expression - 4", () => {
    const scheduler = new HourlyScheduler("wednesday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 3");
  });

  it("should return a cron expression - 5", () => {
    const scheduler = new HourlyScheduler("friday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 5");
  });

  it("should return a cron expression - 6", () => {
    const scheduler = new HourlyScheduler("saturday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 6");
  });

  it("should return a cron expression - 7", () => {
    const scheduler = new HourlyScheduler("thursday");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 * * * 4");
  });

  it("should throw an error if day is invalid", () => {
    expect(() => {
      new HourlyScheduler("xx").toCronExp();
    }).toThrow("Invalid day");
  });

  it("should throw an error if day is invalid - 1", () => {
    expect(() => {
      new HourlyScheduler("mon").toCronExp();
    }).toThrow("Invalid day");
  });
});
