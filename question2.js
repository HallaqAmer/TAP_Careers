// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function findSumOfTarget (arr,num) {

    let target=num
    let new_arr=[]
    for(var i=0;i<arr.length;i++) {

        for(var j=0;j<arr.length;j++) {

            if(target-arr[i]==arr[j]) {

                new_arr.push(i)
                break
            }
        }
    }
    return new_arr
}

x= findSumOfTarget([7,0,5,6,6],12)
console.log(x)