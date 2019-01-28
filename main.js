//Работа со строчным массивом и методом filter

var stringa = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum',
'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo, eos', 'Vero, quos'];
var positiveString = stringa.filter(function(str){
  if(str.indexOf('o') !== -1) {
    return true;
  }

});

alert(positiveString);

// Отобразите текущую дату и время в следующих форматах
// а)

var today = new Date(). toISOString();
alert( today );

// b)

var day = new Date();
alert (day);

//getWeekDay

function getWeekDay(date) {
  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  return days[date.getDay()];
}

var date = new Date(1999, 2, 13)
alert(getWeekDay(date));

// local date

function getLocaleDay(date) {
  return [date.getDay()];
}

var date = new Date(2019, 0, 1)
alert(getLocaleDay(date));

//getDateAgo

function getDateAgo(date, days) {
  var dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) ); 