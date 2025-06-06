console.log('hello world');
var today = new Date();
console.log(today.getDate()); //4
console.log(today.getMonth()); //
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds());

// var start = Date.now();
// loop for a long time
// for (var i=0; i<100000; i++) ;
// var end = Date.now();
// var elapsed = end - start; // elapsed time in milliseconds
// console.log(elapsed);
// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s);

var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString);
console.log(objString)

console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X"));

var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase());
//"upppercasestring"
console.log("There are no spaces in the end ".trim());

var a //declares a variable but its undefined
var b = 0;
console.log(b);
console.log(a); //undefined
console.log(a + " " + b)

console.log(true && true);
console.log(true && false)
console.log(false && true)
console.log("Foo" && "Bar")
console.log([] && "dog" && "foo")
console.log(null && "Foo")
console.log("Foo" && NaN)
console.log("foo" && (2 == 2))
console.log(0 && "Foo");
console.log(null || "Food");
console.log({} || "Bar");

function greeting(name) {
    if (name === undefined) {
        name = "joEY"
    }

    name = name && "John";
    console.log(name);
    console.log("Hello " + name);
}
greeting("Johnson"); // alerts "Hi Johnson";
greeting();

function isAllowedToDrive(age) {
    if (age > 21) {
        return true;
    } else {
        return false;
    }
}
console.log(isAllowedToDrive(22));
sayDay(1) //Sunday
sayDay(3)
function sayDay(day) {
    switch (day) {
        case 1: console.log("Sunday");
            break;
        case 2: console.log("Monday");
            break;
        default:
            console.log("We live in a binary world. Go to Pluto");
    }
}

// c = add(1, 2);
// function add(a, b) {
//     return a + b;
// }
// console.log(c)


// const add = function (a, b) {
//     return a + b;
// }
// c = add(1, 2);
// console.log(c)
// const add = (a, b) => a + b
// c = add(2, 2);
// console.log(c)



// const obj = {
//     "full name": "mike",
//     address: ['address1', "address2"],
//     phone: {
//         phone1: "9999",
//         phone2: "8888",
//     },
//     zip: function zip() {
//         return '1456'
//     },
//     age: 18
// }

// console.log(obj.zip(), obj["full name"], obj.age, obj.phone.phone2)

// var colors = ['red', 'green', 'blue', 'white'];
// colors.forEach(color => console.log(color));

// var founders = new Map();
// founders.set("facebook", "mark");
// founders.set("google", "larry");
// console.log(founders.size); // 2
// console.log(founders.get("twitter")); // undefined
// console.log(founders.has("google")); // false
// for (var [key, value] of founders) {
//     console.log(key + " founded by " + value);
// }

// var author = {
//     firstname: "Douglas",
//     lastname: "Crockford",
//     book: {
//         title: "JavaScript- The Good Parts",
//         pages: "172"
//     }
// };
// console.log(author['firstname']); //Douglas
// console.log(author.lastname); //Crockford
// console.log(author.book.title);

// var mySet = new Set();
// mySet.add(1);
// mySet.add("Howdy");
// mySet.add("foo");
// console.log(mySet.has(1)); // true
// mySet.delete("foo");
// console.log(mySet.size); // 2
// for (let item of mySet) console.log(item);

// const array2 = [1, 4, 9, 16];
// const map1 = array2.map(x => x * 2);
// console.log(map1, array2)

// function changeCase(val) {
//     return val.toUpperCase();
// }
// function demofunc(a, passfunction) {
//     console.log(passfunction(() => function add() {
//         //do something
//     }));
// }
// demofunc("smallcase", changeCase);

const validateDataForAge = data => {
    person = data();
    console.log(person.age);
    if (person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
};
const errorHandlerForAge = error => console.log(error);

function parseRequest(data, validateData, errorHandler) {
    var error = validateData(data);
    if (!error) {
        console.log("no errors");
    } else {
        errorHandler('error input age');
    }
}
const generateDataForScientist = () => {
    return {
        name: "Albert Einstein",
        age: Math.floor(Math.random() * (100 - 1)) + 1,
    };
};
const generateDataForComposer = () => {
    return {
        name: "J S Bach",
        age: 101,
    };
};
parseRequest(generateDataForScientist, validateDataForAge,
    errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge,
    errorHandlerForAge);

var santa = {
    say: function () {
        console.log("ho ho ho");
    }
}
santa.say();