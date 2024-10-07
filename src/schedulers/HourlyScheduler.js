const Scheduler = require("../Scheduler.js");
const { validateWeekDays } = require("../utils/validators.js");

class HourlyScheduler extends Scheduler {
  constructor(day) {
    super();
    this.everyMinute = day ? false : true;
    this.day = validateWeekDays(day);
    if (!this.day && !this.everyMinute) {
      throw new Error("Invalid day");
    }
  }

  toCronExp() {
    if (this.day) {
      return `0 * * * ${this.day - 1}`;
    }
    if (this.everyMinute) {
      return "* * * * *";
    }
    throw new Error("Invalid Cron Operation");
  }
}

module.exports = HourlyScheduler;
