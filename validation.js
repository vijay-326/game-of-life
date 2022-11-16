/**
 * Script to process the submitted form data of the form in file
 * pricing.html 
 */
document.getElementById('carBrand').addEventListener('focusout', validateCarBrand);
document.getElementById('carType').addEventListener('focusout', validateCarModel);
document.getElementById('price-button').addEventListener('click', costEstimate);
/**
 *Part -1 - Validation for Car Brand
 */
function validateCarBrand() {
    const carBrand = document.getElementById('carBrand').value;
    const carError = document.getElementById('car-error');

    if (carBrand == "") {
        carError.classList.remove('display-none');
        return false;
    }
    else {
        carError.classList.add('display-none');
        return true;
    }
}

/**
 * Part 2 : validation for Car Type or Model
 */
function validateCarModel() {
    const carType = document.getElementById('carType').value;
    const typeError = document.getElementById('type-error');

    if (carType == "") {
        typeError.classList.remove('display-none');
        return false;
    }
    else {
        typeError.classList.add('display-none');
        return true;
    }
}

/**
 * Part -3: Calculate and display cost for car brands and car types or models
 * 
 */
function costEstimate() {
    let carNameSelect = validateCarBrand();
    let carTypeSelect = validateCarModel();
    const priceResult = document.getElementById('price-result');
    if (!carNameSelect || !carTypeSelect) {
        priceResult.classList.add('display-none');
    }
    else {
        let carBrand = document.getElementById('carBrand').value;
        let carType = document.getElementById('carType').value;
        let newChecked = document.getElementById('newCar').checked;
        let usedChecked = document.getElementById('usedCar').checked;
        let totalcost = 0;
        if (newChecked) {
            if (carBrand == "Honda") {
                if (carType == "Sedan") {
                    totalcost = 25000;
                } else if (carType == "SUV") {
                    totalcost = 26000;
                }
                else {
                    totalcost = 30000;
                }
            }
            else if (carBrand == "Ford") {
                if (carType == "Sedan") {
                    totalcost = 27000;
                } else if (carType == "SUV") {
                    totalcost = 28000;
                }
                else {
                    totalcost = 32000;
                }
            }
            else {
                if (carBrand == "Audi") {
                    if (carType == "Sedan") {
                        totalcost = 24000;
                    } else if (carType == "SUV") {
                        totalcost = 25500;
                    }
                    else {
                        totalcost = 31000;
                    }
                }
            }
        } 
        if (usedChecked) {
            if (carBrand == "Honda") {
                if (carType == "Sedan") {
                    totalcost = 15000;
                } else if (carType == "SUV") {
                    totalcost = 16000;
                }
                else {
                    totalcost = 17000;
                }
            }
            else if (carBrand == "Ford") {
                if (carType == "Sedan") {
                    totalcost = 13000;
                } else if (carType == "SUV") {
                    totalcost = 14000;
                }
                else {
                    totalcost = 15500;
                }
            }
            else {
                if (carType == "Sedan") {
                    totalcost = 12500;
                } else if (carType == "SUV") {
                    totalcost = 13500;
                }
                else {
                    totalcost = 16500;
                }
            }
        }
        
        let taxes = totalcost * 0.21;
        let total = totalcost + taxes;
        document.getElementById('price-value').innerHTML = '$' + totalcost.toFixed(2);
        document.getElementById('taxes-value').innerHTML = '$' + taxes.toFixed(2);
        document.getElementById('total-value').innerHTML = '$' + total.toFixed(2);
        priceResult.classList.remove('display-none');
    }
}

