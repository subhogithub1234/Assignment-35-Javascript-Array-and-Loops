/* 7. Write a script which generates a random hexadecimal number. */

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

console.log(genRanHex(6));

//ebdda9