
function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums

  const pivot = nums[Math.floor(nums.length / 2)]
  const left = nums.filter((num) => num < pivot)
  const right = nums.filter((num) => num > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const nums = [1, 5, 32, 21, 65, 13, 67]

console.log(quickSort(nums))
