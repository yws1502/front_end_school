let person = {
    //key: value
    name: '윤우상',
    age: 26,
    height: 30,
    weight: 40,
    이력 : {
        'firstJob': 'one',
        'secondJob': 'two'
    }
}

person.name // '윤우상'

person.이력.firstJob // 'one'

person["newKey"] = "value" // 새로운 값 추가

Object.keys(person) // ['name', 'age', 'height', 'weight', '이력', 'newKey']

Object.values(person) // ['윤우상', 26, 30, 40, {…}, 'value']

Object.entries(person)
// [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
/* 
0: (2) ['name', '윤우상']
1: (2) ['age', 26]
2: (2) ['height', 30]
3: (2) ['weight', 40]
4: (2) ['이력', {…}]
5: (2) ['newKey', 'value']
*/

for (let [i, j] of Object.entries(person)) {
    console.log(i, "+", j);
}
// name + 윤우상
