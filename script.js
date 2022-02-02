"use strict";
/* let nun = 500;

while (nun > 10){
    nun = nun /2;
}
console.log(nun); */


/* let str = ''
for( let i = 9; i >0; i--){
    str +='-' + i ;  
}
alert(str); */

/* let result = ''
for (let i = 1; i <= 30; i++){
    result +=i+ ' ';
}
console.log(result);
 */


/* let arr = [];

for(let i=1,j=0; i < 100; i +=2,j++){
    arr[j]= i ;
}
console.log(arr); */
/* 
let arr = [];
let result = [];
for(let i = 1; i<=5; i++){
    arr.push(i);
    
}
for(let elem of arr){
    if (elem > 0){
        result.push(elem)
    }
}
console.log(result); */

/* let arr = [];
let result = [];
for(let i = 1; i<=5; i++){
    arr.push(i);
}
for(let i = arr.length-1; i >= 0;i--){
    result.push(arr[i])
}
console.log(result); */

/* let keys = ['пн', 'вт', 'cр', 'чт','пт','cб','вс'];
let values = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for(let i = 0; i <= 6; i++){
    obj[values[i]] = keys[i];
}
console.log(obj); */

/* let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result ={}
for(let key in obj){
    if(key % 2 == 0){  
    }else{
        result[key] = obj[key]
    }
}
console.log(result); */

/* let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

for(let key in obj){
    obj[key] =obj[key] **2
}
console.log(obj); */

/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = {}

for(let key in obj){
    result[obj[key]] = key
}
console.log(result); */

/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
}

for(let key in obj){
    if(obj[key] <= 400){
    obj[key] = obj[key] * 0.1 + obj[key] ;
    }
}
console.log(obj); */

/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3={}

for(let i = 0; i <arr1.length; i++){
    arr3[arr1[i]] = arr2[i]
}
console.log(arr3); */

/* let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let obj2 = 0;
let obj3 = 0;

for(let key in obj){
    obj2 = obj2 + obj[key];
    obj3 = obj3 + Number(key);
}
console.log(obj3/obj2); */

/* let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let mas1 = [];
let mas2 = [];

for(let key in obj){
    mas1.push(obj[key]) ;
    mas2.push(key);
}
console.log(mas1, mas2); */

/* let arr = ['','a', 'b', 'c', 'd', 'e'];
let obj ={};

for(let i = 1; i <= arr.length -1 ; i++){
    let key = i;
    let value = arr[i] ;

    obj[value] = key;
}
console.log(obj); */

/* let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for(let elem of arr){
    if( elem == 'a'){
        counter++;
    }
}
console.log(counter); */
/* 
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter =0;
for(let elem of arr){
    if(elem ==3 || elem ==2){
        counter++;
    }
}
console.log(counter); */

/* let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for(let elem of arr){
    if(count[elem] === undefined){
        count[elem] = 1
    } else {
        count[elem] ++;
    }
}
console.log(count); */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 1] + arr[i]);
} */

/* let one = 0;
let two = 1;
let three = 2

for (let i = 1; i <= 10; i++) {
	let current = one + two + three;
	
	one = two ;
    two = three;
	three = current;
	
	console.log(current);
}
 */

/* let arr = '';

for(let i = 0; i<5; i ++){
    arr += 'xx';
    document.write(arr + '<br>');
}
 */

/* for ( let i = 1; i <= 9; i++){
    for( let j =1; j <=i; j++){
        document.write(i);
    }
    document.write('<br>');
} */

/* for(let i = 1; i <=9; i+=2){
    let str ='';

    for(let j=1; j<=i; j++){
        str +=i;
    }
    document.write(str + '<br>')
} */

/* for(let i=9; i>0; i--){
    let str='';

    for(let j=0; j<i; j++){
        str+= i
    }
    document.write(str + '<br>')
} */

/* let arr =[];
let str ='';

for(let i=0; i<5; i++){
    str +='xx';
    arr.push(str);
}
console.log(arr); */

/* let arr = []

for(let i=1; i<10; i++){
    let str ='';

    for(let j=0; j<5; j++){
        str +=i;
    }
    arr.push(str);
}
console.log(arr); */

/* let arr =[ -1, 11, 23, 6, 7,2,9, 10];

for(let i=0; i<arr.length; i++){
    if( arr[i] ==5){
        console.log('есть');
    }else{
        console.log('нету');
        break;
    }
} */

/* let arr =[ -1, 11, 23, 6, 7,2,9, 10];
let result = 0;

for(let elem of arr){
    result += elem;
    
}
console.log(result/ arr.length); */

/* let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2],arr[1][1],arr[0][2] + ' и ' + arr[0][0]); */

/* let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
} */

/* let arr = [[1, 2, 3], [4, 5], [6]];
let result=0
for(let subarr of arr){
    for(let elem of subarr){
        result +=elem
    }
}
console.log(result); */

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result = 0;

for(let subarr1 of arr){
    for(let subarr of subarr1){
        for(let elem of subarr){
            result +=elem;
        }
    }
}
console.log(result); */
/* 
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
} */

/* let arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        result +=arr[i][j]
    }
}
console.log(result); */

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let result = 0;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        for(let k=0; k<arr[i][j].length; k++ ){
            result+=arr[i][j][k]
            
        }
    }
}
console.log(result); */

/* let arr = [];

for(let i=0; i < 1; i++){
    arr[i]=[];

    for(let j=0; j < 3; j++){
    arr[i][j]=[];
        
        for(let k=0; k < 5; k++){
            arr[i][j][k]= k+1;
        }
    
    }
}
console.log(arr); */
/* 
let arr = [];

for (let i = 0, k=2; i < 4; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 2; j++) {
		arr[i][j]=k;
        k+=2;
	}
}

console.log(arr); */

/* let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let result = 0;
for(let key in obj){
    let subobj = obj[key];

    for(let subkey in subobj){
         result = result + subobj[subkey];
    }
}
console.log(result); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let result = 0;
for(let key of employees){
    
    result +=key.salary;
    
}
console.log(result) */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

for(let elem of employees){
    if(elem.age >=30){
        console.log(elem.salary);
    }
}
 */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];

for(let elem of employees){
    if(elem.dismissed = true){
        document.write(elem.name + ' ' + elem.salary +'<br>');
    }
} */

/* let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};

for (let group in students) {
	for (let name of students[group]) {
		console.log(name);
	}
}
 */

/* let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

for(let elem in data){
    for(let newelem of data[elem]){
        console.log(newelem);
    }
} */

/* let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
    for(let elem of data){
        console.log(elem);
    } */

/* let arr=[4, 2, 5, 19, 13, 0, 10];
let result = 0;

for(let i=0; i<arr.length; i++){
    result += arr[i] **3;
    
}
console.log(Math.sqrt(result)); */

/* let result = Math.sqrt(587);
let res2 = Math.ceil(result);
let res3 = Math.floor(result);
let arr= {'floor':res2,'ceil':res3}
console.log(arr); */

/* let arr = [1, 5, 10, 34, 100];
let max = Math.max.apply(null, arr);

console.log(max); */

/* let arr=[4, -2, 5, 19, -130, 0, 10]

let max,min;
max = Math.max.apply(null, arr);
min = Math.min.apply(null, arr);
console.log(max, min); */

/* let str = 'Язык JavaScript';
console.log(str.toUpperCase());
let str1 = 'Язык JAVASCRIPT';
console.log(str.toLowerCase()); */

/* let str = 'abcde';
let sub = str.substr(1, 3);

console.log(sub); */

/* let str = 'abcde';
let sub = str.substring(1, 3);

console.log(sub); */

/* let str = 'abcde';
let sub = str.slice(1, 3);

console.log(sub); */

/* let str = 'Я учу учу Javascript';
console.log(str.indexOf('учу')); */

/* var str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true */

/* let str = 'html-css-javascript';
let arr = str.split('-');

console.log(arr); */

/* let arr='1-2-3-4-5'
let arr2 =arr.split('-');
let arr3 = [];
for(let i=0; i<arr2.length; i++){
    arr3.push(Number((arr2[i])));
    
}
console.log(arr3); */

/* let str='12345'
let str2=str.split('');
console.log(str2); */

/* let str = '123456789';

let result = str.split('').reverse().join('');
console.log(result); */

/* let arr = [1, 2, 3, 4, 5];
let result= arr.reverse().join('-');
console.log(result); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

arr.push('1', '2');
console.log(arr); */

/* let arr=[1, 2, 3];

for (let i=4; i<=6; i++){
arr.push(i)
}
console.log(arr); */

/* let arr=[1, 2, 3]
console.log(arr.shift(),arr.pop()); */

/* let arr =[1, 2, 3, 4, 5];
console.log(arr.indexOf(3));
console.log(arr.includes(3)); */

/* let str = 'london';
let result=str.slice(0,2).toUpperCase()+str.slice(2,5)+str.slice(5,6).toUpperCase();
console.log(result); */

/* let str = 'word1 word2 word3';
let words = str.split(' ');

for(let i=0; i<words.length; i++){
	words[i]= words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let result = words.join(' ');
console.log(result);
 */

/* let str ='var_test_text';
let words = str.split('_');

for(let i=0; i<words.length; i++){
	words[i] = words[i].slice(0,1).toLowerCase() + words[i].slice(1);
}
let results = words.join('');
console.log(results); */

/* let str = '12345';

let result = str.split('').reverse().join('');
console.log(result);
 */
/* let result=0;
function func(){
	for(let i=0; i <=100; i++ ){
		result +=i;
	}
	alert(result);
}
func() */

/* function func(nun){
	if (nun >=0){
		alert('+++')
	}else{
		alert('---')
	}
}
func(-5) */

/* function func(nun1, nun2, nun3){
	alert(nun1 + nun2 + nun3);
}

let p1 = 5;
let p2 = 6;
let p3 = 7;
func(p1,p2,p3) */
/* 
function func(name ='Аноним', age ='Неизвестен'){
	alert('Ваше имя: '+name +' Ваш возраст: '+age)
}

func('хех',20) */

/* function func(nun ="Некоректное число"){
	return nun **3;
}
let numbers = 3
let result = func(numbers);
console.log(result); */

/* function func(num){
	return Math.sqrt(num);
}
function func2(num1,num2,num3){
	return num1+num2+num3;
}
function func3(nun){
	return nun.toFixed(3);
}
let numbers = 2;
let result = func3(func2(func(2), func(3), func(4)));
console.log(result); */

/* function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		
	}
return sum;
}

alert( func(6) ); */

/* function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let result = func([1, 2, 3, 4, 5]);
alert(result);
 */

/* function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}

alert(func(-3)); */

/* function func(num1, num2) {
	let result;
	
	if (num1 > 0 && num2 > 0) {
		return result = num1 * num2;
	} else {
		return result = num1 - num2;
	}
	
}

alert(func(3, -4)); */

/* function func(arr){
	let sum = 0;

	for(let elem of arr){
		sum+= elem **2;
	}
	return sum;
} 
let arr1=[5,3,9,7];
let arr2=[6,3,5,7];

alert(func(arr1))
alert(func(arr2)) */

/* function getDigitsSum(num){
	if(num >9 ){
		let result;
		num = String(num);
		return result =Number(num[0])+Number(num[1]);
	}else{
		return result = num;
	}
}
let result1 =getDigitsSum(12);
console.log(result1); */

/* function getDigitsSum(num) {
	let sum = 0;
	let str = String(num);
	for(let i = 0; i < str.length; i++) sum += Number(str[i]);
	return sum;
  }
  let num=+prompt("Введите число");
  console.log(getDigitsSum(num)); */

/* function getDivisors(num){
	let arr = [];
	for(let i =1; i<=num; i++){
		if (num % i == 0){
			arr.push(i);
		}
	}return arr;
  }
  
let numbers = 24
let arr1 = getDivisors(numbers);
console.log(arr1);  */

/* const getDivisors = (n) => {
	const mid = n / 2;
	let box = [];
	for (let i = 1; i <= mid; i += 1) if (0 == n % i) box.push(i);
	box.push(n);
	return box;
	} ;
	let divisors = getDivisors(990);
	console.log(divisors); */

/* 		function reverseStr(str){
		let arr = str.split('').reverse().join('');
		return arr;}
let str = 'kocut';
let arr1 = reverseStr(str);
console.log(arr1); */

/* function delElem(value,arr){
	for(let elem of arr){
		if (elem != value){
			arr1.push(elem);
		}
	}return arr;
}
let arr1 =[]
let arr = delElem(3,[1, 5, 3, 4, 3, 10]);
console.log(arr1); */

/* function delElem(value, arr){
	for(let i =0; i<arr.length; i++){
		if(arr[i]==value){
			arr.splice(i,1)
		}
	}return arr;
}

let arr = delElem(4,[1,4,5,6,7,4,456])
console.log(arr); */

/* function func(num){
	let arr = [];
	for(let i=1; i<=num; i++){
		arr.push(i);
	}return arr;
	
}
let arr = func(8);
console.log(arr);
 */

/* function func(num1, num2){
	let arr =[];
	for(num1; num1 <=num2; num1++){
		arr.push(num1);
	}return arr;
}

let arr = func(3,8)
console.log(arr); */

/* function func(arr){
	for(let elem of arr){
		if(elem % 2 !== 0){
			return false
		}
	}return true
}
let arr =func([2,6,8,10,18,1])
console.log(arr); */

/* function func(num){
	let num1 = String(num);
	for(let i=0; i<num1.length; i++){
		if(Number(num1[i]) % 2 == 0){
			return false;
		}
	}return true;
}

let num = func(35132);
console.log(num); */

/* function func(arr){
	for (let i=1; i<arr.length; i++){
		if ( arr[i] == arr[i-1]){
			return true;
		}
	}return false;
}

let elemtwo = func([4, 5, 6, 8, 9, 4])
console.log(elemtwo);
 */

/* function func(a, b) {
	return a == b;}

let result =func( 3,2);
console.log(result); */

/* function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}

let arr = [];
for(let i=1; i<=100; i++){
		if(isPrime(i) == true){
		arr.push(i)}
	}
console.log(arr); */

/* function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
let years=[];
for(let i=1; i<=2030; i++){
	if(getDigitsSum(i) == 13){
		 years.push(i);
	}
}

console.log(years); */

/* function StrReverse(num){
	return num = String(num).split('').reverse().join('');
}

let nums = [123, 456, 789];

let result = [];
for (let num of nums) {
	result.push(StrReverse(num))
}

console.log(result); */

/* let num1 = 234;
let num2 = 531;

function StringSum(num){
	let digit = String(num).split('')
	let digitsSum1 = 0;
	for(let digit1 of digit){
		digitsSum1 += Number(digit1);
	}return digitsSum1;
}

if (StringSum(num1) == StringSum(num2)) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}

 */

/* let nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
} */

/* function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}


let num = 12345;
let result = getSum(getDigits(num))
console.log(result);
 */


/* // Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem ;
	}
	
	return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	} return result;
}

console.log( getAvg(getDivisors(24)) ); */

/* function getOwnDivisors(num){
	let sum =[];
	for(let i=1;i<num;i++){
		if(num % i == 0){
			sum.push(i);
		}
	}return sum;
}

function getSum(arr){
	let result = 0;
	for(let elem of arr){
		result += elem;
	}return result;
}

function isFreindly(num1, num2){
	let arr =[];
	let e;
	for(let i=num1; i<=num2; i++){

	
	let sum1 = getSum(getOwnDivisors(i));
	let sum2 = getSum(getOwnDivisors(sum1));

	if (i == sum2 && i != sum1 && (e = !e)) {
		arr.push([i,sum1])}
}return arr;
}

let result = isFreindly(1,3000);

console.log(result) */

/* function getSum(num){
	let sum =0;
	for(let i=1; i<num; i++){
		if(num % i == 0) sum+=i;
	}return sum;
	
}

function getPerfect(num1, num2){
	let arr =[];
	for(let i=num1; i <=num2; i++){
		if(getSum(i) == i) arr.push(i);
	} return arr;
}

let num = getPerfect(1,1000);
console.log(num); */



/* function getSumple(num){
	for (let i = 2; i < num; i++){
		if(num % i == 0) return false;
	} return true;
}

function getSumpleDivisors(num){
	let divisors =[];
	for(let i=2; i<num; i++){
		if(num % i == 0 && getSumple(i))
		divisors.push(i);
	}return divisors;
}

let result = getSumpleDivisors(77);
console.log(result); */

/* function inArray(elem, arr){
	return arr.indexOf(elem) !== -1;
}

function getInt(arr1, arr2){
	let result = [];
	for(let elem of arr1)
	if(inArray(elem, arr2)) result.push(elem);
	return result;
}

console.log(getInt([1, 2, 3], [2, 3, 4, 5])); */

/* function inArray (elem,arr){
	return arr.indexOf(elem) == -1;
}

function getFirstDiff(arr1, arr2){
	let result =[];

	for(let elem of arr1){
		if(inArray(elem, arr2)) 
		result.push(elem)
	}return result;
}

function getDiff(arr1, arr2){
	let diff1 =getFirstDiff(arr1, arr2);
	let diff2 =getFirstDiff(arr2, arr1);

	return [].concat(diff1,diff2);
}
console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); */

/* function getDivisirs(num){
	let arr =[];
	for(let i = 1; i<=num; i++){
		if(num % i==0) arr.push(i);
	} return arr;
}

function inArray (elem,arr){
	return arr.indexOf(elem) !== -1;
}
function getGreatestCommonDivisor(num1,num2){

	let diff1 = getDivisirs(num1);
	let diff2 = getDivisirs(num2);

	 let result=[];

	 for(let elem of diff1){
		 if(inArray(elem,diff2)) result.push(elem)
	 }return Math.max.apply(null, result);
	}

	let result = getGreatestCommonDivisor(12,18)
	console.log(result); */

/* 	function getRandomInt (min, max){
		return Math.floor(Math.random() * (max-min+1))+min;
	}

	function getRandom(arr){
		return arr[getRandomInt(0, arr.length - 1)]
	}

	let arr =getRandom([1,2,3,4,5,6,7,8,9,10]);

	let result = 0;
	for(let i=0; i<3; i++){
		result+=arr;
		console.log(result);
	}
 */
	
/* function getRandom(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function shuflle(arr){
	let result = [];

	while(arr.length > 0){
	let random = getRandom(0,arr.length - 1);
	let elem = arr.splice(random, 1)[0];
	result.push(elem);}
	return result;
}

console.log(shuflle([1,2,3,4,5])); */

/* function getRandom(min, max){
	return Math.floor(Math.random() * (max-min +1))+ min;
}

function suflee(arr){
	let result =[];

	while(arr.length>0){
		let random = getRandom(0,arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}return result;
}
 function range(num1,num2){
	 let arr=[]
	 for(let i=num1; i<=num2; i++){
		arr.push(i)
	 }return arr;
 }

 function rangeRang(num1, num2){
	 let arr = range(num1, num2);
	 let result = suflee(arr);
	 return result;
 }

 let result = rangeRang(5,12);
 console.log(result); */

 /* function NormalizeNum(num){
	 let str = String(num);

	 if( str.length == 5) str = '0'+ str;
	 if( str.length == 4) str = '00'+ str;
	 return str;
 }

 function isLucky(num){
	 let str = NormalizeNum(num);

	 let sum1 = Number(str[0])+ Number(str[1])+ Number(str[2]);
	 let sum2 = Number(str[3])+ Number(str[4])+ Number(str[5]);
	 return sum1 == sum2;
 }

 function getLuckyTickets(){
	 let result = [];

	 for(let i =1001; i<=999999;i++){
		 if(isLucky(i)) result.push(i);
	 }return result;
 }
 console.log(getLuckyTickets()); */

/*  let math = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};

for(let elem in math){
	console.log(math[elem]());
}
 */


/* let get1 = function (){return 1;}
let get2 = function (){return 2;}
let get3 = function (){return 3;}

let test = function(func1, func2, func3){
	alert(func1()+func2()+func3());
} 
test (get1,get2,get3) */

/* let func1 = function(num,num1) {
	return num + num1;
};

function test(func) {
	alert(func);
}

test(func1(2,3)); */

/* function test(num, func1, func2) {
	return alert(func1(num) + func2(num));
}

test (3, function(num){
	return num * num}, 
	function(num){
		return num*num*num
	}) */

/* 	function test(arr,func1){
		for(let i=0; i<arr.length; i++){
			arr[i] = func1(arr[i]);
		}return arr;
	}
let result = test([1,2,3],function(num){
	return num*num*num;
})
console.log(result); */

/* function func(num1,num2){
	function square(num){
		return num * num;
	}
	function cube(num){
		return num*num*num
	}
	return( square(num1) + cube(num2));
}

let result = func(3, 5);
console.log(result); */

/* function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func = test();
alert(func()); */

/* function test(){
	let num = 3;
	return function func1(){
		alert(num);
		if (num >1 ) num --;
		else{num = 'отсчет окончен'}
	}
}
let test1 = test();
test1();
test1();
test1();
test1();
test1();
test1(); */

/* function test() {
	let counter = 0;
	
	return function() {
		return function() {
			alert(counter);
			counter++;
		};
	};
};

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2(); */


/* let func = (function(){
	let result = 1;
	return function(){
		alert(result);
		result++;
		if(result==6) result -= 5;
	}
})();

func();
 */

/* function eche(arr, callback){
	let result = [];

	for(let elem of arr){
		result.push(callback(elem));
	}
	return result;
}

let result = eche(['biba', 'buba', 'boba'], function(num){
	return num.split('').reverse().join('');
})

let result2 = eche(['biba', 'buba', 'boba'], function(num){
	return num.slice(0,1).toUpperCase() + num.slice(1);
})
console.log(result2); */

/* function each(arr, callback){
	let result = [];
	let i =0;

	for(let elem of arr){
		result.push(callback(elem,i++))
	}return result;
}

let result = each([3,5,7,3,2,6],function(elem,index){
	return elem * index;
})
console.log(result); */

/* let result = filter([1, 2, 3, 4, 5], function(elem, index) {
	if (elem % 2 == 0) {
		return true; 
	} else {
		return false;
	}
});

function filter(arr, callback){
	let result = [];
	let i=0;

	for(let elem of arr){
		if(callback(elem) == true)
		result.push(elem)
	} return result;
}
console.log(result); */

/* function filter(arr, callback){
	let result = [];

	for (let elem of arr){
		if(callback(elem)==true) result.push(elem)
	} return result;
}

let result = filter(['фыв','asdw','asd'],function(elem){
	if(elem.length >= 1 && elem.length <=3) 
	return true;
	else return false;
})

console.log(result); */

/* function every(arr, callback){
	let result = true;
	for (let elem of arr){
		if(callback(elem)==false)
		result = false;}
		return result;
}

let result = every([1, 2, -3, 4, 5,6], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result); */

/* function some(arr, callback){
	let result = false;

	for(let elem of arr){
		if(callback(elem) == true)
		result = true;
	} return result;
}
let result = some([1, 2, 3, -4, 5], function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log( result); */

/* function alternate(arr, callback1,callback2){
	let result =[];
	
	for(let i =0; i<arr.length; i++){
		if(i % 2 ==0) result.push(callback1(arr[i]))
		else result.push(callback2(arr[i]))
	} return result;

}

let result = alternate(
	['a', 'b', 'c', 'd', 'e'],
	function(elem) {
		return elem + '!';
	},
	function(elem) {
		return elem + '?';
	},
);

console.log(result); */

/* function func(arr) {
	console.log(arr.shift(), arr);
	
	if (arr.length != 0) {
		func(arr);
	}
}

func([1, 2, 3]); */

/* function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}

console.log(getSum([1, 2, 3]));
 */
/* let arr = [1, 2, 3, 4, 5];

function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}

console.log(getSum(arr)); */

/* function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}

func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]); */

/* function func(obj){
	for(let elem in obj){
		if(typeof obj[elem] =='object') {
			func(obj[elem])}
		else {console.log(obj[elem])}
	}
} 

func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}) */

/* let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

	console.log(func(arr));
	function func(arr) {
	let result = [];
	 
	for (let elem of arr) {
	if (!Array.isArray(elem)) {
	result.push(elem);
	} else {
	result.push(...func(elem));
	}
	}
	return result.join('');
	} */

	/* function func(obj){
		let sum = 0;

		for(let elem in obj){
			if(typeof obj[elem] == 'object') 
			sum += func(obj[elem])
			else 
			sum +=obj[elem]
		} return sum;
	}

	console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})); */

/* 	function func(arr){
		let result = [];
		for(let i = 0; i<arr.length; i++){
			if(typeof arr[i] =='object')
			result.push(...func(arr[i]))
			else result.push(arr[i]);
		}return result;
	}

	console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]])); */

/* let arr = [12, 22, 32, 42, 52];

let result = arr.map(function(elem){
	return String(elem).split('').reverse().join('');
})
console.log(result); */

/* let arr = ['123', '456', '789'];

let result = arr.map(function(elem){
	return elem.split('');
})
console.log(result); */


/* let arr = [12, 22, 32, 42, 52]

let result = arr.map(function(elem, index){
	return elem * index;
})
console.log(result); */

/* let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num){
		return num * num;
	})
});

console.log(result); */

/* let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem){
	sum +=elem;
})
console.log( sum); */

/* let arr = [1, -2, 3, -4, 5];

let result = arr.filter(elem => elem > 0 && elem < 10)
console.log(result); */

/* let arr = ['kekwey','kekwyes', 'kek'];

let result = arr.filter(elem => elem.length > 5 )
console.log(result); */

/* let arr= [22,4,24,35,8];

let result = arr.filter((num, index)=> num*index < 30)
console.log(result); */

/* let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter(num => typeof num !== 'object' );
console.log(result); */

/* let arr = [1, -2, 3, -4, 5];

let result = arr.filter(num => num > 0).length;
console.log(result); */

/* let arr = [1, -2, 3, -4, 5];

let result = arr.every(num => num % 2 ==0);
console.log(result); */

/* let arr = [12, 14, 12,5];

let result = arr.every((elem,index) => elem * index < 30)
console.log(result); */

/* let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
let result = func(...arr)
console.log(result); */

/* function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) ); */

/* let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
alert(min); */

/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);
 */

/* function func(...rest){
	let sum = 0;
	for(let elem of rest){
		sum += elem;
	}return sum / rest.length;
}

let result = func(1,2,3);
console.log(result); */

/* let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result)

function unite(...arrs){
	return arrs;
} */

/* let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname,...rest ] = arr
console.log(rest); */

/* function func([name,surname,department,position,salary]){
console.log(name);
console.log(surname);
console.log(department);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] ); */

/* function func({color = 'black', width, height}){
	console.log(color,width, height);
}
func( {width: 400, height: 500} ); */

/* let date = new Date();

console.log(addZero(date.getHours(12))+':'+addZero(date.getMinutes(59))+':'+addZero(date.getSeconds(59))+' '+addZero(date.getDate(31))+'.'+addZero(date.getUTCMonth(12))+'.'+addZero(date.getFullYear(2014)));

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
} */

/* let str = '2025-12-31';
let result =str.split('-').reverse().join(".");
console.log(result); */

/* let date = new Date();
if(date.getDay()==6||date.getDay() == 0){
	console.log('Выходной');
}else{
	console.log('будний');
} */


/* let date = new Date();
console.log(6 - date.getDay()); */

/* let date=new Date();
let month =date.getMonth()
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[month]); */

/* let date = new Date(2021, 10, 5); 
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]); */

/* let date = new Date(2015, 11, 4, 23, 59, 59);
console.log(date.getTime()); */

/* let now=new Date(2000,0,10);
let date=new Date(1988,2,1);
let diff = now.getTime() - date.getTime();
console.log(diff/(1000*60*60*24)); */
/* 
let now = new Date(2021,10,12);
let date = new Date(2021,11,6);
let diff= date.getTime()- now.getTime();
console.log(Math.floor(diff/(1000*60*60*24*30.5))); */


/* let isLeap = year => (new Date(year,2,0)).getDate()==29;
console.log(isLeap(2016)); */

/* let now  = new Date(); // получаем текущий момент
let date = new Date(now.getFullYear(), now.getMonth(), 1); // получаем нашу дату
let days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб',]
console.log(days[date.getDay()]); */

/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(),12,0,0);

console.log((now-date)/1000/60/60); */

/* let now = new Date();
let date = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1)
console.log(now-date/1000); */

/* let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1>date2) console.log('Первая дата больше');
else console.log('Вторая дата больше'); */

/* let now = new Date();
let date = new Date(now.getUTCFullYear(),11,6)

let diff = date-now;
console.log(diff);

if (diff > 0) console.log('будет');
else if(diff ==0) console.log('сегодня');
else console.log('было'); */

/* let button = document.querySelector('#button');
console.log(button);

let p1 = document.querySelector('.elem1');
console.log(p1);
let p2 = document.querySelector('.elem2');
console.log(p2);
let p3 = document.querySelector('.elem3');
console.log(p3); */

/* let parent = document.querySelector('#parent input')
console.log(parent); */

/* let button1 = document.querySelector('#button1');
button1.addEventListener('dblclick', function(){
	alert('жопаа');
})
let button2 = document.querySelector('#button2');
button2.addEventListener('mouseover', function(){
	alert('жопппыыы');
})
button2.addEventListener('mouseout', function(){
	alert('jooopppblblbl')
})
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
	alert('3');
})
let button4 = document.querySelector('#button4');
button4.addEventListener('mouseout', function(){
	alert('Jopppkii')
})


let button5 = document.querySelector('#button5');
button5.addEventListener('click', func1);

function func1(){
	alert('O_o == O_o');
} */

/* let p1 = document.querySelector('#elem1');
let p2 = document.querySelector('#elem2');

p1.addEventListener('click', func1);
p2.addEventListener('click', func1);

function func1(){
	alert('message')
} */

/* let p = document.querySelector('#elem');
p.addEventListener('click',func1);
p.addEventListener('click',func2);
p.addEventListener('click',func3);

function func1(){
	alert('1');
}
function func2(){
	alert('2');
}
function func3(){
	alert('3');
} */

/* let button = document.querySelector(".button");
button.addEventListener('dblclick', function(){
	alert(1);
})
button.addEventListener('dblclick', function(){
	alert(2);
})
button.addEventListener('dblclick', function(){
	alert(3);
}) */

/* let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
	alert(Number(p1.innerHTML) + Number(p2.innerHTML));
}) */

/* let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let buttom1 = document.querySelector('.button1');
let buttom2 = document.querySelector('.button2');

buttom1.addEventListener('click', function(){
	p1.innerHTML = 'Privet!!!';
})
buttom2.addEventListener('click', function(){
	alert(p2.innerHTML);
}) */

/* let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let buttom1 = document.querySelector('.button1');
let buttom2 = document.querySelector('.button2');

buttom1.addEventListener('click', function(){
	p1.innerHTML = 'Privet'
})
buttom2.addEventListener('click', function(){
	p1.innerHTML = 'Poka'
}) */

/* let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');

p1.addEventListener('click', function(){
	p1.innerHTML = "1";
})
p2.addEventListener('click', function(){
	p2.innerHTML = "2";
})
p3.addEventListener('click', function(){
	p3.innerHTML = "3";
}) */

/* let p1 = document.querySelector('.p1');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function(){
	p1.innerHTML = '<b>' + p1.innerHTML +'</b>';
}) */

/* let button = document.querySelector('#button');
let elem   = document.querySelector('#elem');

button.addEventListener('click', function() {
	alert(elem.id);   // выведет 'elem'
	alert(elem.type); // выведет 'text'
});
button.addEventListener('click', function() {
	elem.type = 'submit'; // присвоим новое значение атрибуту type
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.type = 'submit';
}) */
/* let p1 = document.querySelector('#p1');
let button = document.querySelector('#button');
let a1 = document.querySelector('.a1');

button.addEventListener('click', function(){
	a1.innerHTML= a1.innerHTML +'(' + a1.href+ ')';
}) */

/* let p1 = document.querySelector('#p1');
let button = document.querySelector('#button');
let img1 = document.querySelector('.img1');

button.addEventListener('click', function(){
	img1.width = img1.width * 2;
}) */

/* let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let img1 = document.querySelector('.img1');

button1.addEventListener('click', function(){
	img1.src = 'img/2.jpg'
})
button2.addEventListener('click', function(){
	img1.src = 'img/3.jpg'
}) */

/* let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');
let p1 = document.querySelector('#p1');

button.addEventListener('click', function(){
	elem.value = p1.innerHTML;
}) */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem2.value = elem1.value ** 2;
}) */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');
let buff;
button.addEventListener('click', function(){
	buff = elem1.value;
	elem1.value = elem2.value;
	elem2.value = buff;
}) */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let button = document.querySelector('#button');
let p1 = document.querySelector('#p1');

button.addEventListener('click', function(){
	p1.innerHTML = (Number(elem1.value) + Number(elem2.value)+Number(elem3.value)+Number(elem4.value)+Number(elem5.value))/5
}) */

/* let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');

elem1.addEventListener('focus',function(){
	elem1.value = 1;
})
elem1.addEventListener('blur',function(){
	elem1.value = elem1.value ** 2;
}) */

/* let elem1 = document.querySelector('#elem1');

elem1.addEventListener('blur', function(){
	elem1.value = '';
}) */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	alert(elem.className)
}) */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.className = 'popka';
}) */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	let result = [];
	result = elem.className.split(' ');
	return console.log(result);
}) */
/* console.log(document.querySelector('#image').src); */

/* let img1 = document.querySelector('#image');
console.log(img1.src,img1.width,img1.height); */

/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
	this.value = 2;
});
elem.addEventListener('focus', function(){
	this.value =1;
}); */

/* let button = document.querySelector('#button');
button.addEventListener('click', function(){
	this.value = Number(this.value) + 1
}) */

/* let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');

let button = document.querySelector('#button');
p1.addEventListener('click', func);
p2.addEventListener('click', func);
p3.addEventListener('click', func);
p4.addEventListener('click', func);
p5.addEventListener('click', func);

function func (){
	this.innerHTML = this.innerHTML +'!'
}
 */

/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
elem3.addEventListener('blur', func);

function func(){
	this.value = Number(this.value) ** 2;
} */

/* let p1 = document.querySelectorAll('.p1');
let button = document.querySelector('#button');

button.addEventListener('click', func)
function func(){
	for(let elem of p1){
		elem.innerHTML = 'text';
	}
} */

/* let p1 = document.querySelectorAll('.p1');
let button = document.querySelector('#button');

button.addEventListener('click', func)
function func(){
	for(let i = 0; i <p1.length; i++){
		p1[i].innerHTML = p1[i].innerHTML + ' ' + (i+1);
	}
} */

/* let p1 = document.querySelector('.p1');
let button = document.querySelector('#button');
let elems = document.querySelectorAll('.elem');

button.addEventListener('click', func)
function func(){
	let result = 0;
	for(let elem of elems){
		result += Number(elem.value)
		p1.innerHTML = result;
	}} */

/* let elems = document.querySelectorAll('.elem');

for(let elem of elems){
	elem.addEventListener('blur', func)
}
	function func() {
		this.value = Number(this.value) + 1;
	} */

/* 	let p1 = document.querySelectorAll('.p1');
	for(let elem of p1){
		elem.addEventListener('click', func)
	}

	function func(){
		this.innerHTML = Number(this.innerHTML) ** 2;
	} */

/* 	let p1 = document.querySelectorAll('.p1');
	for(let elem of p1){
		elem.addEventListener('click', function(){
			this.innerHTML++;
		})
	}
 */
/* 	let button = document.querySelector('#button');
	button.addEventListener('click', func);
	
	function func() {
		alert('!!!');
		this.removeEventListener('click', func);
	} */

/* 	let a1 = document.querySelector('.a1');

	a1.addEventListener('click',function func(){
		this.innerHTML = this.innerHTML + '('+ this.href + ')';
		this.removeEventListener('click', func)
	
	}) */

/* 	let button = document.querySelector('#button');

	button.addEventListener('click', function func(){
		this.value = Number(this.value) + 1;
		if(this.value >= 10) button.removeEventListener('click', func)
	}) */

/* 	let p1 = document.querySelectorAll('.p1');

	for (let elem of p1){
		elem.addEventListener('click', func)
	}
	function func(){
		this.innerHTML = this.innerHTML + '!';
		this.removeEventListener('click', func)
	} */

/* 	let input1 = document.querySelector('#input1');
	alert(input1.getAttribute('value')) */

	/* let input1 = document.querySelector('#input1');
	alert(input1.getAttribute('class')) */

/* 	let input1 = document.querySelector('#input1');
	input1.setAttribute('value', '!+!+!') */
	
	/* let input1 = document.querySelector('#input1');
	input1.removeAttribute('value'); */

/* 	let input1 = document.querySelector('#input1');
	console.log (input1.hasAttribute('value'));
 */

/* 	let elem1 = document.querySelector('#elem1');
	console.log(elem1.classList.length);
 */

	/* let elem1 = document.querySelector('#elem1');
	let classNames = elem1.classList;
	for(let elem of classNames){
		console.log(elem);
	} */
	/* let elem1 = document.querySelector('#elem1');
	elem1.classList.add('xxx')
	console.log(elem1.classList); */

	/* let elem1 = document.querySelector('#elem1');
	elem1.classList.remove('zzz','ggg')
	console.log(elem1.classList); */

	/* let elem1 = document.querySelector('#elem1');
	console.log(elem1.classList.contains('ggg')) */

	/* let elem1 = document.querySelector('#elem1');
	elem1.classList.toggle('xxx')
	console.log(elem1.classList); */
	
	/* let p1 = document.querySelector('.p1');
	let button = document.querySelector('#button');

	button.addEventListener('click', function(){
		p1.style.width = '130px'
		p1.style.height = '130px'
		p1.style.borderTop = '1px solid red'
		p1.style.fontSize = '20px'
		p1.style.backgroundColor = 'green'
		p1.style.textAlign = 'center'
		p1.style.lineHeight = '110px'
	}) */

/* 	let p1 = document.querySelectorAll('.p1');
	let elem1 = document.querySelector('.elem1');
	let elem2 = document.querySelector('.elem2');
	let elem3 = document.querySelector('.elem3');
	
	elem1.addEventListener('click', function(){
		for(let elem of p1){
			elem.classList.toggle('decorated')
		}
	})
	elem2.addEventListener('click', function(){
		for(let elem of p1){
			elem.classList.toggle('weighted')
		}
	})
	elem3.addEventListener('click', function(){
		for(let elem of p1){
			elem.classList.toggle('colored')
		}
	})
 */
/* let elem = document.querySelector('#elem');
elem.firstElementChild.classList.add('colored') */

/* let elem = document.querySelector('#elem');
elem.lastElementChild.classList.add('colored') */

/* let elem = document.querySelector('#elem');
let children = elem.children
for(let elem of children){
	elem.innerHTML = elem.innerHTML + '!';
} */

/* let elem = document.querySelector('#elem');
elem.parentElement.classList.add('bordered') */
	
/* let elem = document.querySelector('#elem');
console.log(elem.closest("div")); */

/* let elem = document.querySelector('#elem');
console.log(elem.closest('.www')); */

/* let elem = document.querySelector('#elem');
let elem1 = elem.previousElementSibling;
elem1.innerHTML = elem1.innerHTML + '!'; 
 */

/* let elem = document.querySelector('#elem');
elem.nextElementSibling.innerHTML = elem.nextElementSibling.innerHTML + '!'; */

/* let elem = document.querySelector('#elem');
let elem1 = elem.nextElementSibling.nextElementSibling;
elem1.innerHTML = elem1.innerHTML + '!' */

/* let elem = document.querySelector('#elem');
let elem1;
elem1 = elem.previousElementSibling.innerHTML;
elem.previousElementSibling.innerHTML = elem.nextElementSibling.innerHTML;
elem.nextElementSibling.innerHTML = elem1; */

/* let parent = document.querySelector('#parent');
let elems1=parent.querySelectorAll('.www');
let elems2=parent.querySelectorAll('.ggg');
console.log(elems1,elems2); */

/* let elem = document.querySelector('#elem');
elem.addEventListener('click',function(){
	elem.innerHTML = elem.innerHTML + elem.dataset.text
}) */
/* let divs = document.querySelectorAll('.divs');
for(let elem of divs){
	elem.addEventListener('click',function(){
		this.innerHTML = this.innerHTML + ' ' + elem.dataset.num;
	})
} */

/* let buttom = document.querySelector('.elem4');
buttom.addEventListener('click',function(){
	buttom.dataset.num = Number(buttom.dataset.num) + 1 
})
buttom.addEventListener('dblclick', function(){
	alert(buttom.dataset.num)
})
 */

/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
	if(elem.value.length !== Number(elem.dataset.length)) 
	alert('количество введенных символов не совпадает с заданным')
}) */

/* let elem = document.querySelector('#elem');
elem.addEventListener('blur',function(){
	if(elem.value.length < Number(elem.dataset.min) || elem.value.length > Number(elem.dataset.max))
	alert('количество введенных символов не попадает')
} ) */

/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	elem.innerHTML = elem.innerHTML + ' ' + (Number(elem.dataset.productPrice) * Number(elem.dataset.productAmount));
}) */

/* let p1 = document.querySelectorAll('.p1');

for( let i = 0; i<p1.length; i++){
	p1[i].dataset.num = (i+1)
}
 */


/* let elem = document.querySelector('#elem');

for( let node of elem.childNodes){
	console.log(node.textContent);
} */

/* let elem = document.querySelector('#elem');

for( let node of elem.childNodes){
	console.log(node.data);
} */

/* let elem = document.querySelector('#elem');

for( let node of elem.childNodes){
	console.log(node.innerHTML,node.data);
} */

/* for( let node of elem.childNodes){
	console.log(node.nodeName);} */

	/* for( let node of elem.childNodes){
		console.log(node.nodeType);} */

/* let elem4 = document.querySelector('.elem4');
let p2 = document.querySelector('.p2');

elem4.addEventListener('blur', function(){
	p2.innerHTML = p2.innerHTML + this.value;
}) */

/* let button = document.querySelector('.button');
let elem4 = document.querySelectorAll('.elem4');
let p2 = document.querySelector('.p2');

button.addEventListener('click', function(){
	let result = 0;
	for(let elem of elem4){
		result +=Number(elem.value);
		p2.innerHTML=result;
	}
}) */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let sum = 0;
	let arr = this.value.split('');
	for(let elem of arr){
		sum +=Number(elem);
	this.value = sum;
	}
	}
) */
/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let sum = 0;
	let arr = this.value.split(',');
	for(let elem of arr){
		sum +=Number(elem);
	this.value = sum;
	}
	}
) */

/* let elem4 = document.querySelector('.elem4');
let elem5 = document.querySelector('.elem5');
let elem6 = document.querySelector('.elem6');
let elem7 = document.querySelector('.elem7');

elem4.addEventListener('blur', function(){
	let arr = elem4.value.split(' ')
	elem5.value = arr[0];
	elem6.value = arr[1];
	elem7.value = arr[2];
}) */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let arr = this.value.split(' ');
	let arr2 = [];
	for(let elem of arr){
		arr2.push(elem.slice(0,1).toUpperCase() + elem.slice(1));
		elem4.value = arr2.join(' ')
	}
}) */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let sum = 0;
	let arr = this.value.split(' ');
	for(let i = 1; i < arr.length; i++){
		sum += Number([i]);
	}
	this.value = sum;
})
 */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	this.value = this.value.split('.').join('-');
}) */

/* let elem4 = document.querySelector('.elem4');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
	let arr = elem4.value.split('');
	let arr2 = elem4.value.split('').reverse();
	for(let i=0; i<arr.length; i++){
		if(arr[i]!==arr2[i]) return alert('слово не палиндром');
	}return alert('Слово палиндром');
	
})
 */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let arr = String(elem4.value).split('');
	for(let i =0; i<arr.length;i++){
		if(arr[i]== 3) return alert('это число содержит 3')
	} return alert('Это число не содержит 3')
})
 */
/* let button = document.querySelector('.button');
let p1 = document.querySelectorAll('.p2');
button.addEventListener('click', function(){
	for(let i=0;i<p1.length; i++){
		p1[i].innerHTML = p1[i].innerHTML + ' ' + (i+1);
	}
}) */

/* let a1 = document.querySelectorAll('.a1');
for(let elem of a1){
	elem.innerHTML = elem.innerHTML + '('+ elem.href+ ')';
} */

/* let a1 = document.querySelectorAll('.a1');
for ( let elem of a1){
	if(elem.href.indexOf('http://') == 0 )
	elem.innerHTML = elem.innerHTML + '(&rarr;)'
}
 */

/* let p2 = document.querySelectorAll('.p2');

for(let elem of p2){
	elem.addEventListener('click', function(){
		this.innerHTML = Number(this.innerHTML) **2;
	})
} */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur', function(){
	let str = this.value.split('.').reverse().join(',');
	let data = new Date(str);
	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	elem4.value = days[data.getDay()];
	
})
 */

/* let elem4 = document.querySelector('.elem4');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
button1.addEventListener('click', function(){
	elem4.value = +elem4.value + 1;
})
button2.addEventListener('click', function(){
	let num = +elem4.value - 1;
	if(elem4.value > 0) elem4.value = num
	else elem4.value = 0;
})


 */

/* let elem4 = document.querySelector('.elem4');
let p2 = document.querySelectorAll('.p2');
for(let elem of p2){
	elem.addEventListener('click', function(){
		elem4.value = +elem4.value + 1;
	})
}
 */
/* 
let divs = document.querySelectorAll('.divs');
for(let elem of divs){
	if(elem.innerHTML.length > 10) elem.innerHTML = elem.innerHTML.slice(0,11)+'...'
	
} */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('blur',function(){
	if(+this.value >= 1 && +this.value <= 100) this.classList.add('colored'),this.classList.remove('colored2')
	else this.classList.add('colored2');
}) */

/* let elem4 = document.querySelector('.elem4');
let button = document.querySelector('.button1');

button.addEventListener('click', func1);

function func1 (){
	let str='';
	let sumbols = '1234567890qwertyuiopasdfghjklzxcvbnm';
	for(let i=0; i< 8; i++){
		str += sumbols.charAt(Math.floor(Math.random()* sumbols.length));
		elem4.value = str;
	}
} */

/* let elem4 = document.querySelector('.elem4');
let button = document.querySelector('.button1');

button.addEventListener('click', func1);

console.log(elem4.value);

function func1 (){
	let str='';
	let sumbols = elem4.value;
	for(let i=0; i< sumbols.length; i++){
		str += sumbols[(Math.floor(Math.random()* sumbols.length))];
		
	}elem4.value = str;
} */

/* let elem4 = document.querySelector('.elem4');
let button = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button.addEventListener('click', func);

function func (){
	p2.innerHTML = 5/9 * (+elem4.value - 32);
} */

/* let elem4 = document.querySelector('.elem4');
let button = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button.addEventListener('click', func);

function func (){
	let sum = 1;
	for(let i = 1; i <= elem4.value; i++){
		sum *= i ;
		p2.innerHTML = sum;
	} 
} */

/* let elem4 = document.querySelectorAll('.elem4');
let button = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button.addEventListener('click', func);

function func (){
	let sum = '';
	for(let elem of elem4){
		sum += Math.sqrt(elem.value) + ', ';
		p2.innerHTML = sum;
	}
} */

/* let p3 = document.querySelector('.p3');
let tera = document.querySelector('#tera');

tera.addEventListener('blur', function(){
	p3.innerHTML = tera.value;
}) */

/* let elem4 = document.querySelector('.elem4');
elem4.disabled = false;
let button = document.querySelector('.button1');
button.addEventListener('click', function(){
	elem4.disabled = true;
}) */
/* 
let elem4 = document.querySelector('.elem4');
elem4.disabled = false;
let button1 = document.querySelector('.button1');
button1.addEventListener('click', function(){
	elem4.disabled = true;
})
let button2 = document.querySelector('.button2');
button2.addEventListener('click', function(){
	elem4.disabled = false;
})
let button3 = document.querySelector('.button3');
button3.addEventListener('click', function(){
	if(elem4.disabled == true) elem4.value = 'Блокирован'
	else elem4.value = 'Не заблокирован';
}) */


/* let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let check = document.querySelector('#check');
let p2 = document.querySelector('.p2');

button1.addEventListener('click', function(){
	check.setAttribute('checked','checked')
})
button2.addEventListener('click', function(){
	check.removeAttribute('checked')
})
button3.addEventListener('click', function(){
	if(check.hasAttribute('checked'))p2.innerHTML = 'Отмечен'
	else p2.innerHTML = 'Не отмечен'
})
 */
/* let check = document.querySelector('#check');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function(){
	if(check.disabled)check.disabled = false;
	else check.disabled = true;
	
}) */

/* let check = document.querySelector('#check');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function(){
	check.disabled = !check.disabled;
	
})
 */

/* let radios = document.querySelectorAll('input[type = "radio"]');
let button1 = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button1.addEventListener('click', function(){
	for(let radio of radios){
		if(radio.checked)p2.innerHTML = radio.value;
	}
}) */

/* let elem4 = document.querySelector('.elem4');
let p2 = document.querySelector('.p2');

elem4.addEventListener('change', function(){
	p2.innerHTML = this.value;
} ) */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('change', function(){
	if(+this.value.length < 5) this.classList.add('bordered1'), this.classList.remove('bordered2')
	else this.classList.add('bordered2'),this.classList.remove('bordered1')
})

 */

/* let elem4 = document.querySelector('.elem4');
elem4.addEventListener('input', function func(){
	if(this.value.length == 5) alert('больше 5 символов'),
	this.removeEventListener('input', func);
}) */

/* let elem4 = document.querySelector('.elem4');
let p2 = document.querySelector('.p2');

elem4.addEventListener('input', function(){
	let i = +this.value.length;
	if(i<5) p2.innerHTML = 'можно ввести: '+ (5-i)
	else if (i==5) p2.innerHTML = 'можно ввести: 0'
	else if (i>5) p2.innerHTML = 'превышает на: ' + (i-5)
})

 */

/* let elem4 = document.querySelector('.elem4');
let elem5 = document.querySelector('.elem5');

elem4.addEventListener('input', function(){
	if(this.value.length == 2) elem5.focus()
})
elem5.addEventListener('input', function(){
	if(this.value.length == 2) elem5.blur()
}) */

/* let select = document.querySelector('#select');
let button1 = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button1.addEventListener('click', function(){
	p2.innerHTML = select.value;
}) */

/* let select = document.querySelector('#select');
let button1 = document.querySelector('.button1');
let p2 = document.querySelector('.p2');

button1.addEventListener('click', function(){
	if (select.value % 4 == 0)p2.innerHTML = 'Год высокосный'
	else p2.innerHTML = 'Год невысокосный'})
 */

/* let select = document.querySelector('#select');
select.addEventListener('change', function(){
	if(this.value == 6 || this.value == 7)
	alert('Выходной')
	else alert('Будний')
}) */

/* let select = document.querySelector('#select');
let button1 = document.querySelector('.button1');

let date = new Date();
let month = date.getMonth() + 1;
select.value = month; */

/* let elem4 = document.querySelector('.elem4');
let select = document.querySelector('#select');

elem4.addEventListener('blur', function(){
	select.selectedIndex = this.value;
}) */

/* let select = document.querySelector('#select');
let date = new Date();
select.selectedIndex = date.getDay() - 1; */

/* let select = document.querySelector('#select');

for(let option of select){
	option.innerHTML = option.innerHTML + option.value;
} */

/* let select = document.querySelector('#select');
for(let option of select){
	if(option.selected == true)
	option.innerHTML = option.innerHTML + '!'
	else option.innerHTML = option.innerHTML + '?'} */

/* let select = document.querySelector('#select');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function(){
	select[6].selected = true;
}) */

/* let select = document.querySelector('#select');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function(){
	let index = select[select.selectedIndex];
	index.innerHTML = index.innerHTML + '!';
}) */

/* let button1 = document.querySelector('.button1');
button1.addEventListener('click', function(event){
	console.log(event);
}) */

/* let p2 = document.querySelector('.p2');
document.addEventListener('mousemove',function(event){
	p2.innerHTML = event.clientX +' : '+ event.clientY;
})
 */

/* let p2 = document.querySelector('.p2');
let elem6 = document.querySelector('#elem6');

elem6.addEventListener('click', func);
elem6.addEventListener('dblclick', func);

function func(event) {
	if(event.type == 'click') elem6.classList.add('colored'),elem6.classList.remove('colored2')
	else if (event.type == 'dblclick') elem6.classList.add('colored2'),elem6.classList.remove('colored')
} */

/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event){
	if(event.target.tagName == 'LI') event.target.innerHTML = event.target.innerHTML + '!'
	else if(event.target.tagName == 'UL') event.target.innerHTML = event.target.innerHTML + '<li>text</li>'
}) */

/* let elem4 = document.querySelector('.elem4');
let p2 = document.querySelector('.p2');

elem4.addEventListener('keydown',function(event){
	if(event.code == 'Enter' || event.code == 'NumpadEnter' )
	p2.innerHTML += ` ${elem4.value}`,
	elem4.value = '';
}) */

/* let elem6 = document.querySelector('#elem6');
elem6.addEventListener('click',function(event){
	if(event.altKey)this.classList.toggle('colored')
}) */

/* let elem = document.querySelector('#elem');
elem.addEventListener('click',function(event){
	if(event.target.tagName == 'LI' && event.ctrlKey)
	event.target.innerHTML += '1';
	if(event.target.tagName == 'LI' && event.shiftKey)
	event.target.innerHTML += '2';

}) */

/* let a2 = document.querySelector('#a2');

a2.addEventListener('click', function(event){
	event.preventDefault();
	this.innerHTML += ' ' +this.href;
}) */

/* let elem4 = document.querySelectorAll('.elem4');
let p2 = document.querySelector('.p2');
let a2 = document.querySelector('#a2');

a2.addEventListener('click',function(event){
	event.preventDefault();
	let sum = 0;
	for(let elem of elem4){
		sum += +elem.value;
	}
	p2.innerHTML = sum;
}) */

/* let el1 = document.querySelector('#el1');
let el2 = document.querySelector('#el2');
let el3 = document.querySelector('#el3');

el1.addEventListener('click',function(){
	alert ('Первый')
})
el2.addEventListener('click',function(){
	alert ('второй')
})
el3.addEventListener('click',function(){
	alert ('третьий')
})
 */
/* let divs2 = document.querySelector('.divs2');
let ul2 = document.querySelector('.ul2');
let li2 = document.querySelectorAll('.li2');

divs2.addEventListener('click', function(event){
	if(event.target.matches ('div'))alert ('divs')
	if(event.target.tagName === 'UL')alert ('ul')
	if(event.target.tagName === 'LI')alert ('li')
}) */

/* let divs2 = document.querySelector('.divs2');
let ul2 = document.querySelector('.ul2');
let li2 = document.querySelectorAll('.li2');

divs2.addEventListener('click', function(event){
	let i = 3;
	if(event.target.tagName === 'UL') ul2.innerHTML += '<li class="li2"> </li>';
	if(event.target.tagName === 'LI') 
		event.target.innerHTML += '!';
	}
) */

/* let parent = document.querySelector('#parent');
let knopka = document.querySelector('.knopka');
let block  = document.querySelector('#block');

knopka.addEventListener('click', function(event){
	block.classList.add('active')
	event.stopPropagation();
})
parent.addEventListener('click', function(){
	block.classList.remove('active')
}) */

/* let ul2 = document.querySelector('.ul2');
let li2 = ul2.querySelectorAll('.li2');
let knopka = document.querySelector('.knopka');

knopka.addEventListener('click',function(){
	let item = document.createElement('li');
	item.innerHTML = 'item';
	ul2.appendChild(item);
})

ul2.addEventListener('click', function(event){
	event.target.innerHTML += '!'
}) */

/* let ul2 = document.querySelector('.ul2');
let li2 = ul2.querySelectorAll('.li2');
let knopka = document.querySelector('.knopka');

knopka.addEventListener('click',function(){
	let item = document.createElement('li');
	item.innerHTML = 'item';
	ul2.appendChild(item);
})

ul2.addEventListener('click', function(event){
	let li = event.target.closest('li')
	if(li) li.innerHTML += '!'
}) */


/* let elem10 = document.querySelector('#elem10');
elem10.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет?
	
	function child() {
		console.log(elem10.value); // что выведет?
	}
	child();
} */

/* let elem10 = document.querySelector('#elem10');

function func (surname, name){
	alert (this.value +', '+surname +' '+ name);
}
func.apply(elem10, ['Иванов','Иван']); */


/* let elem10 = document.querySelector('#elem10');

function func (surname, name){
	alert (this.value +', '+surname +' '+ name);
}
func.call(elem10,'Иванов','Иван'); */

/* let elem10 = document.querySelector('#elem10');
function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func = func.bind(elem10);
func ('Иванов', 'Иван');
func ('Петров', 'Петр'); */

/* setInterval(timer,1000);

function timer(){
	console.log('!');
} */

/* let i = 100;
setInterval(() => console.log(i--),1000); */

/* let i = 10;

let timer = setInterval(function(){
	console.log(i--);

if( i < 0)clearInterval(timer);

}, 1000) */

/* let knopka = document.querySelector('.knopka');

knopka.addEventListener('click',function fun(){
	let i = 100;

	setInterval (function(){
		console.log(i--);
	}, 1000);

	this.removeEventListener('click', fun);
}) */

/* let knopka1 = document.querySelector('.knopka1');
let knopka2 = document.querySelector('.knopka2');

let timer;

function func(){
	let i = 100;
	timer = setInterval(function(){
		console.log(i--);
	},1000)

	this.removeEventListener('click',func)
}
knopka1.addEventListener('click',func)

knopka2.addEventListener('click', function(){
	clearInterval(timer);

	knopka1.addEventListener('click',func)
}) */

/* let elem10 = document.querySelector('#elem10');

let timer = setInterval(function(){
	elem10.value = +elem10.value - 1;

	if(elem10.value == 0)clearInterval(timer);
},1000) */

/* let elem10 = document.querySelector('#elem10');

elem10.addEventListener('click', function func(){
	let self = this;
	setInterval(function(){
		self.value = +self.value + 1;
	},1000)
	this.removeEventListener('click', func)
}) */

/* let elem10 = document.querySelector('#elem10');

elem10.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000,this);
}); */

/* let knopka1 = document.querySelector('.knopka1');
let p5 = document.querySelector('.p5')

knopka1.addEventListener('click', function func(){
	setInterval(function(){
		p5.innerHTML = +p5.innerHTML + 1;
	},1000,this)
	this.removeEventListener('click',func)
}) */

/* let knopka1 = document.querySelector('.knopka1');
let p5 = document.querySelector('.p5')

knopka1.addEventListener('click', function func(){
	let timer = setInterval(function(){
		p5.innerHTML = +p5.innerHTML - 1;

		if(p5.innerHTML == 0)clearInterval(timer)
	},1000,this)
	this.removeEventListener('click',func)

	
}) */

/* let elem5 = document.querySelector('.elem5');

setInterval(function(){
	elem5.value *= elem5.value; 
},1000) */

/* let elem5 = document.querySelector('.elem5');

elem5.addEventListener('blur', function func(){
	let timer = setInterval(function(self){
		self.value -= 1;
	if (self.value == 0)
	clearInterval(timer);
	},1000,this)
	this.removeEventListener('click',func);
}) */

/* let elem5 = document.querySelector('.elem5');
let knopka1 = document.querySelector('.knopka1');
let p5 = document.querySelector('.p5');

knopka1.addEventListener('click',function func(){
	p5.innerHTML = elem5.value;
	let timer = setInterval(function(){
		p5.innerHTML -= 1;
	if(p5.innerHTML == 0)clearInterval(timer)
	},1000)
	this.removeEventListener('click',func)
})
 */

/* let p5 = document.querySelector('.p5');
let knopka1 = document.querySelector('.knopka1');
let knopka2 = document.querySelector('.knopka2');
let timer;
function func(){
	p5.innerHTML = 1;
	timer = setInterval(function(){
		p5.innerHTML++;
	},1000)
	this.removeEventListener('click',func)}
knopka1.addEventListener('click', func)
knopka2.addEventListener('click', function(){
	clearInterval(timer);
	knopka1.addEventListener('click',func);
}) */

/* let p5 = document.querySelector('.p5');

setInterval(function(){
	p5.classList.add('colored1'), p5.classList.remove('colored2')
	
},1000);
setInterval(function(){
	p5.classList.add('colored2'), p5.classList.remove('colored1')
},2000) */

/* let p5 = document.querySelector('.p5');
let i= 0;
setInterval(function(){
	i++;
	if(i%2 == 0)p5.classList.add('colored1'), p5.classList.remove('colored2');
	else p5.classList.add('colored2'), p5.classList.remove('colored1');
},1000) */

/* let p5 = document.querySelector('.p5');
setInterval(function(){
	let date = new Date();
	let time = date.getHours() + ':' + date.getMinutes()+':'+ date.getSeconds();
	p5.innerHTML = time;
},1000) */

/* 
setTimeout(function(){
	alert(p5.innerHTML)
},3000); */


/* let p5 = document.querySelector('.p5');
let i = 0;
function timer(){
	setTimeout(function(){
		p5.innerHTML = +p5.innerHTML + 1;
		timer();
	},1000)
}
timer() */

/* let elem6 = document.querySelector('.elem6');
let li = document.createElement('li');
li.innerHTML = 'пункт';
elem6.appendChild(li); */

/* let elem6 = document.querySelector('.elem6');
let knopka1 = document.querySelector('.knopka1');
knopka1.addEventListener('click',function(){
	let li = document.createElement('li');
li.innerHTML = 'пункт';
elem6.appendChild(li);}) */

/* let elem6 = document.querySelector('.elem6');
let knopka1 = document.querySelector('.knopka1');

knopka1.addEventListener('click', function(){
	let li = document.createElement('li');
	elem6.appendChild(li)
})
elem6.addEventListener('click',function(event){
	if (event.target.closest('li'))
	event.target.innerHTML +="!"
})
 */

/* let elem6 = document.querySelector('.elem6');

for(let i=0; i<10; i++){
	let li = document.createElement('li')
	li.innerHTML = li.innerHTML + (i+1)
	elem6.appendChild(li);
} */

/* let elem6 = document.querySelector('.elem6');
let p5 = document.querySelector('.p5');

for(let i=0; i<5; i++){
	let input = document.createElement('input')
	input.value = input.value + (i+1)
	input.addEventListener('blur', function(){
		p5.innerHTML += this.value;
	})
	elem6.appendChild(input);
} */

/* let elem6 = document.querySelector('.elem6');
let arr = [1,2,3,4,5];

for( let elem of arr){
	let p = document.createElement('p');
	p.innerHTML = elem;

	p.addEventListener('click', function(){
		this.innerHTML = +this.innerHTML + 1;
	})

	elem6.appendChild(p);
} */

/* let elem6 = document.querySelector('.elem6');
let arr = [1,2,3,4,5];

for(let elem of arr){
	let li = document.createElement('li');
	li.innerHTML = elem;

	li.addEventListener('click', function(){
		alert(this.innerHTML)
	})
	elem6.appendChild(li);
} */

/* let elem6 = document.querySelector('.elem6');
let arr = [1,2,3,4,5];

for(let elem of arr){
	let li = document.createElement('li');
	li.innerHTML = elem;

	li.addEventListener('click', function func(){
		this.innerHTML += '!'

		this.removeEventListener('click', func)
	})
	elem6.appendChild(li);
} */

/* let table = document.querySelector('#table');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let knopka1 = document.querySelector('.knopka1');

knopka1.addEventListener('click',func)

function func(){
for(let i = 0; i<input1.value; i++){
	let tr = document.createElement('tr');

	for(let j=0; j<input2.value; j++){
		let td = document.createElement('td');
		td.innerHTML += 'x'
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
}
 */

/* let table = document.querySelector('#table');
let k = 2;
for(let i=0; i < 5; i++){
	let tr = document.createElement('tr');

	for(let j=0; j<10; j++){
		let td = document.createElement('td');
		td.innerHTML = k;
		k += 1;
		if(td.innerHTML % 2 == 0)
		tr.appendChild(td);
	}
	table.append(tr);
} */

/* let table = document.querySelector('#table');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for(let Subarr of arr){
	let tr = document.createElement('tr');

	for(let elem of Subarr){
		let td = document.createElement('td');
		td.innerHTML = elem ** 2;
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
 */


/* let table = document.querySelector('#table');
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for(let employee of employees){
	let tr = document.createElement('tr')

	let td1 = document.createElement('td');
	td1.innerHTML = employee.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.innerHTML = employee.age;
	td2.addEventListener('click', function(){
		this.innerHTML =+this.innerHTML + 1;
	})
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.innerHTML = employee.salary;
	td3.addEventListener('click', function(){
		this.innerHTML = +this.innerHTML + (+this.innerHTML * 0.1);
	})
	tr.appendChild(td3);

	table.appendChild(tr);
} */

/* let table = document.querySelector('#table');
let knopka1 = document.querySelector('.knopka1');
let k = 3;

knopka1.addEventListener('click',function(){
	let tr = document.createElement('tr')

	for(let i = 0; i<k; i++){
		let td = document.createElement('td')
		tr.appendChild(td)
	}
	k++;
	let trs = document.querySelectorAll('#table tr');

	for(let tr of trs){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	table.appendChild(tr);

}) */

/* let knopka1 = document.querySelector('.knopka1');
let td = document.querySelectorAll('#table td');

knopka1.addEventListener('click', function (){
	for(let elem of td){
		elem.innerHTML = elem.innerHTML **2;
	}
}) */

/* let td = document.querySelectorAll('#table td');

for(let i = 0; i<td.length; i++){
	td[i].innerHTML = i + 1;
} */

/* let tds = document.querySelectorAll('#table td');
let i = tds.length;
for(let td of tds){
	td.innerHTML = i--;
} */

/* let trs = document.querySelectorAll('#table tr');
for(let i=0; i<trs.length; i++){
	let tr = trs[i];
	let tds = tr.querySelectorAll('td')
	for(let j=0; j<tds.length; j++){
		let td = tds[j];
		td.innerHTML = +(i+1) +'.' + (j+1);
	}
}
 */

/* let tds = document.querySelectorAll('#table td');

for(let i=0; i<tds.length; i++){
	let td = tds[i];
	td.addEventListener('click',function(){
		this.innerHTML = i+1;
	})
} */

/* let tds = document.querySelectorAll('#table td');

for (let i = tds.length -1, k = 0; i >= 0; i--, k++) {
	tds[i].addEventListener('click', function () {
	this.innerHTML = k+1;
	});
	}
 */

/* let tds = document.querySelectorAll('#table td');

let i = 1;
for(let td of tds){
	td.addEventListener('click',function func(){
		this.innerHTML = i++;
	this.removeEventListener('click',func)
	})
} */

/* let tds = document.querySelectorAll('#table td');

let i = 1;
for(let td of tds){
	td.addEventListener('click',function func(){
		this.innerHTML = i;
	if (i==1)i=2;
	else if (i == 2) i = 3;
	else i = 1;
	})
}
 */

/* let parent = document.querySelector('#parent');
let li   = document.querySelectorAll('#parent li');
let knopka3 = document.querySelector('.knopka3');

knopka3.addEventListener('click', ()=>
	parent.removeChild(li[li.length - 1])); */



/* 	let elems = document.querySelector('#elems');

	elems.addEventListener('click',()=> elems.parentElement.removeChild(elems)); */


/* let elems = document.querySelector('#elems');
elems.addEventListener('click', ()=>elems.remove());
 */

/* let parent = document.querySelector('#parent');
let ps = document.querySelectorAll('#parent p');

for(let elem of ps){
	elem.addEventListener('click', function(){
		this.remove();
	})
} */

/* let parent = document.querySelector('#parent');
let lis = document.querySelectorAll('#parent li');
let knopka3 = document.querySelector('.knopka3');

knopka3.addEventListener('click',function(){
	let li = document.createElement('li');
	li.innerHTML = 'new'
	parent.appendChild(li);

	li.addEventListener('click', function(){
		li.parentElement.removeChild(this)
	})
})

for(let li of lis){
	li.addEventListener('click',()=>li.remove())
} */

/* let elems   = document.querySelector('#elems');
let remove = document.querySelector('#remove');

remove.addEventListener('click',function(event){
	elems.remove();
	event.preventDefault();
}) */

/* let Allp= document.querySelectorAll('#parent p');

for(let elem of Allp){
	let a = document.createElement('a');
	a.href ='';
	a.innerHTML = 'remove';
	elem.appendChild(a);

	a.addEventListener('click',function (event){
		elem.remove();
		event.preventDefault();
	})
} */

/* let Allli = document.querySelectorAll('#parent li');

for(let elem of Allli){
	let remove = document.createElement('a');
	remove.href = '';
	remove.innerHTML = 'remove';
	elem.appendChild(remove);

	elem.addEventListener('click',function(event){
		elem.remove();
		event.preventDefault();
	})
} */

/* let table = document.querySelectorAll("#table");
let trs = document.querySelectorAll("#table tr");

for(let tr of trs){
	let td = document.createElement('td');
	let a = document.createElement('a');
	a.href = '';
	a.innerHTML = 'Del'
	td.appendChild(a);

	a.addEventListener('click', function(event){
		tr.remove();
		event.preventDefault();
	})
	tr.appendChild(td);
} */


/* let elems = document.querySelector('#elems');

elems.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>' ) */

/* let elems = document.querySelector('#elems');
let knopka3 = document.querySelector('.knopka3');

knopka3.addEventListener('click', ()=>elems.insertAdjacentElement('afterEnd', elems.cloneNode(true))); */

/* let elems = document.querySelector('#elems');
console.log(elems.matches('.www')); */

/* let elems1 = document.querySelector('#elems1');
let elems2 = document.querySelector('#elems2');

console.log(elems1.contains(elems2)); */

/* let elems = document.querySelector('#elems');

elems.addEventListener('click', function func(){
	let input = document.createElement('input');
	input.value = elems.innerHTML;
	
	
	input.addEventListener('blur', function(){
		elems.innerHTML = this.value;

		this.remove();
		elems.addEventListener('click',func);
	})
	
	elems.parentElement.appendChild(input);
	this.removeEventListener('click',func);
}) */

/* let elems = document.querySelector('#elems');

elems.addEventListener('click', function func(){
	let input = document.createElement('input');
	input.value = this.innerHTML;
	this.innerHTML = '';
	elems.appendChild(input);

	input.addEventListener('blur', function(){
		elems.innerHTML = this.value;

		elems.addEventListener('click', func);
	})
	this.removeEventListener('click',func);
}) */

/* let elems = document.querySelectorAll('#parent p');

for(let elem of elems){
elem.addEventListener('click', function func(){
	let input = document.createElement('input');
	input.value = this.innerHTML;
	this.innerHTML = '';
	elem.appendChild(input);

	input.addEventListener('blur', function(){
		elem.innerHTML = this.value;

		elem.addEventListener('click', func);
	})
	this.removeEventListener('click',func);
})
} */



/* let Allp = document.querySelectorAll('#parent p');
for(let p of Allp){
	let span = document.createElement('span');
	span.innerHTML = p.innerHTML;
	let a = document.createElement('a');
	a.href='';
	a.innerHTML = 'Del';
	p.innerHTML = '';
	p.appendChild(span);
	p.appendChild(a);

	a.addEventListener('click',function(event){
		p.remove();
		event.preventDefault();
	})
}
let Allspan= document.querySelectorAll('#parent span');
for(let span of Allspan){
	span.addEventListener('click',function func(){
		let input = document.createElement('input');
		input.value = span.innerHTML;
		span.innerHTML = '';

		span.appendChild(input);

		input.addEventListener('blur',function(){
			span.innerHTML = input.value;

			span.addEventListener('click', func);
		})
		this.removeEventListener('click', func);
	})
} */

/* let Allp = document.querySelectorAll('#parent p');

for(let p of Allp){
	let span = document.createElement('span');
	span.innerHTML = p.innerHTML;
	p.innerHTML = '';
	let a = document.createElement('a');
	a.href='#';
	a.innerHTML = 'Decor';
	p.appendChild(span);
	p.appendChild(a);


	a.addEventListener('click',function(event){
	span.classList.add('decorated');
	event.preventDefault();
	}
	)
}
 */


/* let Allp = document.querySelectorAll('#parent p');

for(let p of Allp){
	let span = document.createElement('span');
	span.innerHTML = p.innerHTML;
	p.innerHTML = '';
	let a = document.createElement('a');
	a.href='#';
	a.innerHTML = 'Decor';
	p.appendChild(span);
	p.appendChild(a);


	a.addEventListener('click',function(event){
	span.classList.add('decorated');
	this.remove();
	event.preventDefault();
	}
	)
} */


/* let table = document.querySelector('#table');
let Alltr = document.querySelectorAll("#table tr");

for(let tr of Alltr){
	let td = document.createElement('td');
	let a = document.createElement('a');
	a.href = '#';
	a.innerHTML = 'Decor';

	tr.appendChild(td);
	td.appendChild(a);

	a.addEventListener('click', function(event){
		tr.classList.toggle('colored2');

		event.preventDefault();
	})
} */

/* let elems = document.querySelector('#elems');
let showAndHide = document.querySelector('#showAndHide');
showAndHide.addEventListener('click',()=>elems.classList.toggle('hidden'))
 */

/* let Alltd=document.querySelectorAll('#table td');
let color = 'colored1';
for( let td of Alltd){
	td.addEventListener('click',function(){
		
		if(color == 'colored1')color = 'colored2'
		else color = 'colored1',this.classList.remove('colored2');

		this.classList.add(color);
	})
} */

/* let Alltd=document.querySelectorAll('#table td');
let i = 0;
let colors = ['colored1','colored2','colored3'];

for(let td of Alltd){
	td.addEventListener('click',function(){
		if(i == colors.length) i = 0, this.classList.remove('colored2'),this.classList.remove('colored3');
		else if(i == 1) this.classList.remove('colored1'),this.classList.remove('colored3');
		else if(i == 2) this.classList.remove('colored1'),this.classList.remove('colored2');
		this.classList.add(colors[i++]);
	})
}
 */

/* let Alltd = document.querySelectorAll('#table td');

for(let td of Alltd){
	td.addEventListener('click', function(){
		let active = document.querySelectorAll('#table td.colored1')
		if(active.length < 3)
		this.classList.add('colored1')
	})
} */


/* let arr = [1,2,3,4,5];

let uls = document.querySelector('.uls');

for( let elem of arr){
	let li = document.createElement('li');
	li.innerHTML = elem;
	uls.appendChild(li);
} */


/* let arr = [1,2,3,4,5];

let uls = document.querySelector('.uls');
for(let elem of arr){
	let li = document.createElement('li');
	li.innerHTML = elem;
	uls.appendChild(li);
}
*/

/* (Задачка от данька)
const sum = (...nums) => {
	//let result = nums.reduce((acc, curr) => acc + curr);
	console.log(nums)
	let result = 0;
	for(let i = 0; i < nums.length; i++) {
	  result += nums[i];
	}
	console.log(result);
	const summ = (...someNums) => {
	  //result += someNums.reduce((acc, curr) => acc + curr);
	  for (let j = 0; j < someNums.length; j++) {
		result += someNums[j];
	  }
	  console.log(result);
	  return summ;
	}
	return summ;
  }
  
  sum(1)(2, 3)(5, 66, 7)(5) */


/*   let arr = [1,2,3,4,5];

  let uls = document.querySelector('.uls');
  for(let elem of arr){
	  let li = document.createElement('li');
	  li.innerHTML = elem;
	  uls.appendChild(li);
  } */


/*  function forEach(element, func){
	  let elems = document.querySelectorAll(element);

	  for(let elem of elems){
		func(elem);
	  }
  };

forEach ('.test', function(elem){
	elem.innerHTML = elem.innerHTML + '!';
  }); */


/*   function Foreach (selector, foo){
	  let elems = document.querySelectorAll(selector)
	  for(let i =0; i<elems.length; i++){
		  foo(i+1, elems[i]);
	  }
  }

  Foreach ('.test', function(index, elem){
	  elem.innerHTML = index +' ' + elem.innerHTML;
  }) */


/* ;(function(selector1, selector2){
	let inputs = document.querySelectorAll(selector1);
	let button = document.querySelector(selector2);
	let result = 0;
	for(let input of inputs){
		button.addEventListener('click',function(){
			result += +input.value;
			console.log(result);
		})
	}
})('.input1', '.knopka1'); */

/* let config = {
	root:  '.parent',
	type:  'p',
	amount: 5
}
;(function({root, type, amount}) {
	let parent = document.querySelector(root);
	
	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
		elem.textContent += i;
		parent.append(elem);
	}
})(config);
 */


/* let str = 'ahb acb aeb aeeb adcb axeb';
console.log(str.replace(/a.b/g)); */

/* let str = 'aba aca aea abba adca abea';
console.log(str.replace(/ab.a/g)); */

/* let str = '23 2+3 2++3 2+++3 445 677';
console.log(str.replace(/2\+*3/g )); */

/* let str = '[abc] {abc} abc (abc) [abc]';
console.log(str.replace(/\[abc\]/g,'!')); */

/* let str = 'aba accca azzza wwwwa';
console.log(str.replace(/a.+?a/g)); */

/* let str = 'a1a a2a a3a a4a a5a aba aca';
console.log(str.replace(/a\da/g)); */

/* let str = 'a1a a22a a333a a4444a a55555a aba aca';
console.log(str.replace(/a\d+a/g)); */

/* let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
console.log(str.replace(/a\d*a/g)); */

/* let str = 'avb a1b a2b a3b a4b a5b abb acb';
console.log(str.replace(/a\Db/g)); */

/* let str = 'ave a#b a2b a$b a4b a5b a-b acb';
console.log(str.replace(/a\Wb/g));
 */
/* let str = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(str.replace(/\s+/g, '!')); */

/* let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-z0-9]+a/g, '!'));  */

/* let str = 'wйw wяw wёw wqw';
console.log(str.replace(/w[а-яё]w/g)); */

/* let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
console.log(str.replace(/[а-яёА-ЯЁ]+/g)); */

/* let str = 'aba aea aca aza axa a.a a+a a*a';
console.log(str.replace(/a^[+*.]a/g)); */

/* let str = 'xaz x.z x3z x@z x$z xrz';
console.log(str.replace(/x[^$@.]z/g)); */

/* let str = 'xaz xBz xcz x-z x@z';
console.log(str.replace(/x[a-z-A-Z]z/g)); */

/* let str = 'xaz x$z x-z xcz x+z x%z x*z';
console.log(str.replace(/x[$+-]z/g)); */

/* let str = 'abc def xyz';
console.log(str.replace(/^\w+/g)); */

/* let str = 'abc def xyz';
console.log(str.replace(/\w+$/g)); */

/* let str = 'aeeea aeea aea axa axxa axxxa';
console.log(str.replace(/a(e+|x+)a/g)) */

/* let str = 'aeeea aeea aea axa axxa axxxa';
console.log(str.replace(/a(e{2}|x+)a/g)) */

/* /^a+$/.test('aaaaaaaaa'); */

/* let str = 'site.ru sss site.com zzz site.net';
console.log(str.match(/site\.\w+/g)) */

/* let str = 'a1b c34d x567z';
let arr = str.match(/\d/g)
console.log(arr);
let result= 0;
for(let elem of arr){
	result += +elem;
}
console.log(result); */

/* let str = '31.12.2025';
const res = str.match(/(\d+)\.(\d+)\.(\d+)/)
console.log(res); */

/* let str = '12 34 56 78';
console.log(str.replace(/(\d)(\d)/g, '$2$1')); */
/* 
let str = '31.12.2025';
console.log(str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3.$2.$1'));  */

/* let str = 'a1b2c3';
console.log(str.replace(/(\d)/g, "$&$&")); */

/* let str = 'sss site.ru zzz site.com kkk';
console.log(str.replace(/([a-z]+\.[a-z]+)/g, 'http://$&')); */

/* let str = 'aaa bbb ccc xyz';
let res =str.replace(/([a-z])\1\1/g);
console.log(res); */

/* let str = 'a aa aaa aaaa aaaaa';
console.log(str.replace(/(\w)\1+/g)); */

/* let str = 'aaa aaa bbb bbb ccc ddd';
console.log(str.replace(/(([a-z])\2\2)\s\1/g)); */

/* let str = 'func1() func2() func3()';
console.log(str.match(/\w+\(\)/g)
); */

/* let str = '<a href="" class="eee" id="zzz">';
console.log(str.match(/\w+=\"\w*\"/g)); */

/* let str = 'aaa [2] bbb [3] ccc [12] ddd';
let result = str.replace(/(\w+\s\[)(\d+(?=\]))/g, function(match1,match2,match3){
	let sum = Number(match3)*2;
	return match2 + sum;
})
console.log(result); */

/* let str = '1 23 456 789';
console.log(str.search(/\d{3}/)); */

/* let str = '2025-12-31 12:59:59';
console.log(str.split(/[-\s:]/)); */

/* let elems = document.querySelectorAll('.test');
console.log(Array.isArray(elems)); */


/* let elems = document.querySelectorAll('.test');
let arr = [];
for(let elem of elems){
	arr.push(elem);
}
console.log(Array.isArray(arr)); */

/* let elems = document.querySelectorAll('.test');
let arr = [...elems];
console.log(Array.isArray(arr)); */

/* let elems = document.querySelectorAll('.test');
let arr = Array.from(elems);
console.log(Array.isArray(arr)); */

/* let elems = document.querySelectorAll('.test');
let arr =[...elems];
console.log(arr.slice(1,arr.length - 1)); */


/* let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set (arr1, 'arr1')
map.set (arr2, 'arr2')
map.set (arr3, 'arr3')

console.log(map.get(arr1),map.get(arr2),map.get(arr3)); */


/* let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set (arr1, 'arr1')
map.set (arr2, 'arr2')
map.set (arr3, 'arr3')

let keys = map.keys();
for (let elem of keys){
	console.log(elem);
}
let values = map.values();
for(let elem of values){
	console.log(elem);
} */

/* let elems = document.querySelectorAll('.test');
let map = new Map;
let i = 1;
for(let elem of elems){
	map.set(elem,i++);
	elem.addEventListener('click', function(){
		this.textContent = this.textContent + map.get(this);
	})
} */


/* let elems = document.querySelectorAll('.input1');
let map = new Map;
let i = 1;
for (let elem of elems){
	map.set (elem, i++);
	elem.addEventListener('click',function(){
		this.value = this.value + map.get(this);
	})
} */

/* let elems = document.querySelectorAll('.input1');
let map = new Map;
for(let elem of elems){
	elem.addEventListener('keydown', function(event){
		if(event.code === 'Enter') 
		map.set (this.value);
	})
	this.addEventListener('blur', function(){
		console.log(map.value);
	})
} */

/* let arr = [1, 2, 3, 1, 3, 4];
let set = new Set(arr);
console.log(set);
set.add(10);
set.add(11);
set.add(16);
console.log(set.size);
console.log(set.has(3),set.has(5));
let result =0;
for(let elem of set){
	result +=elem;
}
console.log(result);

let arrset = [...set];
console.log(arrset);
set = new Set(arrset);
console.log(set); */

/* let arr = [1, 2, 3, 1, 3, 4];
let res = [...new Set(arr)];
console.log(res); */

/* let elems = document.querySelectorAll('.test');
let knopka1 = document.querySelector('.knopka1');
let set = new Set;
for(let elem of elems){
	elem.addEventListener('click', function(){
		set.add(this)
		console.log(set);
	})
}
knopka1.addEventListener('click', function(){
	for(let elem of set){
		elem.textContent = elem.textContent + '!';
	}
}) */

/* let buffer = new ArrayBuffer(32)
console.log(buffer); */

/* let id = Symbol("id");
alert(id.toString()) */

/* let user = {
	name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] );
  console.log(user); */

/*   let user = {
	name: "Вася",
	name1: "Вася"
  };

  let id = Symbol('idi');
  user[id] = function (){
	  alert('!')
  }
  console.log(user[id]()); */


/*   let arr = [1, 2, 3];
arr['func'] = function () {
	console.log(this);
}

arr['func'](); */
/* let func = Symbol('func') */


/* let arr = [1,2,3];

arr['func']= function(){
	let result = 0;
	for(let elem of this){
		result += Number(elem);
		
	}return result;
}
console.log(arr['func']()); */


/* let func = Symbol.for('func');
let arr = [1,2,3];

arr[func]= function(){
	let result = 0;
	for(let elem of this){
		result += Number(elem);
		
	}return result;
}
console.log(arr[func]()); */

/* let arr = [1,2,3];
console.log(arr[Symbol.iterator]); */

/* let elems = document.querySelectorAll('.test');
let knopka1 = document.querySelector('.knopka1');

let entries;
knopka1.addEventListener('click', function(){
entries= elems.entries();
for(let [num, elem] of entries){
	elem.innerHTML = elem.innerHTML + '!'
}})
 */
/* for(let [str, {id, innerHTML}] of entries){
	console.log(str, id,innerHTML);
} */

/* let json = '[1,2,3,4,5]';
let arr = JSON.parse(json);
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(arr.reduce(reducer)); */

/* let json = '[1, 2, 3, 4, 5]';

let arr  = JSON.parse(json);
arr.push(6);

let res = JSON.stringify(arr);
console.log(res); */

/* localStorage.setItem('key', 'hello');
let str = localStorage.getItem('key');
console.log(str); */

/* let time = localStorage.getItem('time');
if(!time){
	let now = (new Date()).getTime()
	localStorage.setItem("time", now)
}
console.log(localStorage.getItem('time')); */

/* let arr = [1, 2, 3, 4, 5];
localStorage.setItem('key', JSON.stringify(arr));
let str = localStorage.getItem('key');
let res = JSON.parse(str);
console.log(res); */

/* try {
	let data = JSON.parse('{1,2,3,4}');
} catch(error){
	alert('нельзя выполнить операция')
} */

/* import {help} from './script2.js';
let res = help.square(4);
console.log(res); */

/* import _ from 'underscore';

let arr = [1, 2, 3, 4, 5]
let rest = _.first(arr) + _.last(arr);
console.log(rest); */

/* export default {
	'/handler/': function(data) {
		 console.log(data); // выведется в консоль сервера
		return 'form data received';
	}
} */

/* let paramsString = 'a=1&b=2&c=3';
let searchParams = new URLSearchParams(paramsString);
let res = searchParams.toString();
console.log(res); */

/* function make(num,num2,callback){
	setTimeout(function(){
		let arr = [1,2,3,4,5];
		callback(arr[num])+callback(arr[num2]);
	},3000);
}
make(3,4,function(res){
	console.log(res);
}) */

/* function make(callback){
	setTimeout(function(){
		let res = [1,2,3,4,5]
		callback(res)
	},3000)
	}
make(function(res){
	let arr = res.reduce(function(sum, elem){
		return sum + elem},0)
		console.log(arr);
	}) */


/* 	function make(num1,num2,callback){
		setTimeout(function(){
			let arr = [1,2,3,4,5]
			callback(arr[num1],arr[num2])},3000)
		}
make(1,3,function(a,b){
	let result = a+b
	console.log(result);
}) */

/* function loadImage(src,callback){
	setTimeout(function(){
		let image = document.createElement('img');
		image.src = src;
		let err;
		image.addEventListener('load',function(){
			document.body.appendChild(image);
		})
		image.addEventListener('error', function(){
			if(!image.onload){
				err = 'путь неверный'
			} else {
				err = null;
			}
			console.log('error' + err);
			return err
		})
},3000 )}

loadImage('pchela1.jpg', function(image,err){
	if(!err){
		document.body.appendChild(image)
	} else{
		console.log('ошибка '+err);
	}
}) */


/* function loadImage(src,callback){
	setTimeout(function(){
		let image = document.createElement('img');
		image.src = src;
		let err;
		image.addEventListener('load',function(){
			document.body.appendChild(image);
		})
		image.addEventListener('error', function(){
			if(!image.onload){
				err = 'путь неверный'
			} else {
				err = null;
			}
			console.log('error' + err);
			return err
		})
},3000 )}

let arr = ['pchela1.jpg','pchela2.jpg','pchela3.jpg']
for(let img of arr){
loadImage(img, function(image,err){
	if(!err){
		document.body.appendChild(image)
	} else{
		console.log('ошибка '+err);
	}
})
} */


/* let subscribers = {};

function emit(name,data){
	if(subscribers[name]){
		for(let callback of subscribers[name]){
			callback(data)
		}
	}
}

function on(name, callback){
	if(!subscribers[name]){
		subscribers[name]=[];
	}
	subscribers[name].push(callback)
}

on('loaded',function(arr){
	let message = document.querySelector('#message')
	message.textContent = 'данные получены';
	console.log(arr);
} )

on('loaded',function(arr){
	let list = document.querySelector('#list');
	for(let elem of arr){
		let li = document.createElement('li');
		li.textContent = elem;
		list.append(li);
	}
})

on('loaded', function(arr){
	let result = document.querySelector('#result');
	let res = arr.reduce(function(sum,elem){
		return sum+elem},0)
	result.textContent = res;
	})

on('loaded', function(arr){
	let value;
	let amount = document.querySelector('#amount');
	for(let i=0; i<arr.length; i++){
		value = arr[i];
	}
	amount.textContent = value;
})

setTimeout(()=>{
	emit('loaded',[1,2,3,4,5])},3000) */


/* let promise = new Promise(function(resolve){
	setTimeout(function(){
		resolve ('same text')
	}, 5000)
})

promise.then(function(res){
	alert(res);
}) */

/* let promise = new Promise((resolve,reject)=>{
	start()

	function start(){
		let interval = getrandom(0,5)
		setTimeout(()=>{
			if (interval > 0){
				resolve('успешно: ' + interval +'> 0')
			} else{
				reject ('Ошибка: ' + interval + '= 0')
			}
		}, interval * 1000)

	}
})

promise.then(
	result=>{alert(result)},
	error=>{alert(error)}
)


function getrandom(min,max){
	return Math.floor(Math.random()* (max - min + 1) + min)
} */


/* function randomNum(min,max){
	return Math.floor((Math.random()*(max-min + 1))+min)
}
let arr = [];
for(let i = 0; i<10; i++){
	let promises = new Promise(resolve=>{
		let randNum = randomNum(1,10);
		setTimeout(()=>{
			resolve(randNum)
		},randNum*1000)
	})
	arr.push(promises)
}

Promise.race(arr).then(resolve=>{
	console.log(resolve);
})

Promise.all(arr).then(res=>{
	let result = res.reduce((sum,el)=>{
		return sum+el;
	},0)
	console.log(result);
})

console.log(arr); */

/* function loadImage(path){
	return new Promise ((resolve, reject)=>{
		let image = new image();
		image.src = path;

		image.onload =()=> resolve(image);
		image.onerror = ()=> reject(path);
	})
}

let images = ['pchela1.jpg','pchela2.jpg']

Promise.all(images.map(loadImage)).then(images=>{
	for(let image of images){
		document.body.appendChild(image)
	}
}).catch (error => console.log(error)) */


/* let button = document.querySelector(".but");
let div = document.querySelector(".div1");

button.addEventListener('click',()=>{
	fetch("ajax.html").then(response=>{
		return response.text();
	}).then(text => {
		div.innerHTML = text;
	})
}) */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(0,0);
ctx.stroke();
 */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(100,150,);
ctx.lineTo(0,0,);
ctx.closePath();
ctx.fill();
ctx.stroke(); */


/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.strokeRect(50,50,100,75); */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.fillRect(50,50,100,75); */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.rect(20,40,60,60);
ctx.stroke();
ctx.fill(); */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.fillRect(50,50,100,100);
ctx.clearRect(75,75,50,50) */

/* let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function getRadians(degrees){
	return (Math.PI/180)* degrees;
}
ctx.lineWidth = 5;
ctx.arc(100,100,50,0,getRadians(360));
ctx.strokeStyle = 'red'
ctx.stroke();
ctx.fillStyle = 'green'
ctx.fill(); */

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

for(let i=1; i<=10;i++){
	ctx.moveTo(0,15 * i);
	ctx.lineTo(200,15 * i);
}
ctx.stroke();

console.log('123');