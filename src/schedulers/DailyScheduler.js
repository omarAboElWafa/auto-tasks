const Scheduler = require("../Scheduler.js");
const {
  validateTimeFormat,
  validateTimePeriod,
} = require("../utils/validators.js");

class DailyScheduler extends Scheduler {
  constructor(time, period) {
    super();
    if (!time) {
      throw new Error("Invalid schedule data");
    }
    this.time = time; // 12:00
    this.period = period?.toLowerCase() ?? "am"; // am or pm
  }
  toCronExp() {
    if (!validateTimeFormat(this.time) || !validateTimePeriod(this.period)) {
      throw new Error("Invalid time format");
    }
    if (this.time) {
      let [hour, minute] = this.time.split(":").map(Number);
      if (this.period === "am" && hour === 12) {
        hour = 0;
      }
      if (this.period === "pm" && hour !== 12) {
        hour += 12;
      }
      const timeExpression = `${minute ? `${minute} ` : "0 "}${
        hour ? `${hour}` : ""
      }`;

      return `${timeExpression} * * *`;
    }

    return "* * * * *";
  }
}

module.exports = DailyScheduler;
