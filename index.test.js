const { fetchData, customerPurchaseData, formatPhone, formatPurchasedDate, lastPaymentWhen, fullName } = require('./index.js');
const S = require('strinify');
const D = require('dates-in-js');

test('fullName should capitalize and concatenate first name and last name', () => {
    const firstName = 'parul';
    const lastName = 'bhardwaj';
    expect(fullName(firstName, lastName)).toBe('Parul Bhardwaj');
});

it('formatPurchasedDate should format the purchased date correctly', () => {
    const purchasedDate = '2018-04-03T18:13:55Z';
    expect(formatPurchasedDate(purchasedDate)).toBe('Purchased: April 03, 2018');
});

it('lastPaymentWhen should format the last payment date correctly', () => {
    const lastPayment = '2020-08-22T11:10:41Z';
    expect(lastPaymentWhen(lastPayment)).toBe('Last Payment: 3 years ago');
});

test('formatPhone should format a 10-digit phone number correctly', () => {
    const phoneNumber = '1234567890';
    expect(formatPhone(phoneNumber)).toBe('(123) 456-7890');
    const phoneNumberTwo = 1234567890;
    expect(formatPhone(phoneNumberTwo)).toBe('(123) 456-7890');
});

test('formatPhone should throw an error when phonenumber is not 10-digit', () => {
    const phoneNumber = '123456789';
    expect(() => formatPhone(phoneNumber)).toThrowError('Error: The phone number should be 10 digit number or a 10 character string');
});


