const ScheduleFactory = require("./ScheduleFactory");
class ScheduleBuilder {
  constructor() {
    this.scheduleData = {};
  }

  every(timeUnit = "week") {
    if (typeof timeUnit !== "string") {
      throw new Error("Invalid time unit, every must be set to string.");
    }
    const isValid = ["week", "day", "hour"].includes(timeUnit.toLowerCase());
    if (!isValid) {
      throw new Error(
        "Invalid time unit, every must be set to 'week' or 'day' or 'hour'"
      );
    }
    this.scheduleData.every = timeUnit.toLowerCase();
    return this;
  }

  at(time) {
    // valid only for every week || every day
    if (
      this.scheduleData.every !== "week" &&
      this.scheduleData.every !== "day"
    ) {
      throw new Error("Invalid time unit, every must be set to week or day");
    }
    this.scheduleData.at = time;
    return this;
  }

  on(day) {
    if (this.scheduleData.every !== "week") {
      throw new Error("Invalid time unit, every must be set to week");
    }
    this.scheduleData.on = day;
    return this;
  }

  period(period) {
    if (
      this.scheduleData.every !== "week" ||
      this.scheduleData.every !== "day"
    ) {
      throw new Error("Invalid time unit, every must be set to week or day");
    }

    if (!["am", "pm"].includes(period.toLowerCase())) {
      throw new Error("Invalid period");
    }
    this.scheduleData.period = period.toLowerCase();
    return this;
  }

  build() {
    return ScheduleFactory.createSchedule(this.scheduleData);
  }
}

module.exports = ScheduleBuilder;
