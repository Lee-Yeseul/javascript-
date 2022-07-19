// 여기에 쓰면 자식이 직접 가짐
function person() {
  this.age = 20;
  this.sex = 'female';
}

//유전자? 여기에 쓰면 부모만 속성을 가지고 자식이 끌어다가 쓸 수 있음
person.prototype.name = 'kim';

var person1 = new person();

person1.name; // person1이 name을 가지고 있지 않으면 부모로 가서 name을 찾아서 가져옴
console.log(person1);
console.log(person1.name);

var arr1 = [1, 4, 6, 2];
var arr2 = new Array(3, 2, 5);

// sort, length 등등은 Array에 prototype으로 내장되어 있음
arr1.sort();
console.log(arr1.sort());
//모든 array에서 함수를 가져다가 쓸 수 있다.
Array.prototype.함수 = function () {};

console.log('=======================================================');
var student = {
  name: 'Lee',
  score: 90,
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')); // true

console.dir(student);

//__proto__ 프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.
//student 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.
console.log(student.__proto__ === Object.prototype); // true

function Person2(name) {
  this.name = name;
}

var foo = new Person2('Lee');

console.dir(Person2); // prototype 프로퍼티가 있다.
console.dir(foo); // prototype 프로퍼티가 없다.
console.log(Person2.__proto__ === Function.prototype);
console.log(Person2.prototype === foo.__proto__);
