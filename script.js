const userName = prompt("Как вас зовут?", "");

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

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function countQuiet(arr) {
    let count = 0;
    let quietSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 75) {
            count++;
            quietSum += arr[i];
        }
    }
    let average = count > 0 ? quietSum / count : 0;
    
    return { count: count, average: average };
}

const maxVol = findMax(volumes);
const loudVols = filterLoud(volumes);
const totalSum = sumArray(volumes);
const sredVol = totalSum / volumes.length;

const quietData = countQuiet(volumes);

const alertMessage = `Привет, ${userName || "друг"}!\nСредняя громкость – ${sredVol.toFixed(1)} дБ, ${loudVols.length} треков – громкие.`;
alert(alertMessage);

console.log(`Количество тихих треков: ${quietData.count}`);
console.log(`Их средняя громкость: ${quietData.average.toFixed(1)} дБ`);

if (maxVol >= 105) {
    console.log("Такая громкость может повредить слух — используйте наушники с ограничением");
}
