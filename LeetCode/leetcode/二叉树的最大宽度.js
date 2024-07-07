function maxDepth(root){
   if(root==null){
    return 0;
   }
   let left_depth = maxDepth(root.left)
   let right_depth = maxDepth(root.right)
   return Math.max(left_depth, right_depth) + 1
}

// function maxDepth(root) {
//     // 如果根节点为空，返回0
//     if (root == null) {
//       return 0;
//     }
//     // 否则，返回左子树和右子树中较大的那个的最大深度加1
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
//   }

//广度遍历
function maxDepth(root) {  
   if (root === null) {  
     return 0;  
   }  
   let depth = 0;  
   const stack = [root];  
   while (stack.length > 0) {  
     const levelSize = stack.length;  
     for (let i = 0; i < levelSize; i++) {  
       const node = stack.pop();  
       if (node.left !== null) {  
         stack.push(node.left);  
       }  
       if (node.right !== null) {  
         stack.push(node.right);  
       }  
     }  
     depth++;  
   }  
   return depth;  
 }
 //深度   
 function maxDepth(root) {  
  if (root === null) {  
    return 0;  
  }  
  let max = 0;  
  const stack = [root];  
  while (stack.length > 0) {  
    const levelSize = stack.length;  
    let currentMax = 0;  
    for (let i = 0; i < levelSize; i++) {  
      const node = stack.pop();  
      currentMax++;  
      if (node.left !== null) {  
        stack.push(node.left);  
      }  
      if (node.right !== null) {  
        stack.push(node.right);  
      }  
    }  
    max = Math.max(max, currentMax);  
  }  
  
  return max;  
}