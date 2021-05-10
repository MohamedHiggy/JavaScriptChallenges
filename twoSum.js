/**
 *  Given an array of integers nums and an integer target, 
 *  return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, 
 *  and you may not use the same element twice.
 *  You can return the answer in any order.
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 */

function twoSum(nums, target) {
    let newObj = {}
    for (let index = 0; index < nums.length; index++) {
        if (newObj[nums[index]] >= 0) {
            return [newObj[nums[index]], index]
        }
        newObj[target - nums[index]] = index
    }
}

console.log(twoSum([2, 7, 11, 15], 9));