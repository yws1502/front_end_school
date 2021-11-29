let text  = "";
let count = 0

for (let i=0; i < 101; i++) {
    text += 1
}

console.log(text);

for (let i=0;  i < text.length; i++) {
    if (text[i] == '8') {
        count++
    }
}

console.log(count)


let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let maxVal = 0;
let minVal = sample[0]

for (let i=1; i < sample.length; i++) {
    if (minVal > sample[i]) {
        minVal = sample[i]
    }
    if (maxVal < sample[i]) {
        maxVal = sample[i]
    }
}

console.log(minVal, maxVal)

let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0];
let idx = 0;
for (let i=0; i != value.length; i++) {
    curr = value[i+1] - value[i];
    if (temp > curr) {
        temp = curr;
        idx = i
    }
}
console.log(value[idx], value[idx+1])