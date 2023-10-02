const data = require('./data.json');
import * as S from 'strinify';
const D = require('dates-in-js');


export function fullName(firstName: string, lastName: string): string {
    const formattedFullName: string = `${S.capitalizeWords(firstName)} ${S.capitalizeWords(lastName)}`;
    return formattedFullName;
}

console.log(fullName(data[0].first_name, data[0].last_name));

export function formatPurchasedDate(purchasedDate: string): string {
    const purchased = new D(purchasedDate);
    const formattedPurchaseDate = purchased.format('M D, Y');
    return `Purchased: ${formattedPurchaseDate}`;
}

console.log(formatPurchasedDate(data[0].purchased));

export function lastPaymentWhen(lastPaymentDate: string): string {
    const lastPayment = new D(lastPaymentDate);
    const when = lastPayment.when();
    return `Last Payment: ${when}`;
}

console.log(lastPaymentWhen(data[0].lastpayment));

export function formatPhone(phoneNumber: number | string): string {
    const phone = typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
    if (phone.length === 10) {
        const formattedPhoneNumber = `(${phone.slice(0,3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
        return formattedPhoneNumber;
    }
    throw "Error: The phone number should be 10 digit number or a 10 character string";
}

console.log('Phone Number:', formatPhone(data[0].phone));


const challenge = {
    formatPhone, formatPurchasedDate, lastPaymentWhen, fullName
}

export default challenge;
