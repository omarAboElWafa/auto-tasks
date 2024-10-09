const cron = require("node-cron");
class Scheduler {
  constructor() {
    this.cronExcuter = cron;
  }
  // toCronExp() {
  //   throw new Error("Method toCronExp() must be implemented");
  // }

  task(callBackTask) {
    try {
      if (!callBackTask) {
        throw new Error("callBackTask is required");
      }
      this.callBackTask = callBackTask;
      return this;
    } catch (error) {
      console.error(error.message);
    }
  }

  excute(cronExcuter = this.cronExcuter) {
    try {
      if (!this.callBackTask) {
        throw new Error("task() method must be called before excute()");
      }
      cronExcuter.schedule(this.toCronExp(), () => {
        this.callBackTask();
        console.log(
          `Cron job created successfully. Cron expression: ${this.toCronExp()}`
        );
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = Scheduler;
