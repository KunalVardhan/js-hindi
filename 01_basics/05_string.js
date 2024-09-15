const name = "kunal"
const repocount=250

// console.log  (name + repocount+"value");

console.log(`hello my name is ${name} and my repocount is ${repocount}` );
const gmaeName =new String('kunalvardhan')

// console.log(gmaeName[5]);
// console.log(gmaeName._p);

// console.log(gmaeName.length)
// console.log(gmaeName.toLocaleUpperCase());
// console.log(gmaeName.charAt(8));
// console.log(gmaeName.indexOf('h'));


const newString = gmaeName.substring(0,5)
console.log(newString);

const anotherString= gmaeName.slice(-6,2)
console.log(anotherString);

const newStringOne = "      kunal     "
console.log(newStringOne)
console.log(newString.trim())


const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20' ,'-'));
console.log(url.includes('hitesh'));



