const user = [
    { fName: "jaydeep", lName: "patel", age: 22 },
    { fName: "vasu", lName: "javiya", age: 21 },
    { fName: "tushal", lName: "surani", age: 23 },
    { fName: "mohit", lName: "ahir", age: 24 },
];

console.log(user);

// const output = user
//     .filter((x) => {
//         return x.age <= 22;
//     })
//     .map((x) => x.fName);

// const output = user.reduce((acc, crr) => {
//     if (crr.age >= 22) {
//         acc.push(crr.fName);
//     }
//     return acc;
// }, []);
// console.log(output);

const arr = [27, 43, 54, 45, 76, 97];

const output = arr.keys();
let text = "";
for (let x of output) {
    text += x + "\n";
}

console.log(text);