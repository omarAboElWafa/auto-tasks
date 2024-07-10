const Scheduler = require("../Schedule.js");
class WeeklyScheduler extends Scheduler {
  constructor(day, time, period) {
    super();
    this.daysArr = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    this.day = day.toLowerCase();
    this.time = time;
    this.period = period.toLowerCase();
  }

  toCronExp() {
    let [hour, minute] = this.time.split(":").map(Number);
    if (this.period === "am" && hour === 12) {
      hour = 0;
    }
    if (this.period === "pm" && hour !== 12) {
      hour += 12;
    }
    return `${minute} ${hour} * * ${this.daysArr.indexOf(this.day)}`;
  }
}

module.exports = WeeklyScheduler;
