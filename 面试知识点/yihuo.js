// function only(nums){
// for(var i=0; i<nums.length; i++){
//  nums[0] ^= nums[i]; 
// }
// return nums[0];
// }

// let arr = [1,1,3,3,5,5,2,4,4,2,19]
// let a = only(arr)
// console.log(a)
function only(nums){
    for(var i=1; i<nums.length; i++){
      nums[0] ^= nums[i]; 
    }
    return nums[0];
  }
  
  let arr = [1,1,3,3,5,5,2,4,4,2,19]
  let a = only(arr)
  console.log(a) 
  