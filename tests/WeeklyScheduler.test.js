const WeeklyScheduler = require("../src/schedulers/WeeklyScheduler");

describe("WeeklyScheduler", () => {
  it("should throw an error if day, time or period is not provided", () => {
    expect(() => {
      new WeeklyScheduler();
    }).toThrow("Invalid schedule data");
  });

  it("should throw an error if time format is invalid", () => {
    expect(() => {
      new WeeklyScheduler("tuesday", "12:00:00", "am").toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should return a cron expression", () => {
    const scheduler = new WeeklyScheduler("tuesday", "12:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 12 * * 2");
  });

  it("should return a cron expression - 1", () => {
    const scheduler = new WeeklyScheduler("tuesday", "05:40", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("40 17 * * 2");
  });

  it("should return a cron expression - 2", () => {
    const scheduler = new WeeklyScheduler("tuesday", "10:00", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 10 * * 2");
  });

  it("should return a cron expression - 3", () => {
    const scheduler = new WeeklyScheduler("monday", "9:00", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 9 * * 1");
  });

  it("should return a cron expression - 4", () => {
    const scheduler = new WeeklyScheduler("sunday", "5:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 17 * * 0");
  });

  it("should return a cron expression - 5", () => {
    const scheduler = new WeeklyScheduler("wednesday", "11:30", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("30 11 * * 3");
  });

  it("should return a cron expression - 6", () => {
    const scheduler = new WeeklyScheduler("friday", "8:15", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("15 8 * * 5");
  });

  it("should return a cron expression - 7", () => {
    const scheduler = new WeeklyScheduler("saturday", "7:45", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("45 19 * * 6");
  });

  it("should return a cron expression - 8", () => {
    const scheduler = new WeeklyScheduler("thursday", "11:59", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("59 23 * * 4");
  });

  it("should return a cron expression - 9", () => {
    const scheduler = new WeeklyScheduler("monday", "12:00", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 0 * * 1");
  });

  it("should return a cron expression - 10", () => {
    const scheduler = new WeeklyScheduler("friday", "12:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 12 * * 5");
  });

  it("should return a cron expression - 11", () => {
    const scheduler = new WeeklyScheduler("sunday", "12:01", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("1 0 * * 0");
  });

  it("should return a cron expression - 12", () => {
    const scheduler = new WeeklyScheduler("tuesday", "6:30", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("30 6 * * 2");
  });

  it("should return a cron expression - 13", () => {
    const scheduler = new WeeklyScheduler("wednesday", "1:00", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 13 * * 3");
  });

  it("should return a cron expression - 14", () => {
    const scheduler = new WeeklyScheduler("saturday", "4:00", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("0 4 * * 6");
  });

  it("should return a cron expression - 15", () => {
    const scheduler = new WeeklyScheduler("thursday", "10:30", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("30 22 * * 4");
  });

  it("should return a cron expression - 16", () => {
    const scheduler = new WeeklyScheduler("monday", "11:45", "am");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("45 11 * * 1");
  });

  it("should return a cron expression - 17", () => {
    const scheduler = new WeeklyScheduler("sunday", "3:30", "pm");
    const cronExp = scheduler.toCronExp();
    expect(cronExp).toBe("30 15 * * 0");
  });

  it("should throw error - 0", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("", "12:00", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 1", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("invalidDay", "12:00", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid day of week");
  });

  it("should throw error - 2", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("monday", "25:00", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw error - 3", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("monday", "12:60", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw error - 4", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("tuesday", "13:00", "am");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw error - 5", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("wednesday", "", "am");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 6", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("thursday", "11:30", "");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 7", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("friday", "8:00", "xx");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 8", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("monday", "9:00", null);
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 9", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler(
        "saturday",
        "12:00",
        "invalidPeriod"
      );
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 10", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler(null, "12:00", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 11", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("sunday", null, "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid schedule data");
  });

  it("should throw error - 13", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("tuesday", "11:61", "am");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw error - 14", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("wednesday", "00:60", "am");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });

  it("should throw error - 15", () => {
    expect(() => {
      const scheduler = new WeeklyScheduler("friday", "24:00", "pm");
      scheduler.toCronExp();
    }).toThrow("Invalid time format");
  });
});
