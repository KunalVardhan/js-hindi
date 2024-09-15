const mrvl_heros = ["spider_man", "Ironman ", " thor"]
const ind_heros=["shaktiman ", "krish", "natraj"]

mrvl_heros.push(ind_heros)
// console.log(mrvl_heros);
// console.log(mrvl_heros[3][1]);

// const all_hero = mrvl_heros.concat(ind_heros)
// console.log(all_hero)

const all_hero =[...mrvl_heros,...ind_heros]
console.log(all_hero);


const another_array =[1,2,3,[4,5,6],[8,6,5],[2,5,[7,9]]]
const real_array=another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}))//

let s1 =100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));



