// Map
// Object 자료형의 불편한 점들을 보안하기 위해 나온 친구
let m = new Map();

m.set('one', 'hello');
m.set('two', 'world');
m.set('three', 'hi');

m.get("one"); // 'hello'
m.has("one"); // true

m.keys(); // {"one", "two", "three"}

m.values(); // {"hello", "world", "hi"}

m.delete("one"); // true

console.log(m) // {'two' => 'world', 'three' => 'hi'}

let o = {
    a: "a",
    b: "b"
}

let temp = new Map(Object.entries(o));

// Set
// 자료형의 한 종류입니다. 객체 안에 중복을 허락하지 않는다.
let s = new Set("abcdeeeee");

console.log(s); // {'a', 'b', 'c', 'd', 'e'}
console.log(s.size); // 5

s.add("s");
console.log(s); // {'a', 'b', 'c', 'd', 'e', 's'}
// set에는 순서를 허락하기 않는다. 그래서 indexing도 불가하다.
// forEach문을 사용하면 추가된 순서대로 반환되기는 한다.

s.delete("a");
console.log(s); // {'b', 'c', 'd', 'e', 's'}

console.log(s.has("c")); // true

let a = new Set('abc');
let b = new Set('cde');

// 교집합
[...a].filter(value => b.has(value)); //  ['c']

// 차집합
[...a].filter(value => !b.has(value)); // ['a', 'b']

// 합집합
[...a].concat([...b]); 
[...a, ...b];
