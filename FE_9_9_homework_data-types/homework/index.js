// Task #1
function findType(argA) {
  return typeof argA; 
}
// Task #2
function forEach(argArray, funcArg) {
  for (let i = 0; i < argArray.lenght; i++) {
    funcArg(argArray[i]);
  }
}
// Task #3
function map(arr, funcArg) {
  let tranformedArr=[];
  forEach(arr, function(elem) {
    tranformedArr.push(funcArg(elem));
  });
  return tranformedArr;
}
// Task #4
function filter(arr,funcArg) {
  let filtredArr=[];
  forEach(arr,function(elem) {
    if(funcArg(elem)) {
      filtredArr.push(elem);
    }
  });
  return filtredArr;
}
// Task #5
function getAdultAppleLovers(data) {
  map(filter(
    data,
    function(elem) { 
      return elem.age >= 18 && elem.favoriteFruit === 'apple';
    }),
    function(elem) {
      return elem.name;
    });
}
// Task #6
function keys(obj) {
  let arr = [];
  let key;
  for(key in obj) {
    if(obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}
// Task #7
function values(obj) {
  let arr = [];
  let key;
  for (key in obj) {
    if(obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
// Task #8
function showFormattedDate(date) {
  const MONTHS_LETTER = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return `It is ${date.getDate()} of ${MONTHS_LETTER[date.getMonth()]}, ${date.getFullYear()}`;
}