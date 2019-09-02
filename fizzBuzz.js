/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

    Если число делится без остатка на 3, то вместо него выводится слово Fizz
    Если число делится без остатка на 5, то вместо него выводится слово Buzz
    Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
    В остальных случаях выводится само число

Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
*/
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

export default (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    console.log(fizzBuzz(i));
  }
  return NaN;
};