// Иницализация переменных
var str = "String";
var num = 15;
var log = true;
var mass = ['str', 13, 3, 14];
var object = {
  name: "Steve"
};
//Вывод переменных в консоль
console.log(str);
console.log(num);
console.log(log);
console.log(mass);
console.log(object);
//Преобразование целого
console.log(num.toFixed(2));
//Префиксный и постфиксный инкремент для i
var i = 65;
console.log(i++);
console.log(++i);
//Присваивание с операцией, используя операторы: +=, -=, *=, /=, %=
console.log(num+=10);
console.log(num-=12);
console.log(num*=3);
console.log(num/=13);
console.log(num%=2);
//Вывод числа Pi в консоль
console.log(Math.PI);
//Округленное значения числа 89.279
console.log(89.279.toFixed(1));
//Случайное число между 0 и 10
console.log(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
//2 в 5 степени
console.log(Math.pow(2,5));
//Длинна строки
console.log(str.length);
//Поиск подстроки. При удачном поиске 0, при не удачном -1
console.log(str.indexOf('Str'));
//Переименование подстроки в строке
var re = "Hello";
console.log(str.replace(str.slice(0,3), re));
//Перевод строки в верхний и нижний регистры
var str1 = "walkingbyurself";
var str2 = "ANDREWSISTERS";
console.log(str1);
console.log(str2);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());