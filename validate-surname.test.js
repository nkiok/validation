const validateSurname = require('./validate-surname');

describe('validate-surname', () => {
  it('should return true for names with only letters', () => {
    const surname = 'Hackerson';
    const result = validateSurname(surname);
    expect(result).toBe(true);
  });
  it('should return false for names with any numbers', () => {
    const surname = 'Hackerson1988';
    const result = validateSurname(surname);
    expect(result).toBe(false);
  });
  it('should return true for names with letters and apostrophes', () => {
    const surname = `O'Hackerson`;
    const result = validateSurname(surname);
    expect(result).toBe(true);
  });
});
