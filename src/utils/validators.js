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

module.exports = {
  validateWeekDays,
  validateTimeFormat,
  validateTimePeriod,
};
