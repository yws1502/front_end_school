function randomFunc(min, max) {
    let result = Math.floor(Math.random() * (max - min) + min);
    return result;
}

// 방법 1
function lottoGenerator() {
    let lottoArr = [];
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);

        // 중복 판단
        let isGot = false;
        lottoArr.forEach(element => {
            if (element === result) {
                isGot = true;
            }
        });
        
        // 중복 없으면 배열에 추가
        if (isGot === false) {
            lottoArr.push(result);
        }
    }
    return lottoArr
}
console.log(lottoGenerator())


// 방법 2
function lottoGenerator() {
    let lottoArr = [];
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);

        if (!lottoArr.includes(result)) {
            lottoArr.push(result);
        }
    }
    return lottoArr
}
console.log(lottoGenerator())


// 방법 3
let lottoSet = new Set();

function lottoGenerator1() {

    while (lottoSet.size < 6) {
        let result = randomFunc(1, 46);
        lottoSet.add(result)
    }
    return [...lottoSet];
}
console.log(lottoGenerator1())
