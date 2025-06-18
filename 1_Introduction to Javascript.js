Java Fullstack -- First topic is Javascipt


💬 Question -No:1 :
"Write a JavaScript program that takes a student's marks as input and displays the corresponding grade based on the following criteria:"
Marks 90 and above → Grade A
Marks 80 to 89 → Grade B
Marks 70 to 79 → Grade C
Marks 60 to 69 → Grade D
Marks below 60 → Grade E


✅ JavaScript Code:
function getGrade(mark) {
        if (mark >= 90) return 'A';
        if (mark >= 80) return 'B';
        if (mark >= 70) return 'C';
        if (mark >= 60) return 'D';
        return 'E';
      }
      function getMarks() {
        const input = prompt("Enter your marks:");
        const marks = Number(input);
        if (isNaN(marks) || marks < 0 || marks > 100) {
          document.getElementById("result").innerHTML = "Please enter a valid number between 0 and 100.";
        }
      }





💬 Question -No:2 :
"Write a JavaScript program to calculate the sum of even and odd numbers in an array. Depending on which sum is greater, sort the array accordingly:"
If the sum of even numbers is greater, sort the array in ascending order.
If the sum of odd numbers is greater, sort the array in descending order.
Finally, display the even sum, odd sum, and the sorted array.

✅ JavaScript Code:
let numbers = [5, 2, 8, 3, 7, 4];
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i]; 
  } else {
    oddSum += numbers[i]; 
  }
}

if (evenSum > oddSum) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log("Even sum is greater. Array sorted in ascending order.");
} else {
  numbers.sort(function(a, b) {
    return b - a;
  });
  console.log("Odd sum is greater. Array sorted in descending order.");
}
console.log("Even sum:", evenSum);
console.log("Odd sum:", oddSum);
console.log("Final array:", numbers);







💬 Question -No:3 :
Given a n×n matrix, add the elements in the shape of the letter "I", where:
All elements from the first row
The middle element of the second row
All elements from the last row are selected.

Tasks:
Find the sum of the selected elements.
Find the greatest number among the selected elements.



✅ JavaScript Code:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum = 0;
let max = matrix[0][0]; 
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (
      (i === 0) ||                
      (i === 1 && j === 1) ||     
      (i === 2)                 
    ) {
      let value = matrix[i][j];
      sum += value;

      if (value > max) {
        max = value;
      }
    }
  }
}
console.log("Selected Elements Sum:", sum);
console.log("Greatest Number among selected:", max);

