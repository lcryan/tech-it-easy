/* 2.
_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
een oude vertrouwde for-loop voor!

* **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
* **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
* **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
console.
* **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
* **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.*/

//2a.//
let allSoldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    allSoldTvs += inventory[i].sold
}

console.log(allSoldTvs)

/*in a function as a practice for myself*/

/*function salesTV() {
    let tvsSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        tvsSold += inventory[i].sold
    }
    return tvsSold;
}

console.log(salesTV());*/

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

/*function purchaseTvs(tvarray) {
    let boughtTvs = 0;
    for (let i = 0; i < inventory.length; i++) {
        boughtTvs += tvarray[i].originalStock;
    }
    return boughtTvs;
}

console.log(purchaseTvs(inventory));*/

//2d.//

const completePurchase = document.getElementById('bought-Tvs');
completePurchase.textContent = `${purchasedTvs}`;