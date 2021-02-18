module.exports = (postcode) => {
  if (postcode.length < 6) return false;
  if (postcode.length > 8) return false;
  if (postcode.match(/[^a-zA-Z0-9]/)) return false;

  return true;
};
