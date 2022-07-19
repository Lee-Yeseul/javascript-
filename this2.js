// var foo = function () {
//   console.dir(this);
// };

// // 1. 함수 호출
// console.log('function');
// foo(); // window
// window.foo();

// // 2. 메소드 호출
// console.log('method');
// var obj = { foo: foo };
// obj.foo(); // obj

// // 3. 생성자 함수 호출
// console.log('new');
// var instance = new foo(); // instance

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

console.log('====================================');

var foo1 = 'foo1';

function Print() {
  this.foo2 = 'foo2';
  console.log(this.foo1, this.foo2);
}
Print(); // foo1 foo2

var newPrint = new Print(); // undefined "foo2"
console.log(newPrint.foo2);

console.log('====================================');

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var song = new Person('song');
song.getName(); //this는 메소드를 호출한 객체인 song의 객체이다.
console.log(song.getName());

Person.prototype.name = 'kim';
Person.prototype.getName(); // "kim", this는 메소드를 호출한 객체인  Person.prototype의 객체
console.log(Person.prototype.getName());
