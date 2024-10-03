const Scheduler = require("../Scheduler.js");

class HourlyScheduler extends Scheduler {
  constructor(day) {
    super();
    if (this.day) {
      this.day = day.toLowerCase(); // tuesday
    }
  }

  toCronExp() {
    if (this.day) {
      return `${this.day} * * *`;
    }
    return "* * * * *";
  }
}

module.exports = HourlyScheduler;
