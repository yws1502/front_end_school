// 클래스는 찍어내는 공장!
// 인스턴스는 찍혀져 나오는 생산품!

class MyClass {
  // 여러변수 선언 가능
  x = 10;
  y = 20;

  // 여러 메서드를 정의할 수 있음
  constructor() { }
  method1() { }
  method2() { }
  method3() { }
  
}


class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// 사용법:
let user = new User("John");
user.sayHi();

class User {
  constructor(name) { 
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// 클래스는 함수입니다.
console.log(typeof User); // function

// 정확히는 생성자 메서드와 동일합니다.
console.log(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
console.log(User.prototype.sayHi); // console.log(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi


class User {
  // 외부에서 접근을 못하게 하는 것
  #name = "John";
  age = 10;
  job  = 'programmer';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

const yws = new User();

yws.sayHi(); // Hello, John!

yws.age; // 10

/////

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");

// 상속

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} 이/가 숨었습니다!`);
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!


// 오버로딩 : 자바스크립트에는 없다.
// 오버라이딩 : 현재 구역에서 가까운 메소드를 사용하는 것(부모에서 상속 받은 메소드와 이름이 같을 경우)

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// 사용법
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log( articles[0].title ); // CSS

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = -10; // Error: 물의 양은 음수가 될 수 없습니다.

class CoffeeMachine {
  // # 은 클래스 안에서만 사용가능
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
  }

}

let coffeeMachine = new CoffeeMachine();

// 클래스 외부에서 private에 접근할 수 없음
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error

//위와 같이 바로 접근하는 것이 아닌 getter와 setter를 사용하여 수정, 조회

class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

let coffeeMachine = new CoffeeMachine();


coffeeMachine.waterAmount = 1000; // 1000
coffeeMachine.waterAmount; // 1000

// 믹스인
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// 사용법:
class User {
  constructor(name) {
    this.name = name;
  }
}

// 메서드 복사
Object.assign(User.prototype, sayHiMixin);

// 이제 User가 인사를 할 수 있습니다.
new User("Dude").sayHi(); // Hello Dude!