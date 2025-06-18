🧠 JavaScript Objects – Key Concepts & Usage
JavaScript objects are a powerful way to group data and functions under a single name. They are used to store keyed collections and complex entities.

🧱 Creating Objects
* objects are used to store keyed collections of various data and more complex entities

let user = {
  name: "John",  // key: "name", value: "John"
  age: 30        // key: "age", value: 30
};
Objects use {} to define collections of key-value pairs.
Keys are strings, values can be of any type.



🔲 Square Bracket Notation

let user = {};
user["likes birds"] = true;
alert(user["likes birds"]); // true
delete user["likes birds"]; // remove property


✅ Use square brackets for:
Dynamic property names
Properties with spaces or special characters

✨ Property Value Shorthand
function makeUser(name, age) {
  return {
    name,  // shorthand for name: name
    age    // shorthand for age: age
  };
}


✅ Cleaner and more concise object creation.

🔎 "in" Operator

let user = { name: "John", age: 30 };
alert("age" in user);    // true
alert("blabla" in user); // false

✅ Checks whether a property exists in an object.

🔁 for...in Loop

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  alert(key);        // name, age, isAdmin
  alert(user[key]);  // John, 30, true
}


✅ Used to iterate over all enumerable properties.

🔢 Object Keys Are Ordered (as Strings)

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "UK",
  "1": "USA"
};

for (let code in codes) {
  alert(code); // order: 1, 41, 44, 49 (sorted numerically as strings)
}


⚠️ Keys that look like numbers are automatically sorted.

🔗 Object References

let user = { name: "John" };
let admin = user;
admin.name = "Pete";

alert(user.name); // Pete


🧠 Objects are assigned by reference, not copied.

🪞 Cloning Objects (Shallow Copy)
let user = {
  name: "John",
  age: 30
};

let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete";
alert(user.name); // John (original not changed)



⚙️ Object.assign() – Merge/Clone
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
alert(user); // { name: "John", canView: true, canEdit: true }


✅ Used for:
Merging multiple objects into one Shallow cloning

🧬 Nested Objects & Cloning Pitfall
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = Object.assign({}, user);
user.sizes.width = 60;
alert(clone.sizes.width); // 60 ❌ still refers to original object



⚠️ Object.assign() does not deep clone nested objects.

✅ Deep Cloning with structuredClone()

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);
alert(user.sizes === clone.sizes); // false
user.sizes.width = 60;
alert(clone.sizes.width); // 50 ✅ unaffected
🟢 Safely clones deep objects, including all nested references.
