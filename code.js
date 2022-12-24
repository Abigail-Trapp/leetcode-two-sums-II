var twoSum = function(numbers, target) {
    let left = 0 // set up left to be first index in array at index 0
    let right = numbers.length-1  // set up right to be final index in array
    while(left < right){     // do the following so long as the left number is smaller than the right since array is in non-decremeanting order.
       let added = numbers[left] + numbers[right]  /// assuming the target should be the left and right numbers added together.
       if(added === target){  // if the left and right numbers added together DO equal the target...
           return [left + 1, right + 1]  // return array of indexes of the two numbers plus one each
       } if(added > target){  // if the left and right added together are larger than the target ...
           right --  // move down right
       } else {      // if the left and right added together are smaller than the target
           left ++  // move down left
       }
} 
    
};
console.log(twoSum([2,7,11,15],9))