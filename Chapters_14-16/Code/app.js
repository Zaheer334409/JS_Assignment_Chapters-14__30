// console.log("Hello World");

// 01_Question
// __________________________________

// let studentNames1 = [];
// let studentNames2 = new Array();
// let stringsArray = ["Ali", "Mubeen", "Bilal", "Ammad"];
// let numbersArray = [10, 20, 30, 40, 50];
// let booleanArray = [true, false, true, false];
// let mixedArray = ["Zaheer", 25, true, "Web Developer", 99];
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualifications in Pakistan:</h2>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


// 08_Question
// __________________________________

// let students = ["Ali", "Mubeen", "Zaheer"];
// let scores = [320, 450, 380];
// let totalMarks = 500;

// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write(
//         "Score of " + students[i] + " is " + scores[i] +
//         ". Percentage: " + percentage.toFixed(2) + "%<br>"
//     );
// }

// 09_Question
// ____________________________________

// Initialize array with color names

// let colors = ["Red", "Green", "Blue"];
// console.log(colors);


// a) Add color at beginning

// let colorAtBeginning = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorAtBeginning);
// console.log(colors);


// b) Add color at end

// let colorAtEnd = prompt("Enter a color to add at the end:");
// colors.push(colorAtEnd);
// console.log(colors);


// c) Add two more colors at beginning

// colors.unshift("Yellow", "Orange");
// console.log(colors);


// d) Delete first color

// colors.shift();
// console.log(colors);


// e) Delete last color

// colors.pop();
// console.log(colors);


// f) Add color at specific index

// let indexToAdd = +prompt("Enter index where you want to add a color:");
// let colorName = prompt("Enter color name:");
// colors.splice(indexToAdd, 0, colorName); 

// g) Delete colors from specific index

// let indexToDelete = +prompt("Enter index from where you want to delete color(s):");
// let numberOfColors = +prompt("How many colors do you want to delete?");
// colors.splice(indexToDelete, numberOfColors);
// console.log(numberOfColors + indexToDelete + colors);

// 10_Question
// ____________________________________

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// let selectcites = cities.slice(2,4);

// console.log(selectcites);

// 11_Question
// ____________________________________

// const myArr = ["This","is","assignment","Work"];

// const myWork = myArr.join(" ");

// console.log(myWork);

// 12_Question
// ____________________________________

// let queue = [];

// queue.push("Apple");
// queue.push("Banana");
// queue.push("Mango");
// queue.push("Orange");

// console.log("Queue: ", queue);

// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 

// console.log( queue);



// 13_Question
// ____________________________________
// let queue = [];

// queue.push("Apple");
// queue.push("Banana");
// queue.push("Mango");
// queue.push("Orange");

// console.log("Queue: ", queue);

// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 
// console.log("Out:", queue.shift()); 

// let result = queue.reverse();


// console.log(result);

// Last Question

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");