// scheduleFactory.test.js
const ScheduleFactory = require("../src/ScheduleFactory");
const WeeklyScheduler = require("../src/schedulers/WeeklyScheduler");
const DailyScheduler = require("../src/schedulers/DailyScheduler");
const HourlyScheduler = require("../src/schedulers/HourlyScheduler");
const { on } = require("node-cron/src/scheduled-task");

jest.mock("../src/schedulers/WeeklyScheduler");
jest.mock("../src/schedulers/DailyScheduler");
jest.mock("../src/schedulers/HourlyScheduler");

describe("ScheduleFactory", () => {
  beforeEach(() => {
    WeeklyScheduler.mockClear();
    DailyScheduler.mockClear();
    HourlyScheduler.mockClear();
  });

  it("should create a WeeklyScheduler and call task and excute methods", () => {
    const scheduleData = {
      every: "week",
      at: "05:40",
      period: "pm",
      on: "tuesday",
      callBackTask: jest.fn(),
    };

    const mockTask = jest.fn().mockReturnThis();
    const mockExcute = jest.fn();

    WeeklyScheduler.prototype.task = mockTask;
    WeeklyScheduler.prototype.excute = mockExcute;

    ScheduleFactory.createSchedule(scheduleData);

    expect(WeeklyScheduler).toHaveBeenCalledWith("tuesday", "05:40", "pm");
    expect(mockTask).toHaveBeenCalledWith(scheduleData.callBackTask);
    expect(mockExcute).toHaveBeenCalled();
  });

  it("should create a DailyScheduler and call task and excute methods", () => {
    const scheduleData = {
      every: "day",
      at: "10:00",
      period: "am",
      callBackTask: jest.fn(),
    };

    const mockTask = jest.fn().mockReturnThis();
    const mockExcute = jest.fn();

    DailyScheduler.prototype.task = mockTask;
    DailyScheduler.prototype.excute = mockExcute;

    ScheduleFactory.createSchedule(scheduleData);

    expect(DailyScheduler).toHaveBeenCalledWith("10:00", "am");
    expect(mockTask).toHaveBeenCalledWith(scheduleData.callBackTask);
    expect(mockExcute).toHaveBeenCalled();
  });

  it("should create an HourlyScheduler and call task and excute methods", () => {
    const scheduleData = {
      every: "hour",
      on: "Wednesday",
      callBackTask: jest.fn(),
    };

    const mockTask = jest.fn().mockReturnThis();
    const mockExcute = jest.fn();

    HourlyScheduler.prototype.task = mockTask;
    HourlyScheduler.prototype.excute = mockExcute;

    ScheduleFactory.createSchedule(scheduleData);

    expect(HourlyScheduler).toHaveBeenCalledWith("Wednesday");
    expect(mockTask).toHaveBeenCalledWith(scheduleData.callBackTask);
    expect(mockExcute).toHaveBeenCalled();
  });

  it("should throw an error for invalid time unit", () => {
    const scheduleData = {
      every: "month",
      callBackTask: jest.fn(),
    };

    expect(() => ScheduleFactory.createSchedule(scheduleData)).toThrow(
      "Invalid time unit, every must be set to week or day or hour"
    );
  });
});
