const Scheduler = require("../Scheduler.js");
const {
  validateTimeFormat,
  validateWeekDays,
  validateTimePeriod,
} = require("../utils/validators.js");
class WeeklyScheduler extends Scheduler {
  constructor(day, time, period) {
    super();
    if (!day || !time || !period) {
      throw new Error("Invalid schedule data");
    }

    this.day = day.toLowerCase(); // tuesday
    this.time = time; // 12:00
    this.period = period.toLowerCase(); // am/pm
  }

  toCronExp() {
    if (validateTimeFormat(this.time) === false) {
      throw new Error("Invalid time format");
    }
    if (validateTimePeriod(this.period) === false) {
      throw new Error("Invalid schedule data");
    }
    if (this.time) {
      let [hour, minute] = this.time.split(":").map(Number);
      if (this.period === "am" && hour === 12) {
        hour = 0;
      }
      if (this.period === "pm" && hour !== 12) {
        hour += 12;
      }
      const weekDayPlace = validateWeekDays(this.day);
      if (!weekDayPlace) {
        throw new Error("Invalid day of week");
      }

      return `${minute ? `${minute}` : 0} ${hour ? `${hour}` : 0} * * ${
        weekDayPlace - 1
      }`;
    } else {
      throw new Error("Invalid time format");
    }
  }
}

module.exports = WeeklyScheduler;
