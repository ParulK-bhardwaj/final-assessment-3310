/* eslint-disable max-len */
/* eslint-disable no-multi-assign */
/* eslint-disable no-throw-literal */
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line no-void
exports.formatPhone = exports.lastPaymentWhen = exports.formatPurchasedDate = exports.fullName = void 0;
const S = require('strinify');
const D = require('dates-in-js');
const data = require('./data.json');

function fullName(firstName, lastName) {
  const formattedFullName = ''.concat(S.capitalizeWords(firstName), ' ').concat(S.capitalizeWords(lastName));
  return formattedFullName;
}
exports.fullName = fullName;
console.log(fullName(data[0].first_name, data[0].last_name));
function formatPurchasedDate(purchasedDate) {
  const purchased = new D(purchasedDate);
  const formattedPurchaseDate = purchased.format('M D, Y');
  return 'Purchased: '.concat(formattedPurchaseDate);
}
exports.formatPurchasedDate = formatPurchasedDate;
console.log(formatPurchasedDate(data[0].purchased));
function lastPaymentWhen(lastPaymentDate) {
  const lastPayment = new D(lastPaymentDate);
  const when = lastPayment.when();
  return 'Last Payment: '.concat(when);
}
exports.lastPaymentWhen = lastPaymentWhen;
console.log(lastPaymentWhen(data[0].lastpayment));
function formatPhone(phoneNumber) {
  const phone = typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
  if (phone.length === 10) {
    const formattedPhoneNumber = '('.concat(phone.slice(0, 3), ') ').concat(phone.slice(3, 6), '-').concat(phone.slice(6));
    return formattedPhoneNumber;
  }
  throw 'Error: The phone number should be 10 digit number or a 10 character string';
}
exports.formatPhone = formatPhone;
console.log('Phone Number:', formatPhone(data[0].phone));
const challenge = {
  formatPhone,
  formatPurchasedDate,
  lastPaymentWhen,
  fullName,
};
exports.default = challenge;
