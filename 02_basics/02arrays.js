const marvel_heros =["thor ","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)
const all_neww_Heros = [...marvel_heros,...dc_heros]
console.log(all_neww_Heros)
const anotherArray =[1,2,3,4,[7,8],10,11,[12,13,[9,10]]]
const singleArray = anotherArray.flat(Infinity)
console.log(singleArray)