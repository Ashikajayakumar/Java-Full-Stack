🧼 JavaScript Garbage Collection & Object Concepts
This document covers how JavaScript manages memory, how objects interact, and how constructors and methods work under the hood.

🗑️ Garbage Collection
✅ What Is It?
JavaScript uses automatic garbage collection to free memory when objects are no longer reachable.

🔍 When Does It Happen?
When no references to an object remain (i.e., it’s unreachable), the garbage collector removes it from memory.

🌳 Reachability in Memory
JavaScript uses a reachability tree to determine if data should remain in memory.

🧠 Roots – Starting Points:
Local variables in currently running functions
Other functions on the call stack

Global variables
Anything reachable from the roots is kept in memory.

💡 Example:

let user = {
  name: "Alice",
  pet: {
    type: "cat",
    name: "Whiskers"
  }
};



❌ Unreachable Example:

let person = { name: "Bob" };
person = null; // Original object is now unreachable
Garbage collector will clean it in the background.

🔗 Interlinked Objects Example

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  };
}
let family = marry(
  { name: "John" },
  { name: "Ann" }
);

delete family.father;
delete family.mother.husband;
Even though the objects are interlinked, if nothing is referencing them from the root, GC will clean them.



🧰 Object Methods
🧪 Adding Methods

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!



🧍 “this” in Methods

let user = {
  name: "John",
  sayHi() {
    alert(this.name);
  }
};

user.sayHi(); // John
this refers to the object before the dot.



⚠️ Arrow Functions Have No this

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
Arrow functions inherit this from the outer (parent) scope.



🏗️ Constructor Functions & new Operator
🛠 Constructor Function

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
alert(user.name);      // Jack
alert(user.isAdmin);   // false
Named with Capital Letter

Used with new keyword

Automatically returns this if no explicit return is used




🔁 Return Behavior in Constructors

function BigUser() {
  this.name = "John";
  return { name: "Godzilla" }; // returns this object
}

alert(new BigUser().name); // Godzilla
📝 Rule:
If you return an object, it replaces this.
If you return a primitive, it’s ignored.
