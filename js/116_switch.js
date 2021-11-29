new Date().getDay() // 요일
new Date().getDate() // 요일

switch (new Date().getDay()) {
    case 0:
        console.log('일요일입니다.')
        break
    case 1:
        console.log('월요일입니다.')
        break
    case 2:
        console.log('2번째 case입니다.')
        break
    case 3:
        console.log('3번째 case입니다.')
        break
    default:
        break;
}