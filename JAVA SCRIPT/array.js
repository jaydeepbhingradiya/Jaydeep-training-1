let lang = ["gujrati", "hindi", "english", "tamil", "telugu", "maliyalam"];
let state = ["gurat", "UP", "MP", "kerala"];

// console.log(lang[1]);

// lang.pop();

// lang.push("panjabi");
// console.log(lang);

// console.log(lang.toString());

// console.log(lang.join("_"));

// lang.shift();

// lang.unshift("urdu");

// lang[0] = "kathiyawadi";

// lang[lang.length] = "bangali";

// delete lang[2];
// console.log(lang[2]);

// lang.splice(3, 0, "kathiyawadi", "marathi");

// let arr = lang.concat(state, "panjab", "J&K");
// console.log(arr);

// let newLang = lang.slice(1, 5);

// lang.sort();
// console.log(lang);

// lang.reverse();
// console.log(lang);

let num = [2, 5, 100, 4, 200, 22];
// console.log(num);
// num.sort();
// console.log(num);
// num.sort((a, b) => {
//     return a + b;
// });
// console.log(num);

// console.log(lang);

// num.forEach((i) => {
//     console.log(i);
// });

// let newNum = num.map(function mul(index) {
//     return index * 2;
// });
// console.log(newNum);
console.log(num);

// let newNum1 = num.filter(function gret(value) {
//     return value > 5;
// });
// console.log(newNum1);

// let sum = num.reduceRight((total, value) => {
//     return total + value;
// }, -33);
// console.log(sum);

// let test = num.every((value) => {
//     return value < 200;
// });
// console.log(test);

// let test = num.some((value) => {
//     return value < 200;
// });
// console.log(test);

let test = num.find((value) => {
    return value < 200;
});
console.log(test);