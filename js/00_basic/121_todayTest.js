// 연습 문제 1
let s = "5, 4, 10, 2, 5";
let result = 0;
let array = s.split(',');

for (let i=0; i < array.length; i++) {
    result += parseInt(array[i], 10);
}

console.log(result/array.length);

// 연습 문제 2
let array = [11, 22, 33, 111, 2];
let answer = 0;

for (let item of array) {
    let subSum = 0;
    console.log((item).toString())
    for (let string of (item).toString()) {
        subSum += parseInt(string, 10);
    }
    answer += subSum;
}
console.log(answer);

let data = [11, 22, 33, 111, 2];
// data = (data).toString()
data = data + '';
data = data.replace(/,/g, '');

let sum = 0;
for (let i of data) {
    sum += parseInt(i);
}
console.log(sum);

// 연습 문제 3
function reverse(array) {
    let ret = '';
    for (item of array) {
        ret = item + ret;
    }
    return ret
}

let number = 100000000;
let strNum  = (number).toString();

let revNum = reverse(strNum);

let answer = '';
for (let i=0; i< revNum.length; i++) {
    if (i != 0 && i%3 === 0) {
        answer = ',' + answer;
    }
    answer = revNum[i] + answer;
}

console.log(answer);

let temp = reverse(answer);
let answer1 = '';

for (let i=0; i < temp.length; i++) {
    if (temp[i] === ',') {
        continue
    } else {
        answer1 = temp[i] + answer1;
    }
}

console.log(answer1)

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2){
        sample += reverse[i];
        ++count;
    } else {
        sample += reverse[i];
        sample += ','
        count = 0;
    }
}
console.log(sample);