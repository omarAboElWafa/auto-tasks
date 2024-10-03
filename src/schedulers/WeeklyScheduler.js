const Scheduler = require("../Scheduler.js");
const { validateTimeFormat } = require("../utils/validators.js");
class WeeklyScheduler extends Scheduler {
  constructor(day, time, period) {
    super();
    if (!day || !time || !period) {
      throw new Error("Invalid schedule data");
    }
    this.daysArr = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    this.day = day.toLowerCase(); // tuesday
    this.time = time; // 12:00
    this.period = period.toLowerCase(); // am/pm
  }

  toCronExp() {
    if (validateTimeFormat(this.time) === false) {
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
    }

    return `${minute ? `${minute} ` : ""} ${
      hour ? `${hour} ` : ""
    } * * ${this.daysArr.indexOf(this.day)}`;
  }
}

module.exports = WeeklyScheduler;
