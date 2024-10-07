const cron = require("node-cron");
class Scheduler {
  constructor() {
    this.cronExcuter = cron;
  }
  // toCronExp() {
  //   throw new Error("Method toCronExp() must be implemented");
  // }

  task(callBackTask) {
    if (!callBackTask) {
      throw new Error("callBackTask is required");
    }
    this.callBackTask = callBackTask;
    return this;
  }

  excute(cronExcuter = this.cronExcuter) {
    if (!this.callBackTask) {
      throw new Error("task() method must be called before excute()");
    }
    cronExcuter.schedule(this.toCronExp(), () => {
      this.callBackTask();
    });
  }
}

module.exports = Scheduler;
