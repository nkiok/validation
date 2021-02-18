module.exports = (surname) => {
  if (surname.match(/[0-9]/)) return false;
  if (surname.match(/[^a-zA-Z']/)) return false;
  return true;
};
