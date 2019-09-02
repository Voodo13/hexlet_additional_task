/*

isPowerOfThree.js

Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

*/

const isPowerOfThree = (num) => {
  let pow3 = 1;
  while (pow3 < num) {
    pow3 *= 3;
  }
  return pow3 === num;
};

export default isPowerOfThree;