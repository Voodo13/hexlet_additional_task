// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
const invertChar = (char) => {
  if (char === char.toUpperCase()) return char.toLowerCase();
  return char.toUpperCase();
};
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += invertChar(str[i]);
  }
  return result;
};

export default invertCase;
