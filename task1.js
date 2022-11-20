let message = prompt("Введите число:") - 0;

if (!isNaN(message)) console.log(message % 2 ? "Нечётное" : "Чётное");
else console.log("Вы ошиблись!");
