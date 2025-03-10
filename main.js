const numbers = [1, 2, 3, 4, 5];
const i = 3,
  j = 1;

console.log("Antes del intercambio:", numbers);

[numbers[i], numbers[j]] = [numbers[j], numbers[i]];

console.log("Después del intercambio:", numbers);
