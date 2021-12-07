let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
// __proto__은 prototype에 접근 방법이다.
// __proto__의 역사를 보면 표준이 아니다


let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.

//

let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
longEar.walk(); // 동물이 걷습니다.
console.log(longEar.jumps); // true (rabbit에서 상속받음)


// 여기서 부터가 찐이야~!
let animal = {
  eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성합니다.
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // rabbit의 프로토타입을 {}으로 바꿉니다.


let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats ); // true

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

///


let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
console.log( arr.__proto__ === Array.prototype ); // true

// arr은 Object.prototype을 상속받았나요?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있습니다.
console.log( arr.__proto__.__proto__.__proto__ ); // null

/*
prototype : 유전자(상속받은 객체)
__proto__ : [[Prototype]]에 접근하기 위한 방법
__proto__ : 비표준으로 시작했으나 지금은 표준에 부록에 실렸다.
*/


function person(name, age) {
  this.name = name;
  this.age = age;
}

let woosang = new person("woosang", 26);

let jaehyun = new person("jaehyun", 34);

person.prototype.life = 100; //100

woosang.life; // 100
