const { DEAFULTS } = require("./defaults");

const validateTimeFormat = (time) => {
  if (!time.match(/^(0?[0-9]|1[0-2]):([0-5]\d)$/)) {
    return false;
  }

  return true;
};

const validateWeekDays = (day) => {
  if (
    ![
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ].includes(day?.toLowerCase())
  ) {
    return false;
  }

  return true;
};

const validateTimePeriod = (period) => {
  if (!["am", "pm"].includes(period?.toLowerCase())) {
    return false;
  }

  return true;
};

const validateAtState = (time, period, excutionChain) => {
  const result = {};
  if (excutionChain.includes("on") || excutionChain.includes("every")) {
    time ? (result.time = time) : (result.time = DEAFULTS.at);
    period ? (result.period = period) : (result.period = DEAFULTS.period);
  }
};

module.exports = {
  validateWeekDays,
  validateTimeFormat,
  validateTimePeriod,
  validateAtState,
};
