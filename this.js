const mike = {
  name: 'Mike',
};
const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

// showThisName();
// showThisName.call(mike); //mike this가 mike가 된 거

//this가 필요하지 않으면 null을 넘겨줘도 된다!
// call
update.call(mike, 1999, 'singer'); // 첫번째 매개변수는 this로 사용될 값
console.log(mike);

//apply
update.apply(mike, [1999, 'singer']); // 첫번째 매개변수는 this로 사용될 값
console.log(mike);

const nums = [3, 5, 2, 4, 1, 7, 0];
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);

//bind
const updateMike = update.bind(mike);
updateMike(1998, 'police');
console.log(mike);

const user = {
  name: 'Jane',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName();

let fn = user.showName;
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();
