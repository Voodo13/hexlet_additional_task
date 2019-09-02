// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

const diff = (a, b) => {
  const diffrent = Math.abs(b - a);
  return diffrent > 180 ? 360 - diffrent : diffrent;
};

export default diff;