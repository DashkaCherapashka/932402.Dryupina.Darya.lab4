const userName = prompt("Как вас зовут?", "Дарья");
if (userName) {
    console.log(`Привет, ${userName}! Начинаем анализ громкости треков.`);
}

const volumes = [72, 85, 95, 68, 105, 80, 78];
console.log("Исходные данные (громкость треков):", volumes);

function FindMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function FilterLoud(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 90) result.push(arr[i]);
    }
    return result;
}

function Summa(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const maxVol = FindMax(volumes);
const loudVols = FilterLoud(volumes);
const totalSum = Summa(volumes);
const sredVol = totalSum / volumes.length;

let quietN = 0;
let quietSum = 0;
for (let i = 0; i < volumes.length; i++) {
    if (volumes[i] <= 75) {
        quietN++;
        quietSum += volumes[i];
    }
}

let quietSred = 0;
if (quietN > 0) {
    quietSred = quietSum / quietN;
}

const alertMessage = `Средняя громкость – ${sredVol.toFixed(1)} дБ, ${loudVols.length} треков – громкие.`;
alert(alertMessage);

console.log(`Количество тихих треков: ${quietN}`);
console.log(`Их средняя громкость: ${quietSred.toFixed(1)} дБ`);

if (maxVol >= 105) {
    console.log("Такая громкость может повредить слух — используйте наушники с ограничением");
}