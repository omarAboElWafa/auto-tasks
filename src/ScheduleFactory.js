const WeeklyScheduler = require("./schedulers/WeeklyScheduler");
const DailyScheduler = require("./schedulers/DailyScheduler");
const HourlyScheduler = require("./schedulers/HourlyScheduler");

class ScheduleFactory {
  constructor() {
    this.schedules = [];
  }

  static createSchedule(scheduleData) {
    const { every, at, period, on, callBackTask } = scheduleData;
    let schedule;
    switch (every) {
      case "week":
        schedule = new WeeklyScheduler(on, at, period);
        break;
      case "day":
        schedule = new DailyScheduler(at, period);
        break;
      case "hour":
        schedule = new HourlyScheduler(on);
        break;
      default:
        throw new Error(
          "Invalid time unit, every must be set to week or day or hour"
        );
    }
    return schedule.task(callBackTask).excute();
  }
}

module.exports = ScheduleFactory;
