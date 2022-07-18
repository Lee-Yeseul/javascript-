// var foo = function () {
//   console.dir(this);
// };

// // 1. 함수 호출
// foo(); // window
// window.foo();

// // 2. 메소드 호출
// var obj = { foo: foo };
// obj.foo(); // obj

// // 3. 생성자 함수 호출
// var instance = new foo(); // instance

// // 4. apply/call/bind 호출
// var bar = { name: 'bar' };
// foo.call(bar); // bar
// foo.apply(bar); // bar
// foo.bind(bar)(); // bar

console.log('====================================');

function foo() {
  console.log("foo's this: ", this);
  function bar() {
    console.log("bar's this: ", this);
  }
  bar();
}
foo();

var value = 1;

var obj = {
  value: 100,
  foo: function () {
    console.log("foo's this: ", this); //obj
    console.log("foo's this.value: ", this.value); //100
    function bar() {
      console.log("bar's this: ", this); //window
      console.log("bar's this.value: ", this.value); //1
    }
    bar();
  },
};

obj.foo();
