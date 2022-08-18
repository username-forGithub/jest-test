const stringLength = require('./string-length');

it('length of string', () => {
  expect(stringLength('laptop')).toBe(6);
});

it('length of string', () => {
  expect(stringLength('')).toBe('string is beyond interval');
});