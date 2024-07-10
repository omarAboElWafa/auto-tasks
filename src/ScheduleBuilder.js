const ScheduleFactory = require("./ScheduleFactory");
class ScheduleBuilder {
  constructor() {
    this.scheduleData = {};
  }

  every(day) {
    this.scheduleData.every = day;
    return this;
  }

  at(time) {
    this.scheduleData.at = time;
    return this;
  }

  on(day) {
    this.scheduleData.on = day;
    return this;
  }

  period(period) {
    this.scheduleData.period = period;
    return this;
  }

  build() {
    return ScheduleFactory.createSchedule(this.scheduleData);
  }
}

module.exports = ScheduleBuilder;
