const nums1 = [1,2,3]
const nums2 = [4,5,6]
//const nums = nums1.concat(nums2)
const nums = [...nums1, 'lucas', ...nums2, ...[7,8,9]]
console.log(nums)