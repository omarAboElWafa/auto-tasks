const validateTimeFormat = (time) => {
  if (!time.match(/^(0?[1-9]|1[0-2]):([0-5]\d)$/)) {
    return false;
  }

  return true;
};
module.exports = { validateTimeFormat };
