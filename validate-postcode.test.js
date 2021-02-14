const validatePostcode = require('./validate-postcode');

describe('validate-postcode', () => {
  it('should return false if the postcode is less than six characters', () => {
    const postcode = 'EH21B';
    const result = validatePostcode(postcode);
    expect(result).toBe(false);
  });

  it('should return false if the postcode is more than 8 characters', () => {
    const postcode = 'EH2133EDQ';
    const result = validatePostcode(postcode);
    expect(result).toBe(false);
  });

  it('should return false if the postcode contains non-alpha-numeric characters', () => {
    const postcode = 'EH2"@EDQ';
    const result = validatePostcode(postcode);
    expect(result).toBe(false);
  });
});
