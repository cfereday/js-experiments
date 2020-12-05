
// this is inefficient we are throwing everything on to the stack - could have memory issues
// tail recursions optimisations (language dependent)
const printFirstChar = (someString) => {
    // we assume it's a string but should guard against it IRL
    if (!someString) return; // the exit case
    const firstChar = someString[0];
    console.log('firstChar :D :D', firstChar); // way for us to see the recursion is working / the body
    // someString.substring(1) // selection of the next thing to recurse over
    printFirstChar(someString.substring(1)) // the is the actual recursion - a fn calling itself
};

// use iterative way of doing this
const printFirstCharV2 = (someString) => {
    const arrayedSomeString = someString.split('');
    arrayedSomeString.forEach(char => console.log(char));
};

const printFirstCharV3 = (str) => {
    [head, ...tail] = str;
    if (!head) {
        return '';
    }
    return head + recurse(tail);
};

printFirstChar('heyy make me do some recursion stuff pls :D :D');
printFirstCharV2('heyy make me do some recursion stuff pls :D :D');
printFirstCharV3('heyy make me do some recursion stuff pls :D :D');


