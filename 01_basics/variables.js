const accountId =144553
let accountEmail ="kam@google.com"
var accountPassword = "12345"
accountCity = "Vapi"
let accountState

/*
 var--> declares a variable. It has a function scoped or global scoped variable.
        variables can be redeclared and updated.
        a global scope variable.
 let--> introduce block scope variables. It commonly used for variable that may change their value.
        variablecannot be redeclared but can be updated.
        a block scope variable.
 const-->variable cannot be redeclared or updated.
         a block scope variable.
 */
// accountId = 2 // not allowed

accountEmail ="taush@google.com"
accountPassword = "666"
accountCity = "Valsad"

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);