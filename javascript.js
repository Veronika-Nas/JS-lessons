// задание 5.10.2

const answer = prompt("Введите любое число");
if (!isNaN(answer)) {
  alert(
    `Вы ввели число = ${answer}  квадрат числа =${answer ** 2} , а куб числа =${
      answer ** 3
    } `
  );
} else {
  alert("Ты введи число!");
}
