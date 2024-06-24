let score = "34abc"

// let score = null  // 0
// let score = undefined // NaN
// let score = true // 1
// let score = false // 0
// let score = "kamlesh" //NaN

console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//output:-
// 1 => true
// 0 => false
//"" => false
//"kamlesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) ;
console.log(typeof stringNumber);


// ******************Operations****************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**3);
// console.log(2%3);

let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
