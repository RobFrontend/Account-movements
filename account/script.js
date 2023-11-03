"use strict";

// There was $1,300 in the account before payday
// payment from work = $3400
// grocery shopping = $200
// rent for the room = $750
// a gift from my uncle = $100
// new shoes = $200
// a gift from my mom = $50
// udemy courses at a discount = $120

// EXAMPLE
const movements = [3400, -200, -750, 100, -200, 50, -120];

console.log(`---- Deposits ----`);
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

console.log(`---- TOTAL Deposits ----`);
const depositsTotal = deposits.reduce((acc, dep) => acc + dep, 0);
console.log(depositsTotal);

console.log(`---- Charges ----`);
const charges = movements.filter((mov) => mov < 0);
console.log(charges);

console.log(`---- TOTAL Charges ----`);
const chargesTotal = charges.reduce((acc, char) => acc + char, 0);
console.log(chargesTotal);

console.log(`---- Account balance after all movements ----`);
console.log(`---- (There was $1300 before payday) ----`);
const movAndBal = function () {
  movements.map((mov, i) =>
    console.log(`${mov > 0 ? `Deposit` : `Charge`} of $${Math.abs(mov)}`)
  );

  const balance = movements.reduce((acc, mov) => acc + mov, 1300);
  console.log(`There is $${balance} in the account now!!!`);
};
movAndBal();
