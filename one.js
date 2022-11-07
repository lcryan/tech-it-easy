//1a.//
const allTvNames = inventory.map((tvName) => {
    return tvName.name;
});

console.log(allTvNames);


//Bonusopdracht in combinatie met 1a. //
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

function soldOutTvsF(array) {
    return array.filter((tvObjectSold) => {
        return tvObjectSold.originalStock === tvObjectSold.sold;
    })
}

console.log(soldOutTvsF(inventory));

const soldOutTvs = inventory.filter((tvObject) => {
    if (tvObject.originalStock === tvObject.sold) {
        return true;
    }
});

console.log(soldOutTvs);


//1c.//

const lightTvs = inventory.filter((ambiTv) => {
        if (ambiTv.options.ambiLight === true)
            return true;
    }
);

console.log(lightTvs);

//1d.//

const tvSortedByPrice = inventory.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return priceA - priceB;
});

console.log(tvSortedByPrice);

