✅ 1. for Loop (Traditional)
Syntax:

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
✅ Can use break and continue
Good for precise control with indexes
Works with any numeric range






🔁 2. for...in Loop
Syntax:

let user = { name: "John", age: 30 };
for (let key in user) {
  console.log(key, user[key]);
}
Iterates over enumerable property keys
✅ Works best with objects
⚠️ Not suitable for arrays — might cause unexpected behavior due to prototype keys




🔂 3. for...of Loop
Syntax:

let arr = ["a", "b", "c"];
for (let value of arr) {
  console.log(value);
}
Iterates directly over values of iterable objects (Arrays, Strings, Sets, Maps)
✅ Can use break and continue
❌ Cannot be used with objects (unless using Object.entries())



🔄 4. forEach() Method
Syntax:

let arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(index, item);
});

Calls a callback for each array element
❌ Cannot use break or continue (use return to skip)
Clean and readable for array transformations





💡 Question: Deep Traversal using JavaScript Loops
You are given a nested JavaScript object containing strings, arrays, and other objects. Your task is to write a function processData(input) that:

🔧 Requirements:
1. Prints all top-level keys using for...in.
2. If any key’s value is an object

  * Print all its nested keys using for...in.
  * If any value is an array:
      * Print its items using:
      
         * A traditional for loop
         * A forEach loop
         * A for...of loop (just show usage, no need to print again)
         
  * Count the number of string values.
3. If a key contains a string, count it.
4. Finally, output the total number of string values found across the entire object.

🧪 Sample Input:

const input = {
  name: "ProjectX",
  members: ["Alice", "Bob", "Charlie"],
  details: {
    manager: "Dana",
    status: "Active",
    tags: ["urgent", "client", "confidential"]
  }
};





function processData(input) {
  let stringCount = 0;

  console.log("Keys:");
  for (let key in input) {
    console.log(key);

    // Check if the value is a nested object (not an array)
    if (typeof input[key] === 'object' && !Array.isArray(input[key])) {
      console.log("Nested Keys:");
      for (let nestedKey in input[key]) {
        console.log(nestedKey);

        // Count if the nested value is a string
        if (typeof input[key][nestedKey] === 'string') {
          stringCount++;
        }

        // If it's an array inside nested object
        if (Array.isArray(input[key][nestedKey])) {
          console.log("\nArray Values:");
          
          // 1. for loop
          for (let i = 0; i < input[key][nestedKey].length; i++) {
            console.log(input[key][nestedKey][i]);
            if (typeof input[key][nestedKey][i] === 'string') stringCount++;
          }

          // 2. forEach
          input[key][nestedKey].forEach(val => {
            if (typeof val === 'string') stringCount++;
          });

          // 3. for...of (already counted, for demonstration)
          for (let val of input[key][nestedKey]) {
            // no extra operations, already counted
          }
        }
      }
    }

    // If the key value is a direct array
    else if (Array.isArray(input[key])) {
      console.log("\nArray Values:");
      
      // 1. for loop
      for (let i = 0; i < input[key].length; i++) {
        console.log(input[key][i]);
        if (typeof input[key][i] === 'string') stringCount++;
      }

      // 2. forEach
      input[key].forEach(val => {
        if (typeof val === 'string') stringCount++;
      });

      // 3. for...of (demonstration)
      for (let val of input[key]) {
        // no operation
      }
    }

    // If the value is a direct string
    else if (typeof input[key] === 'string') {
      stringCount++;
    }
  }

  console.log(`\nString count: ${stringCount}`);
}

// Sample Input
const input = {
  name: "ProjectX",
  members: ["Alice", "Bob", "Charlie"],
  details: {
    manager: "Dana",
    status: "Active",
    tags: ["urgent", "client", "confidential"]
  }
};

// Run the function
processData(input);
