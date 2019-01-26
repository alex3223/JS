//Выведите в консоль любую строку. Если выводимая строка пустая - отобразите строку текста по умолчанию.
var String = "This is string"
newString = String || 'Default string';
console.log(newString);
//Создайте любой объект, например "браузер" и вывидете в консоль все его поля. + //Cоздать метод для этого объекта
var Browser = {
  name: "Google",
  version: 8.1,
  rank: 1,
  sayHi: function(){
    return 'This is method?)';
  }
};
console.log(Browser.name);
console.log(Browser.version);
console.log(Browser.rank);
console.log(Browser.sayHi());
//Cделайте цикл for от 1 до 20 и выведите в консоль только чётные значения
for (var i = 1; i < 20; i++){
  if (i % 2 == 0){
    console.log(i);
  }
}
//Создайте любой код, используя конструкцию switch/case/default
var Name = 'Alex',
  Status;
  switch(Name){
    case 'Tom': Status = 'Driver'; break;
    case 'Sam': Status = 'Manager'; break;
    default: Status = 'still nobody';
  }
  console.log(Name + ' ' + Status);
  //Создайте условие, используя тернарный оператор ?
  var a = 2;
  var b = 1;
  if (a === b){
    console.log('a равно b') }
    else {
      console.log('a не равно b')
    }
// Выводите значение переменной, пока не достигнуто значение 7 (используя цикл while)
var i = 0;
while (i <= 7){
  console.log(i);
  i++;
}
// Функция с callback
function myArg (arg1, arg2, callback){
  console.log("Число " + arg1 + " в степени " + arg2);
  var arg3 =  (Math.pow(arg1, arg2));
  callback(arg3);
}
myArg(2, 4, function(arg3){
  console.log("Результат " + arg3);  
});
