interface customerPurchaseData {
    id: number,
    firstName: string,
    lastName: string,
    purchasedDate: string,
    lastPaymentDate: string,
    phone: string,
    make: string,
    model: string,
    city: string
}

async function fetchData():Promise<customerPurchaseData> {
    // waits for promise to resolve
    const res = await fetch('data.json');
    const data: customerPurchaseData = await res.json();
    // Returns json wrapped in a promise!
    return data;
}
import * as S from 'strinify';

function fullName(firstName: string, lastName: string): string {
    const fullName = `${S.capitalizeWords(firstName)} ${S.capitalizeWords(lastName)}`
    return fullName 
}

const D = require('dates-in-js');

function formatPurchasedDate(purchasedDate: string): string {
    const purchased = new D(purchasedDate)
    const formattedPurchaseDate = purchased.format('M D, Y')
    return `Purchased: ${formattedPurchaseDate}`
}

function lastPaymentWhen(lastPaymentDate: string): string {
    const lastPayment = new D(lastPaymentDate)
    const when = lastPayment.when()
    return `Last Payment: ${when}`
}

const purchasedDate = '2023-08-02T18:13:55Z';
const formattedPurchasedDate = lastPaymentWhen(purchasedDate);
console.log(formattedPurchasedDate);
