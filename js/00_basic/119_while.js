// 짝수 출력
let i = 0;

while (i < 100) {
    console.log(i);
    i+=2;
}

// do while 문
// do에 있는 명령문 실행 후 while문 시작
let num = 0;

do {
    console.log(num);
    num += 1;
} while (num < 11) {

};


// while문 구구단
let i = 2;
let j = 1;

while (i<10) {
    while (j<10) {
        console.log(`${i} x ${j} = ${i*j}`)
        j += 1;
    }
    i += 1;
}

// 위의 식에 += 는 할당 연산이 들어가기 때문에 아래의 표현식을 권장한다.
let i = 2;
let j;

while (i<10) {
    j = 1
    while (j<10) {
        console.log(`${i} x ${j} = ${i*j}`)
        j++;
    }
    i++;
}

// 위의 코드와 비슷하지만 while문 안에서 j가 반복 선언되므로 에러가 난다.
let i = 2;

while (i<10) {
    let j = 1;
    while (j<10) {
        console.log(`${i} x ${j} = ${i*j}`)
        j++;
    }
    i++;
}

// 5단이 됐을 때 break 넣기
let i = 2;
let j;

while (i<10) {
    j = 1
    while (j<10) {
        console.log(`${i} x ${j} = ${i*j}`)
        if (j === 5) {
            break
        }
        j++;
    }
    i++;
}
