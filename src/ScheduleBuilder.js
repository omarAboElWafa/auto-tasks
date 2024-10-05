const ScheduleFactory = require("./ScheduleFactory");
const {
  validateTimeFormat,
  validateWeekDays,
  validateTimePeriod,
  validateAtState,
} = require("./utils/validators");
const { mapNumberToTimeFormat } = require("./utils/converters");
const { DEAFULTS, validTimeUnits } = require("./utils/defaults");

class ScheduleBuilder {
  constructor() {
    this.scheduleData = {};
    this._excutionChain = [];
  }

  every(timeUnit = DEAFULTS.every) {
    if (typeof timeUnit !== "string") {
      throw new Error("Invalid time unit, every must be set to string.");
    }
    const isValid = validTimeUnits.includes(timeUnit.toLowerCase());
    if (!isValid) {
      throw new Error(
        "Invalid time unit, every must be set to 'week' or 'day' or 'hour'"
      );
    }
    this.scheduleData.every = timeUnit.toLowerCase();
    this._excutionChain.push("every");
    this.scheduleData.on = DEAFULTS.on;
    this.scheduleData.at = DEAFULTS.at;
    this.scheduleData.period = DEAFULTS.period;
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

  at(time, period) {
    try {
      // check if time is like "10" (can be converted to number)
      if (typeof time === "string" && !isNaN(Number(time))) {
        time = mapNumberToTimeFormat(Number(time));
      }

      if (typeof time === "number") {
        time = mapNumberToTimeFormat(time);
      }

      if (!this._excutionChain.includes("every")) {
        this.every("day");
      }

      if (
        this._excutionChain.includes("on") ||
        this._excutionChain.includes("every")
      ) {
        time ? (time = time) : (time = DEAFULTS.at);
        period ? (period = period) : (period = DEAFULTS.period);
      }

      // valid only for every week || every day
      if (
        this.scheduleData.every !== "week" &&
        this.scheduleData.every !== "day"
      ) {
        throw new Error("Invalid time unit, every must be set to week or day");
      }

      if (!validateTimeFormat(time) || !validateTimePeriod(period)) {
        throw new Error("Invalid time format or time period");
      }
      this.scheduleData.at = time;
      this.scheduleData.period = period?.toLowerCase();
      this._excutionChain.push("at");
      return this;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  build() {
    return ScheduleFactory.createSchedule(this.scheduleData);
  }
}

module.exports = ScheduleBuilder;
