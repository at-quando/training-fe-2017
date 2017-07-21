
# FE HOMEWORK

@(FE)[ July 18th 2017 | Do Hong Quan | Day 1 ]


----------

[TOC]


-------------
## TYPESCRIPT
### What is TypeScript and Why do we need it?
**1. What is TypeScript?**
- TypeScript is a free and open-source programming language developed and maintained by Microsoft.
- TypeScript is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

**2. Why do we need it?**
- JavaScript is the only client side language universally supported by all browsers. However JS isn't the best designed language. 
- It’s not a **class-based object-oriented language**, doesn’t support **class based inheritance**, unreliable dynamic typing and lacks in compile time error checking. And TypeScript addresses all these problems. 
- It is an attempt to “fix” JavaScript problems. 
- It is a free and open source programming language. 
- It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. 
- It is quite easy to learn and use for developers familiar with C#,  Java and all strong typed languages. 
     
### How can you get TypeScript and install it?
First, we have to install HomeBrew by the following command:
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
Then, install TS with the command below:
`brew install node`
`npm install -g typescript`

###How do you compile TypeScript files?
Use terminal:
- open the folder which contain your TypeScript files by `cd` command.
- type `tsc namets.ts` inwhich "namets" is the name of your TypeScript.
- the compiler will convert ts files to js files.

###Which Object Oriented terms are supported by TypeScript? Write an example.
TS support many OO terms:
- Modules
- Classes
- Interfaces
- Data Types
- Member functions
- Ex:
```
class Animal {
    public domestic:boolean;
    constructor(public name: string) { }
}
```

###How do you implement inheritance in TypeScript? Write an example.

Inheritance means that a subclass or derived class implicitly contains all non-overridden member of the base class. Ex: 
```
class Cat extends Animal {
    constructor(name: string, domestic: boolean) 
    { 
      super(name); 
      this.domestic = true;
    }
}
```
using super() to call the base class constructor.  So we are passing name up into our base class to update the _name field in base class. One more thing to note here is that you cannot call a super() method if you haven't extended your class from any base class.

##ES6

###Block scope variable
```
var five = 5;
var threeAlso = three; //error

function scope1(){
	var three = 3;
	var fiveAlso = five; // == 5
	var sevenAlso = seven; // error
}

function scope2(){
	var seven = 7;
	var fiveAlso = five; // == 5
	var threeAlso = three; // error
}
```
As we can see, *fiveAlso* in the function can access the value of *five* outside . 
However, *threeAlso* in the scope2() can not access to the value of *three* in the scope1().
###Multi-line strings
By the normal way,  we use "+"  in order to concat some strings continuously.
``` 
const insert = 'dog';
const str = 'a really long ' + insert + ' can be a great asset for ' + insert + ' when it is a ' + dog;
```
However, in ES6, we can put our string between two apostrophes \`\` replaced for "+":
```
const insert = 'dog';
const str = `a really long ${insert} can be a great asset for\
  ${insert} when it is a ${insert}`;
```
###Template Literals
Syntax:
`string ${someExpression} more string`

Ex:
```
console.log(`hello`);
// hello
 
var name = "Joan";
console.log(`hello ${name}`);
// hello Joan
```
###Arrow functions
Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.
```
//SHORTER FUNCTIONS
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.map(function(material) { 
  return material.length; 
}); // [8, 6, 7, 9]

//Apply Arrow function below:
materials.map(material => material.length); // [8, 6, 7, 9]
```
Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.
``` 
function Person() {
  this.age = 0;
  setInterval(function growUp() {
    this.age++;
  }, 1000);
}
var p = new Person();
```
=>
``` 
function Person(){
  this.age = 0;
  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}
var p = new Person();
``` 
###For...of
for-of is for iterating over arrays and for-in is for iterating over the keys of objects.
**Why for-of, not for-in?**
One of the primary objectives for the TC39 committee when coming up with new ECMAScript features is maintaining backwards compatibility. There are trillions of lines of JavaScript code out there in the Wild Wild Web, and new versions of JavaScript cannot break that code.

There are probably thousands (if not millions) of lines of JavaScript code that are intentionally or unintentionally relying on the brokenness of how for-in works with arrays. Fixing for-in to work how for-of now works would have the side effect of breaking all of that code. So unfortunately we need a new operator.
```
let list = [8, 3, 11, 9, 6];
 
for (let value of list) {
  console.log(value);
}
```
###Default parameters
```
// Basic syntax
function multiply (a, b = 2) {
  return a * b;
}
multiply(5); // 10

// Default parameters are also available to later default parameters
function foo (num = 1, multi = multiply(num)) {
  return [num, multi];
}
foo(); // [1, 2]
foo(6); // [6, 12]
```

