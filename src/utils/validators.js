const { DEAFULTS, weekDays } = require("./defaults");

const validateTimeFormat = (time) => {
  if (!time.match(/^(0?[0-9]|1[0-2]):([0-5]\d)$/)) {
    return false;
  }

  return true;
};

const validateWeekDays = (day) => {
  if (!weekDays.includes(day?.toLowerCase())) {
    return false;
  }

  return weekDays.indexOf(day.toLowerCase()) + 1;
};

const validateTimePeriod = (period) => {
  if (
    typeof period !== "string" ||
    !["am", "pm"].includes(period?.toLowerCase())
  ) {
    return false;
  }

  return true;
};

module.exports = {
  validateWeekDays,
  validateTimeFormat,
  validateTimePeriod,
};
