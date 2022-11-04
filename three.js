//3a.//

const allTvBrands = inventory.map((tvArray) => {
    return tvArray.brand;
});

console.log(allTvBrands);

/*const soldtvs = document.getElementById('sold-Tvs');
soldtvs.textContent = `${allSoldTvs}`;

const listOfTvBrands = document.getElementById('list-of-brands');
listOfTvBrands.textContent = `${allTvBrands}`;*/

//3b.//

function allTvBrandsFunction(tellyArray) {
    const listBrands = document.getElementById('list-of-brands');
    tellyArray.map((listOfTvs) => {
        const printedList = document.createElement('li')
        printedList.textContent = listOfTvs.brand;
        return listBrands.appendChild(printedList)
    });
}

allTvBrandsFunction(inventory);