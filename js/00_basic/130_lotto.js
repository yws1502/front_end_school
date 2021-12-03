// min 값이 2이상 인 경우 max가 원하던 수를 넘어 버리는 문제 발생
function randomNum(min, max) {
    return Math.floor(Math.random() * max + min);
}

// 이렇기 때문에 max에 min값을 일단 빼주는 작업을 추가해주자
function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function drawLotto() {
    let lotto = new Array()

    while (lotto.length < 6) {
        let number = randomNum(1, 46);
        if (!lotto.includes(number)) {
            lotto.push(number);
        }
    }
    return lotto.sort((a, b) => a - b);
}

let lotto = drawLotto();

console.log(lotto)
