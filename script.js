const userName = prompt("Как вас зовут?", "Дарья");
if (userName) {
    console.log(`Привет, ${userName}! Начинаем анализ громкости треков.`);
}

const volumes = [72, 85, 95, 68, 105, 80, 78];
console.log("Исходные данные (громкость треков):", volumes);

function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function filterLoud(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 90) result.push(arr[i]);
    }
    return result;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}