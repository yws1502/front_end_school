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