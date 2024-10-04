const ScheduleFactory = require("./ScheduleFactory");
const { validateTimeFormat, validateWeekDays } = require("./utils/validators");

class ScheduleBuilder {
  constructor() {
    this.scheduleData = {};
    this._excutionChain = [];
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
    this._excutionChain.push("every");
    return this;
  }

  at(time = "00:00") {
    if (!this._excutionChain.includes("every")) {
      this.every();
    }
    // valid only for every week || every day
    if (
      this.scheduleData.every !== "week" &&
      this.scheduleData.every !== "day"
    ) {
      throw new Error("Invalid time unit, every must be set to week or day");
    }
    if (typeof time === "number") {
      time = time.toString();
    }

    if (!validateTimeFormat(time)) {
      throw new Error("Invalid time format");
    }
    this.scheduleData.at = time;
    this._excutionChain.push("at");
    return this;
  }

  on(day) {
    if (!this._excutionChain.includes("every")) {
      this.every();
    }
    if (this.scheduleData.every !== "week") {
      throw new Error("Invalid time unit, every must be set to week");
    }

    if (!validateWeekDays(day)) {
      throw new Error("Invalid day of week");
    }
    this.scheduleData.on = day;
    this._excutionChain.push("on");
    return this;
  }

  period(period) {
    if (!this._excutionChain.includes("at")) {
      throw new Error(
        "Invalid time format, 'at' must be set before calling 'period'"
      );
    }
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
    this._excutionChain.push("period");
    return this;
  }

  build() {
    return ScheduleFactory.createSchedule(this.scheduleData);
  }
}

module.exports = ScheduleBuilder;
