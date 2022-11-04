/*
* **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.

* **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.

* **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

* **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

    ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  ```

* **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

#### Bonusopdracht

1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
    2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!*/

/*
Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

    ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  ```*/


//4a//

/*function oneTvDetails(tvDetails) {
    return `${tvDetails.brand} ${tvDetails.type} - ${tvDetails.name}`;
}

console.log(oneTvDetails(inventory[0]));

//4b//

function oneTvPrice(tvArray) {
    return `€ ${tvArray.price},-`
}

console.log(oneTvPrice(inventory[0]));*/

//4c//

function oneTvScreenSize(tvArray){
    for(let i=0; i<inventory.length; i++){
        return `${tvArray.availableSizes} inch | ${tvArray.availableSizes * 2.54} cm`
    }
}
console.log(oneTvScreenSize(inventory[4]))