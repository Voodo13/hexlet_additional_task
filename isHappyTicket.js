/*

Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
isHappyTicket.js

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true

Подсказки

Преобразовать число в строку можно с помощью функции String:

String(1234); // '1234'

Преобразовать строку в число можно с помощью функции Number:

Number('456'); // 456

Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7

*/

const isHappyTicket = (num) => {
  const str = String(num);
  let half1 = 0;
  let half2 = 0;
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    half1 += Number(str[i]);
    half2 += Number(str[j]);
  }
  return half1 === half2;
};

export default isHappyTicket;