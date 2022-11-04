//2a.//
let allSoldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    allSoldTvs += inventory[i].sold
}

console.log(allSoldTvs)

/*in a function as a practice for myself*/

function salesTV() {
    let tvsSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        tvsSold += inventory[i].sold
    }
    return tvsSold;
}

console.log(salesTV());

//2b.//

const soldtvs = document.getElementById('sold-Tvs');
soldtvs.textContent = `${allSoldTvs}`;

//2c.//

let purchasedTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    purchasedTvs += inventory[i].originalStock;
}
console.log(purchasedTvs);

/*function practice for myself*/

/*function purchaseTvs(tvArray) {
    let boughtTvs = 0;
    for (let i = 0; i < inventory.length; i++) {
        boughtTvs += tvArray[i].originalStock;
    }
    return boughtTvs;
}

console.log(purchaseTvs(inventory));*/

//2d.//

const completePurchase = document.getElementById('bought-Tvs');
completePurchase.textContent = `${purchasedTvs}`;

/*2e.*/

let toBeSold = 0;
for (let i = 0; i < inventory.length; i++) {
    toBeSold = purchasedTvs - allSoldTvs;
}
console.log(toBeSold);

const totalStock = document.getElementById('to-be-sold');
totalStock.textContent = `${toBeSold}`;