/***********************
 BASIC JAVASCRIPT ASSESSMENT
 Run using: node filename.js
************************/

/* =========================
   SECTION 1 — Variables
========================= */

let myName = "Roshin";
let myAge = 21;
let isStudent = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("Swapped a:", a);
console.log("Swapped b:", b);

let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x);

const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);


/* =========================
   SECTION 2 — Operators
========================= */

let num1 = 12;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log(5 + "5");
console.log(5 - "2");
console.log(true + 1);

let number = 100;

if (number > 100) {
    console.log("Greater than 100");
} else if (number === 100) {
    console.log("Equal to 100");
} else {
    console.log("Less than 100");
}

console.log(5 == "5");
console.log(5 === "5");

let ageCheck = 25;

if (ageCheck >= 18 && ageCheck <= 60) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


/* =========================
   SECTION 3 — Control Statements
========================= */

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
} else if (n % 3 === 0) {
    console.log("Fizz");
} else if (n % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(n);
}

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}

console.log("Sum from 1 to", N, ":", sum);

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}


/* =========================
   SECTION 4 — Functions
========================= */

function add(num1, num2) {
    return num1 + num2;
}

console.log("Addition:", add(5, 7));

const addArrow = (num1, num2) => {
    return num1 + num2;
};

console.log("Arrow Addition:", addArrow(10, 5));

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log("Is 7 Prime?", isPrime(7));

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reversed:", reverseString("hello"));

function test() {
    return;
    console.log("Hello");
}

test();

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log("Largest:", findLargest([10, 25, 8, 40, 15]));


/* =========================
   SECTION 5 — Integrated Challenge
========================= */

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

let studentMarks = 82;
let studentGrade = calculateGrade(studentMarks);

console.log("Student Marks:", studentMarks);
console.log("Student Grade:", studentGrade);
