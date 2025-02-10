const Scheduler = require("../src/Scheduler");
const cron = require("node-cron");
const { handleError } = require("../src/utils/helpers");

jest.mock("node-cron");

describe("Scheduler", () => {
  let scheduler;
  const dummyCallBackTask = jest.fn();

  beforeEach(() => {
    scheduler = new Scheduler();
  });

  describe("task", () => {
    it("should set the callBackTask correctly", () => {
      scheduler.task(dummyCallBackTask);
      expect(scheduler.callBackTask).toBe(dummyCallBackTask);
    });

    it("should log an error if callBackTask is not set", () => {
      expect(() => scheduler.task()).toThrowError("callBackTask is required");
    });
  });

  describe("excute", () => {
    it("should log an error if task() method is not called before excute()", () => {
      expect(() => scheduler.excute()).toThrowError(
        "task() method must be called before excute()"
      );
    });

    it("should schedule the task correctly", () => {
      scheduler.toCronExp = jest.fn().mockReturnValue("* * * * *");
      scheduler.task(dummyCallBackTask);
      scheduler.excute();

      expect(cron.schedule).toHaveBeenCalledWith(
        "* * * * *",
        expect.any(Function)
      );
    });

    it("should call the callback task when the cron job is executed", () => {
      scheduler.toCronExp = jest.fn().mockReturnValue("* * * * *");
      scheduler.task(dummyCallBackTask);
      scheduler.excute();

      const scheduledFunction = cron.schedule.mock.calls[0][1];
      scheduledFunction();

      expect(dummyCallBackTask).toHaveBeenCalled();
    });
  });
});
