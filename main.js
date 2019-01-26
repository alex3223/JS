//Cчётчик замыкания и число в качестве аргумента 

var counter =  (function () {
  var count = 0;

  return function (num) {
    count = num !== undefined ? num : count;
    return count++;
  };
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

// Cоздайте несколько однотипных объектов и определите для них метод используя ключевое слово this

var greet = function() {
  return 'This car is ' + this.colour;
};
var car = {
  name: 'Subaru',
  colour: 'Blue',
  greet: greet
}

var oneMoreCar = {
  name: 'Kia',
  colour: 'Silver',
  greet: greet
}
console.log(car.greet())
console.log(oneMoreCar.greet());

// Добавьте к объекту новое свойство, используя геттер и сеттер 

var greet = function() {
  return 'This car is ' + this.colour;
};
var car = {
  name: 'Subaru',
  colour: 'Blue',
  _mileage: 20000,
  get miliage(){
    return this._mileage;
  },
  set miliage(value){
    this._mileage = value < 0 ? 0 : value ;
  }
}

var oneMoreCar = {
  name: 'Kia',
  colour: 'Silver',
  mile: 10000,
   get mile(){
    return this._mile;
  },
  set mile(value){
    this._mile = value < 0 ? 0 : value ;
  }
}

car.miliage = -20;
console.log(car.miliage);
car.miliage = 0;
console.log(car.miliage);
car.miliage = 2000;
console.log(car.miliage);

oneMoreCar.mile = -10;
console.log(oneMoreCar.mile);
oneMoreCar.mile = 0;
console.log(oneMoreCar.mile);
oneMoreCar.mile = 1000;
console.log(oneMoreCar.mile);