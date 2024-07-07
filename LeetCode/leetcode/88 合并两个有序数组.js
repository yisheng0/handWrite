let A = [1, 3, 5, 7, 9];
let B = [2, 4, 6];
// function merge(A, m, B, n) {
//     let res = [];
//     let i = 0;
//     let j = 0;
//     while (i < m || j < n) {
//       if (j >= n || (i < m && A[i] <= B[j])) {
//         res.push(A[i]);
//         i++;
//       } else {
//         res.push(B[j]);
//         j++;
//       }
//     }
//     for (let k = 0; k < res.length; k++) {
//       A[k] = res[k];
//     }
//   }
function merge(A, m, B, n) {
    // 定义两个指针，分别指向两个数组的第一个元素
    let i = m-1;
    let j = n-1;
    let cnt = m+n-1
    // 当两个指针都没有越界时，循环比较两个数组的元素，将较小的元素放入结果数组中，然后移动对应的指针
    while (i >=0 || j >=0) {
      if (j === -1 || (i >= 0 && A[i] >= B[j])) {
        A[cnt] = A[i]
        i--;
      } else {
         A[cnt] = B[j];
        j--;
      }
      cnt--
    }
  }
  merge(A, 5, B, 3);
  console.log(A); 
    