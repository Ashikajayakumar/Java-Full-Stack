🔢 JavaScript Arrays – Concepts & Key Methods

✅ What is an Array?
* Arrays are ordered collections of values.
* Elements are indexed starting from 0.
* Can store multiple values in a single variable.

🏗️ Array Declaration & Initialization

let arr = new Array();    // using constructor
let arr = [];             // using square brackets (common)
let fruits = ["Apple", "Orange", "Plum"];

🔍 Accessing Elements
alert(fruits[0]);  // Apple
alert(fruits[1]);  // Orange
alert(fruits[2]);  // Plum


📏 Array Length
alert(fruits.length);  // 3


🔚 Accessing Last Element

alert(fruits[fruits.length - 1]); // Plum
alert(fruits.at(-1));             // Plum (modern & cleaner)


🛠️ Array Methods

🧹 pop() – Remove Last

let fruits = ["Apple", "Orange", "Pear"];
fruits.pop();  // returns "Pear"

➕ push() – Add Last
fruits.push("Pear");  // ["Apple", "Orange", "Pear"]


🧹 shift() – Remove First
fruits.shift();  // returns "Apple"

➕ unshift() – Add First
fruits.unshift("Apple");  // ["Apple", "Orange", "Pear"]


🔁 Loops with Arrays:

🔢 for loop (index-based)

for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}


📦 for..of (value-based)

for (let fruit of fruits) {
  alert(fruit);
}


🔑 for..in (key-based – use with caution)

for (let key in arr) {
  alert(arr[key]);
}



✂️ Manipulating Array Size
🔽 Truncate Array
let arr = [1, 2, 3, 4, 5];
arr.length = 2;  // [1, 2]


🔼 Expand Array
arr.length = 5;  // [1, 2, <3 empty items>]

🧪 Special Constructor Use
let arr = new Array(2);
alert(arr[0]);      // undefined
alert(arr.length);  // 2 (but empty slots)



✂️ Modifying Elements
❌ delete keyword (Not Recommended)
delete arr[1];  // leaves an empty slot


✂️ splice() – Add/Remove Elements
arr.splice(1, 1);  // removes 1 item at index 1


🧬 Copying Arrays
🔍 slice(start, end)
arr.slice(1, 3);   // copies elements from 1 to 2
arr.slice(-2);     // last 2 elements


➕ concat() – Merge Arrays
arr.concat([3, 4]);  // returns new combined array



🔎 Searching in Arrays
indexOf() / lastIndexOf()
arr.indexOf(0);             // 1
fruits.lastIndexOf("Apple"); // 2



🔄 Transforming Arrays
🔁 map() – Transform Each Element
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// [5, 7, 6]



🧮 Sorting Arrays
🧩 sort() – Sort in Place
let arr = [1, 2, 15];
arr.sort();  // sorts as strings => [1, 15, 2]


📝 For numeric sort, use:
arr.sort((a, b) => a - b);
