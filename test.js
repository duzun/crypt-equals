'use strict';

const ceq = require('.');

describe('crypt-equals', () => {
  test('has correct comparison', () => {
    expect(ceq('crypt-equals', 'crypt-equals')).toBe(true);
    expect(ceq('crypt-equals', 'equals-crypt')).toBe(false); // same length
    expect(ceq('crypt-equals', 'equals')).toBe(false); // length differ

    expect(ceq([1,2,3,4,5], [1,2,3,4,5])).toBe(true);
    expect(ceq([1,2,3,4,5+256], [1,2,3,4,5])).toBe(false);
    expect(ceq([1234], [1234])).toBe(true);

    expect(ceq(str2byteArray('crypt-equals'), str2byteArray('crypt-equals'))).toBe(true);
    expect(ceq(str2byteArray('crypt-equals'), str2byteArray('equals-crypt'))).toBe(false);
    expect(ceq(str2byteArray('crypt-equals'), str2byteArray('equals'))).toBe(false);
  });

  test('shoud have both arguments of type String or both Array', () => {
    expect(() => ceq('crypt-equals', str2byteArray('crypt-equals'))).toThrow(/Second argument not of type String/);
    expect(() => ceq(str2byteArray('crypt-equals'), 'crypt-equals')).toThrow(/Second argument not of type Array/);

    expect(ceq([123,456,789], 'crypt-equals')).toBe(false); // different lengths

    expect(() => ceq('crypt-equals', 123)).toThrow(/Both arguments should be of type String or Array/);

    expect(() => ceq(null, 'crypt-equals')).toThrow(/Cannot read property 'length' of/);
    expect(() => ceq(null, undefined)).toThrow(/Cannot read property 'length' of/);
  });
});

function str2byteArray(str) {
    return str.split('').map((c) => c.charCodeAt(0));
}
