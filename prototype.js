// 여기에 쓰면 자식이 직접 가짐
function person() {
  this.age = 20;
  this.sex = 'female';
}

//유전자? 여기에 쓰면 부모만 속성을 가지고 자식이 끌어다가 쓸 수 있음
person.prototype.name = 'kim';

var person1 = new person();

person1.name; // person1이 name을 가지고 있지 않으면 부모로 가서 name을 찾아서 가져옴
console.log(person1.name);

var arr1 = [1, 4, 6, 2];
var arr2 = new Array(3, 2, 5);

// sort, length 등등은 Array에 prototype으로 내장되어 있음
arr1.sort();
arr1.length();

//모든 array에서 함수를 가져다가 쓸 수 있다.
Array.prototype.함수 = function () {};
