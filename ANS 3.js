/* 3. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
*/

let ages=[19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

ages.sort();
console.log(ages);

console.log(`Max age:${Math.max(...ages)} and Min age:${Math.min(...ages)}`);

// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
// Max age:26 and Min age:19

/* Find the average age(all items divided by number of items) */
const avg=ages.reduce((acc,current)=> acc+current,0)/ages.length;
console.log(`average age ${avg}`);

//average age 22.8

/* Compare the value of (min - average) and (max - average), use abs()
method */

const max=Math.max(...ages)+Math.min(...ages)+Math.abs(Math.max(...ages)-Math.min(...ages));
console.log(`Max Avg:${max}`);

const min=Math.max(...ages)+Math.min(...ages)-Math.abs(Math.max(...ages)-Math.min(...ages));
console.log(`Min Avg:${max}`);

/* Max Avg:52
Min Avg:52
 */


