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

const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const depositsTotal = deposits.reduce((acc, dep) => acc + dep);
console.log(depositsTotal);

const charges = movements.filter((mov) => mov < 0);
console.log(charges);

const chargesTotal = charges.reduce((acc, char) => acc + char);
console.log(chargesTotal);

const movAndBal = function () {
  movements.map((mov, i) =>
    console.log(`${mov > 0 ? `Deposit` : `Charge`} of $${mov}`)
  );

  const balance = movements.reduce((acc, mov) => acc + mov, 1300);
  console.log(balance);
};
movAndBal();
