//1a.//
/*const allTvNames = inventory.map((tvName) => {
    return tvName.name;
});

console.log(allTvNames);*/

//writing a function for 1a//

/*function allTvNames(tvArray) {
    tvArray.map((tvName) =>{
        let tvNames = 0;
        tvNames = tvName.name
        return tvNames
    })
    return tvArray
}

console.log(allTvNames(inventory))*/
//1a in combo with bonus assignment//

function allTvNames(tvArray) {
    tvArray.map(({name: tvNames}) =>{
        return tvNames
    })
    return tvArray
}

console.log(allTvNames(inventory));

const buttonElementOne = document.getElementById('button-one');
buttonElementOne.addEventListener('click',allTvNames);



//1b.//

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
