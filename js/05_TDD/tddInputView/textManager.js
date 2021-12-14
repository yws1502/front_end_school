const TextManager = (() => {

  // 원시값으로 만들면 인스턴스간에 공유가 불가능하다.
  let value = {data: "Hello Lions!"};
  // let value = "Hello Lions!"; 
  // 원시 자료형은 값을 참조하는게 아니라 복사하기 떄문에 원시 자료형 보다는 객체 자료형을 사용하는게 좋다.

  function innerTextManager() {};

  innerTextManager.prototype.getValue = function() {
    return value.data;
  }

  innerTextManager.prototype.setValue = function (newValue) {
    // value.data = newValue;
    value = newValue;
  }

  return innerTextManager;
})();
