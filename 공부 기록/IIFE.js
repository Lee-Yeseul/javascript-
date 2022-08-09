// 익명 즉시 실행 함수
//(function(){}())
(function () {
  let a = 3;
  let b = 5;
  return a * b;
})();

//기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();

foo(); //referencError : foo is not defined

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.
let res1 = (function () {
  let a = 3;
  let b = 5;
  return a * b;
})();

console.log(res1); // 15

let res2 = (function (a, b) {
  return a * b;
})(3, 5);

console.log(res2);
