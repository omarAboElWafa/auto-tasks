const DailyScheduler = require("../src/schedulers/DailyScheduler");
describe("DailyScheduler", () => {
  it("should throw an error if day, time or period is not provided", () => {
    expect(() => {
      new DailyScheduler();
    }).toThrow("Invalid schedule data");
  });

  it("should throw an error if time format is invalid", () => {
    expect(() => {
      new DailyScheduler("12:00:00", "am").toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw an error if period is invalid", () => {
    expect(() => {
      new DailyScheduler("12:00", "xx").toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should return a cron expression", () => {
    const scheduler = new DailyScheduler("12:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 12 * * *");
  });

  it("should return a cron expression - 1", () => {
    const scheduler = new DailyScheduler("05:40", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("40 17 * * *");
  });

  it("should return a cron expression - 2", () => {
    const scheduler = new DailyScheduler("10:00", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 10 * * *");
  });

  it("should return a cron expression - 3", () => {
    const scheduler = new DailyScheduler("9:00");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 9 * * *");
  });

  it("should return a cron expression - 4", () => {
    const scheduler = new DailyScheduler("5:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 17 * * *");
  });

  it("should return a cron expression - 5", () => {
    const scheduler = new DailyScheduler("11:30", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("30 11 * * *");
  });

  it("should return a cron expression - 6", () => {
    const scheduler = new DailyScheduler("8:15", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("15 8 * * *");
  });
});
