"use strict";
/*
ЗАДАЧИ:
Создайте функцию calcAverageHumanAge которая будет принимать в себя массив с годами собак и будет делать с этими данными следующее:
1. Пересчитайте собачий возраст, в возраст человека по формуле: 
если возраст собаки меньше или равен 2 годам, то человеческий возраст = 2 * возраст собаки. Если собаке больше 2-х лет то человеческий возраст = 16 + собачий возраст * 4
2.Вычислите всех собак которым меньше 18 человеческих лет.
3. Вычислите среднее значение возраста всех взрослых собак в пересчете на человеческие года.
4.Запустите функцию для двух массивов данных:
dogs1 = [5, 2, 4, 1, 15, 8, 3]
dogs2 = [16, 6, 10, 5, 6, 1, 4]
*/

const dogs1 = [5, 2, 4, 1, 15, 8, 3],
  dogs2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(dogsArr) {
  // 1
  const humanAge = dogsArr.map(function (val) {
    // if (val <= 2) {
    //   return val * 2;
    // } else {
    //   return 16 + val * 4;
    // }
    return val <= 2 ? val * 2 : val * 4 + 16;
  });
  console.log(humanAge);

  // 2
  const adults = humanAge.filter(function (val) {
    return val >= 18;
  });
  console.log(adults);

  // 3
  const average = Math.round(
    adults.reduce(function (acc, val) {
      return acc + val;
    }) / adults.length
  );
  console.log(average);
}

calcAverageHumanAge([...dogs1, ...dogs2]);
