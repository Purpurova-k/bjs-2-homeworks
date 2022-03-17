// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0; 

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  min = Math.min(...arr);
  max = Math.max(...arr);

  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let arr of arrOfArr) {
    let sum = func(arr);
    max = sum > max ? sum : max;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return Math.abs(max - min);
}
