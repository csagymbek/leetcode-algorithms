// 4. Median of Two Sorted Arrays
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.
function findMedianSortedArrays(nums1, nums2){
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  if(nums3.length % 2 === 1){
    return nums3[Math.floor(nums3.length / 2.0)];
  } else{
    return (nums3[(nums3.length / 2) - 1] + nums3[nums3.length / 2]) / 2.0;
  }
}
console.log(findMedianSortedArrays([1, 3], [2]));//2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));//2.5
