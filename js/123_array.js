// 배열 (array)

let fruits1 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
let fruits2 = new Array(5);
let fruits3 = ['사과', '수박', '복숭아', '딸기', '바나나'];

console.log(fruits1);
fruits1[0] = '한라봉';

console.log(fruits1)

// 여기서 확인해야할 것! string과 array의 차이!
// string에서는 index로 수정이 불가하다
// array에서는 index로 수정이 가능하다.

let totalScore = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]]
];

let matrix  = [[1,2,3], [4,5,6], [7,8,9]];

matrix[0] + matrix[0]; // string으로 형변환

matrix[0] * 2; // NaN

matrix[0] - matrix[0]; // NaN

matrix[0] / matrix[0]; // NaN

matrix[0].toString(); //'1,2,3'

let sample = [1, 2, 3];

for (let i in sample) {
    sample[i] *= 2;
}
console.log(sample);


// 문제
let totalScore = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

let sum = 0;
for (let scores of totalScore[0]) {
    let temp = 0;
    for (let score of scores) {
        temp += score;
    }
    sum += temp;
}

console.log(sum/totalScore[0].length);

let a = [1,2,3,[4,5]];

console.log(a.flat());

console.log(a.forEach(x => (x+2)));