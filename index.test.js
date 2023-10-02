const { fetchData, customerPurchaseData, formatPhone, formatPurchasedDate, lastPaymentWhen, fullName } = require('./index.js');
const S = require('strinify');
const D = require('dates-in-js');

test('formatPhone should format a 10-digit phone number correctly', () => {
    const phoneNumber = '1234567890';
    expect(formatPhone(phoneNumber)).toBe('(123) 456-7890');
});