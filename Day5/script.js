console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

// With one console.log() function
console.log('1\n2\n3\n4\n5\n6\n7\n8\n9\n10')

//Prompt
let result = prompt("Enter your name");
console.log("Hello, ", result);

let num = prompt("What is your favorite number");
num = Number(num);

if(isNaN(num))
{
    num = 10;
}
num = num + 10;
console.log(num);
// Task3

let grade = prompt("What is your grade?");
grade = Number(grade);
if (grade < 70 && Number)
    {console.log("You FAILED, stop playing fortnite and start studying!");}    
else{
    console.log("You Passed! great job!")
}