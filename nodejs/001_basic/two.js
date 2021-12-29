let name = "woosang";
let age = 26;

function plueAge() {
  age += 1;
}

function getAge() {
  return age;
}

module.exports.name = name;
module.exports.age = age;
module.exports.plueAge = plueAge;
module.exports.getAge = getAge;