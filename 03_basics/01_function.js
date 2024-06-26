
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMYName ------>means refrence
// sayMyName() -------->means execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(5, 6);
// console.log("result:",result);   -------> o/p: undefined

function addTwoNumbers(number1, number2){   //number 1 and number2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//---------------------------IMPORTANT-------------------------------------
function calculateCartPrice(val1, val2, ...num1){         //in function passing multiple values using rest operator which will create an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));