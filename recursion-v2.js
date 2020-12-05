const fs = require('fs');
const text = fs.readFileSync(__dirname + '/text', 'utf8');
console.log(text.length)
const printFirstChar = (someString) => {
    if (!someString) return;
    const firstChar = someString[0].toUpperCase();
    printFirstChar(someString.substring(1))
};
const printFirstCharV2 = (someString) => {
    const arrayedSomeString = someString.split('');
    arrayedSomeString.forEach(char => char.toUpperCase());
};
const recursiveStart = new Date();
printFirstChar(text);
const recursiveTime =  new Date() - recursiveStart;
const iterativeStart = new Date();
printFirstCharV2(text);
const iterativeTime =  new Date() - iterativeStart;

console.log('Recursive time taken:', recursiveTime, 'ms');
console.log('Iterative time taken:', iterativeTime, 'ms');
