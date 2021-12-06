// 클로저
function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수
}

const x = 100;

function a() {
    const x = 1;
    b();
}

function b() {
    console.log(x);
}

a(); // 100
b(); // 100


const xx = 100;

function a() {
    const xx = 1;
    function b() {
        console.log(xx);
    }
    b();
}

a(); // 1