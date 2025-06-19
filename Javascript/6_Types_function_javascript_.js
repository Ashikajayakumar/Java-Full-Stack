🔧 Functions in JavaScript
Functions are reusable blocks of code designed to perform a particular task.

✅ Why Use Functions?
♻️ Reusability – Avoid rewriting the same logic.
🧩 Modularity – Break complex problems into smaller parts.
🕵️‍♂️ Abstraction – Hide internal logic from the user.
🔁 Recursion – Call themselves for repetitive tasks.


🧠 Types of Functions

1️⃣ Function Expression
➡️ Functions assigned to variables.
✅ Can be anonymous (no name).

const mul = function(x, y) {
    return x * y;
};
console.log(mul(4, 5)); // Output: 20
🟡 Note: Not hoisted like function declarations.




2️⃣ Arrow Function
➡️ Short and concise syntax.
🚫 No own this, arguments, or super.


let add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
✅ Best for: Callbacks, inline functions.




3️⃣ Immediately Invoked Function Expression (IIFE)
➡️ Executes right after it is defined.
✅ Used to: Create isolated scope (avoid global pollution).


(function () {
    console.log("This runs immediately!");
})();



4️⃣ Callback Function
➡️ A function passed as an argument to another function.
✅ Executes after the main function finishes.


function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double)); // Output: 10
🟡 Used in: Event listeners, async operations.




5️⃣ Anonymous Function
➡️ Function without a name.
✅ Mostly used as inline arguments.


setTimeout(function () {
    console.log("Anonymous function executed!");
}, 1000);



6️⃣ Nested Functions
➡️ Function inside another function.
✅ Inner function has access to outer function’s scope.

function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5)); // Output: 15

7️⃣ Generator Function
➡️ Special function that can pause and resume.
✅ Uses function* syntax and yield.


function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
let it = gen();
console.log(it.next().value); // Output: 1
console.log(it.next().value); // Output: 2
🟢 Used for: Iteration, lazy evaluation, async control.




💼  Advanced Function 
🔍 Q: Write a function createCounter that returns an object with the following properties:

increment: Increases the internal count by 1.
decrement: Decreases the internal count by 1.
reset: Resets the count to 0.
set: Sets the count to a given number.
get: Returns the current count.
[Symbol.iterator]: Returns a generator that yields the next count value every time it is called.

Use IIFE, closures, arrow functions, and a generator function inside the implementation.



✅ Expected Output Example

const counter = createCounter();

console.log(counter.get());       // 0
counter.increment();
counter.increment();
console.log(counter.get());       // 2
counter.decrement();
console.log(counter.get());       // 1
counter.set(10);
console.log(counter.get());       // 10
counter.reset();
console.log(counter.get());       // 0

const iterator = counter[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2





✅ Full Solution:

const createCounter = (function () {
    return function () {
        let count = 0;

        // Generator Function for iteration
        function* counterGenerator() {
            while (true) {
                yield ++count;
            }
        }

        return {
            increment: () => count++,
            decrement: () => count--,
            reset: () => { count = 0 },
            set: (val) => { count = val },
            get: () => count,
            [Symbol.iterator]: function () {
                return counterGenerator();
            }
        };
    };
})();
