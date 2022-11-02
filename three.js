/*
#### Opdracht 3 - Array methoden en functies

* **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
dubbele namen in zitten, is niet erg.
* **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
-declaratie niet aan te roepen!*/

//3a.//

const allTvBrands = inventory.map((tvArray) => {
    return tvArray.brand;
});

console.log(allTvBrands);


//3b.//

function allTvBrandsFunction(tellyArray) {
    return tellyArray.map((tvItem) => {
        return tvItem.brand; /*function within a function: do not forget!! second return*/
    });
}

const brandOutput = allTvBrandsFunction(inventory);
console.log(brandOutput);