/*

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:

import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10

*/

const factorial = (numb) => {
  const iter = (counter, acc) => {
    if (counter <= 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };
  return iter(numb, 1);
};
const withoutTwoZeros = (n0, n1) => {
  if (n0 >= n1 + 2) return 0;
  return factorial(n1 + 1) / (factorial(n1 + 1 - n0) * factorial(n0));
};


const proverka = (n0, n1) => {
	console.log (`(${n0}, ${n1}) ....... ${withoutTwoZeros(n0, n1)}`);
}

proverka(0, 0);

proverka(1, 0);
proverka(1, 1);
proverka(1, 2);
proverka(1, 3);
proverka(1, 4);
proverka(1, 5);
proverka(1, 6);

proverka(2, 0);
proverka(2, 1);
proverka(2, 2);
proverka(2, 3);
proverka(2, 4);
proverka(2, 5);
proverka(2, 6);

proverka(3, 0);
proverka(3, 1);
proverka(3, 2);
proverka(3, 3);
proverka(3, 4);
proverka(3, 5);
proverka(3, 6);

proverka(4, 0);
proverka(4, 1);
proverka(4, 2);
proverka(4, 3);
proverka(4, 4);
proverka(4, 5);
proverka(4, 6);

proverka(10, 10);



// export default withoutTwoZeros;
