let a = 10;
let b = 6;

// basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);


// urinary operator
console.log(a++);
console.log(a);
console.log(++a);

console.log(a--);
console.log(a);
console.log(--a);

// comparison operators
let c = "10";
console.log(a < b);
console.log(a > b);

// in computer languages, the double equal sign is used in place of the usual equal sign.
// since java script is a dynamic language, it only checks the value inrespective of the data type  
console.log(a == c);

// the tripple equal sign checks the value and also the data type
console.log(a === c);


// control flow
let score = 49;

if (score >= 80){
    console.log("You had A")
  }  else if (score >= 75 ){
        console.log("You had B+")
} else if (score >= 70){
    console.log("You had B")
} else if (score >= 65){
    console.log("You had C+")
} else if (score >= 60){
    console.log("You had C")
} else if (score >= 55){
    console.log("You had D+")
} else if (score >= 50){
    console.log("You had D")
}else{
    console.log("You had E")
}

// switch is just like the if statement but the switch compares only two items
const gender = "Male"

switch (gender){
    case "Male":
        console.log("Go to the male washroom");
        break;
        case "Female":
        console.log("Go to the female washroom");
        break;
        default:
        console.log("No washroom for you");
        break;
}

// for loop - for(start;end;increment){code}
for (let i = 5; i < 10; i++){
    console.log(i);
}


// while loop
let i = 1;

while (i < 10) {
    console.log(i);
    i++;
}
