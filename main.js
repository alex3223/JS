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

var dateA = function(date) {
  var yy = date.getFullYear();

  var mm = date.getMonth() + 1;
  if(mm < 10) mm = '0' + 1;

  var dd = date.getDate();
  if(dd < 10) dd = '0' + dd;

  var hh = date.getHours();
  if(hh < 10) hh = '0' + hh;

  var min = date.getMinutes();
  if(min < 10) min = '0' + min;

  return  yy + '-' + mm + '-' + dd + ', ' + hh + ':' +min;

}
var now = new Date();
alert(dateA(now));
// b)

var dateB = function(date) {
  var yy = date.getFullYear();

  var mm = date.getMonth() + 1;
  if(mm < 10) mm = '0' + 1;

  var dd = date.getDate();
  if(dd < 10) dd = '0' + dd;

  var hh = date.getHours();
  if(hh < 10) hh = '0' + hh;

  var min = date.getMinutes();
  if(min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if(sec < 10) sec = '0' + sec;

  return dd + '.' + mm + '.' + yy + ', ' + hh + ':' + min + ':' + sec;
}
alert(dateB(now));

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