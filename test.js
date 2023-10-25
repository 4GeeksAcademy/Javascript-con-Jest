// Importa la función sum desde el archivo app.js
const { sum, fromEuroToDollar,fromDollarToYen,
    fromYenToPound } = require('./app.js');

// Inicie su primera prueba
test('adds 14 + 9 to equal 23', () => {
   // Dentro de la prueba llamamos a nuestra función suma con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importar la función desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Usa la función como se supone que debe usarse
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1,07 dólares, entonces 3,5 euros deberían ser (3,5 * 1,07)
    const expected = 3.5 * 1.07; 
    
    // Esta es la comparación para la prueba unitaria
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1,07 dólares, luego 3,5 euros deberían ser = (3,5 * 1,07)
})




test("50 dollars should be 7825 yen", function() {
    // Importar la función desde app.js
    const { fromDollarToYen } = require('./app.js');
  
   // Utiliza la función para convertir 50 dólares a yenes
    const yenAmount = fromDollarToYen(50);
  
    // Calcular el importe en yenes previsto
    const expectedYenAmount = 50 * 156.5;
  
    // Realizar la comparación de la prueba
    expect(yenAmount).toBe(expectedYenAmount);
  });



test("1000 yen should be 5.46 pounds", function() {

    // Importar la función desde app.js
    const { fromYenToPound } = require('./app.js');
  
    // Utilizar la función como se debe
    const pounds = fromYenToPound(1000);
  
    // Calcular el valor esperado utilizando el factor de conversión correcto
    const expected = 1000/ 156.5 * 0.87; // 1 yen = 0.0054 pounds
  
    // Realizar la comparación de la prueba
    expect(pounds).toBe(expected);
  });