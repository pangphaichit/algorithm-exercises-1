function singleNumber(nums) {
  let startnumber = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === startnumber) {
      startnumber = nums[i]
    } else if (nums[i] !== startnumber) {
      return nums[i]
    }
  }
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
