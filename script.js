const userName = prompt("Как вас зовут?", "Дарья");
if (userName) {
    console.log(`Привет, ${userName}! Начинаем анализ громкости треков.`);
}

const volumes = [72, 85, 95, 68, 105, 80, 78];
console.log("Исходные данные (громкость треков):", volumes);