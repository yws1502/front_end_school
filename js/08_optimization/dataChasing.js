const aespa = ["카리나", "원터", "지젤", "닝닝"];

// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });

// const aespa2 = aespa.map(item => item += "💖");
const aespa2 = aespa.map((item) => {
  return item += "💖"
});

console.log(aespa2);
console.log(aespa);