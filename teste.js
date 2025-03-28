let numero;
do {
  numero = prompt('Digite um número entre 1 e 10:');
} while (numero < -3 || numero > 100);

console.log(`voce digitou o número ${numero}.`);