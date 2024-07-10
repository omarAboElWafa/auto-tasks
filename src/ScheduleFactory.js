const WeeklyScheduler = require("./schedulers/WeeklyScheduler");
class ScheduleFactory {
  constructor() {
    this.schedules = [];
  }

  static createSchedule(scheduleData) {
    const { every, at, period } = scheduleData;
    let schedule;
    if (every && at && period) {
      schedule = new WeeklyScheduler(every, at, period);
    } else {
      throw new Error("Invalid schedule data");
    }

    return schedule;
  }
}

module.exports = ScheduleFactory;
