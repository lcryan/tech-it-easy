
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