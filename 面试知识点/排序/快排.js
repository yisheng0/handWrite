function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 示例用法
const unsortedArray = [5, 2, 9, 3, 5, 8, 7, 1];
const sortedArray = quickSort(unsortedArray);

console.log("原始数组:", unsortedArray);
console.log("排序后数组:", sortedArray);


  // // 选择一个随机索引作为pivot的索引
  // const randomIndex = Math.floor(Math.random() * arr.length);
  // const pivot = arr[randomIndex];

  // // 将pivot移到数组首位，便于处理left和right子数组
  // [arr[0], arr[randomIndex]] = [arr[randomIndex], arr[0]];