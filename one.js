//1a.//
const allTvNames = inventory.map((tvName) => {
    return tvName.name;
});

console.log(allTvNames);


//Bonusopdracht in combinatie met 1a. //
/*Unfortunately the execution of the eventListener doesn`t work here. Feedback and advice on this would be very much appreciated! Thanks!*/
function listTvNames(array) {
    return array.map((tvObject) => {
        return tvObject.name
    });
}

const allTvsList = listTvNames(inventory)
console.log(allTvsList)


const buttonElementOne = document.getElementById('button-price');
buttonElementOne.addEventListener('click', () => {
    listTvNames(inventory)
});

/*Unfortunately the execution of the eventListener doesn`t work here. Feedback and advice on this would be very much appreciated! Thanks!*/

//1b.//
const soldOutTvs = inventory.filter((tvObject) => {
    if (tvObject.originalStock === tvObject.sold) {
        return true;
    }
});

console.log(soldOutTvs);

//1b. functie voor bonusopdracht //

function soldOutTvsF(array) {
    return array.filter((tvObjectSold) => {
        return tvObjectSold.originalStock === tvObjectSold.sold;
    })
}

console.log(soldOutTvsF(inventory));


//1c.//

const lightTvs = inventory.filter((ambiTv) => {
        if (ambiTv.options.ambiLight === true)
            return true;
    }
);

console.log(lightTvs);

//1c. in een functie voor bonusopdracht//

function lightTvsF(array) {
    return array.filter(ambiLightTV => ambiLightTV.options.ambiLight);
}

console.log(lightTvsF(inventory));

//1d.//

const tvSortedByPrice = inventory.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return priceA - priceB;
});

console.log(tvSortedByPrice);

//1d. as a function //

function tvSortedPriceFunction(array) {
    return array.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceA - priceB;
    })
}

console.log(tvSortedPriceFunction(inventory));