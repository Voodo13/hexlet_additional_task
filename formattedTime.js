/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34

Подсказки

    Используйте функцию Math.floor(number) для округления до нижней границы
*/

const formattedTime = (numb) => {
  let hour = Math.floor(numb / 60);
  let minute = numb % 60;
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  return `${hour}:${minute}`;
};

export default formattedTime;