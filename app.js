// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

const oneEuroIs = {
    "JPY": 156.5, // Yen Japones
    "USD": 1.07,  // Dolar Estadounidense
    "GBP": 0.87   // Libra Inglesa
}


// Declaramos la función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convierte el valorInEuro dado a dólares
    let valueInDollar = valueInEuro * 1.07;
    // devuelve el valor en dólares
    return valueInDollar;
}


function fromDollarToYen(dollarAmount) {
    const yenAmount = dollarAmount * oneEuroIs.JPY;
    return yenAmount;
}

function fromYenToPound(yenAmount) {
    const poundAmount = yenAmount / oneEuroIs.JPY * oneEuroIs.GBP;
    return poundAmount;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};