let cars = ["BMW", "Volve", "Saab", "Forb",  "Flat", "Audi"];

for (let i = 0; i < cars.length; i++) {
    console.log(i)
}
/*
0
1
2
3
4
5
*/

for (let car in cars) {
    console.log(car);
}
/*
0
1
2
3
4
5
*/

for (let car of cars) {
    console.log(car);
}
/*
BMW
Volvo
Saab
Ford
Flat
Audi
*/

// 구구단 코드!
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}


// outer라는 식별자가 붙은 레비블 for문 ==> outer 말고 다른거 사용가능
// 현업에서는 객체와 헷갈려서 잘 안쓰는 편
// 할꺼면 function 사용을 권장
outer: for (let i = 2; i < 10;  i++) {
    for (let j = 1; j < 10; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if (i === 5) break outer;
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
