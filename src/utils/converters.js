const mapNumberToTimeFormat = (numericTime) => {
  if (numericTime >= 0 && numericTime <= 12) {
    numericTime = numericTime.toString();
    if (numericTime.length === 1) {
      numericTime = `0${numericTime}`;
    }
    return `${numericTime}:00`;
  } else {
    throw new Error("Invalid time format");
  }
};

module.exports = { mapNumberToTimeFormat };
