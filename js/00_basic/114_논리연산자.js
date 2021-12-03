let result = 0

for (let x = 0; x < 101; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        result += x
    }
}
console.log(result)

// 실무에서 많이 사용함 특히 undefined랑 NaN!
123 + '' // '123'
!!true // true
!!'hojun' // true
!!'' // false
!!1 // true
!!0 // false
undefined // undefined
!!undefined // false
NaN // NaN
!!NaN // false

let x = "1000" // "1000"
+x // 1000
-x // -1000


// Number와 parseInt 어떤게 실무에서 더?
let value = new Number(100)
/*
parseInt는  몇진수로 변환하겠다 딱 나타낼 수 있음
Number는 객체 생성으로 접근해서 조금 동작이 느리다.
*/
