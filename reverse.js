// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

const reverse = (str) => {
  const counter = (i, result) => {
    if (i < 0) {
      return result;
    }
    return counter(i - 1, result + str[i]);
  };
  return counter(str.length - 1, '');
};

export default reverse;