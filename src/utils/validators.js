const validateTimeFormat = (time) => {
  if (!time.match(/^\d{2}:\d{2}$/)) {
    return false;
  }

  return true;
};

export { validateTimeFormat };
