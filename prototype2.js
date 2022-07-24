function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radisus ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //false

function CircleByPrototype(radius) {
  this.radius = radius;
}

CircleByPrototype.prototype.getArea = function () {
  return Math.PI * this.radisus ** 2;
};

// 반지름이 1인 인스턴스 생성
const CircleByPrototype1 = new CircleByPrototype(1);

// 반지름이 2인 인스턴스 생성
const CircleByPrototype2 = new CircleByPrototype(2);

console.log(CircleByPrototype1 === CircleByPrototype2); //true
