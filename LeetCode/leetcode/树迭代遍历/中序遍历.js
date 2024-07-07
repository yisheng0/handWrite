function inorderTraversal(root) {  
  const result = [];  
  const stack = [];  

  
  while (root !== null || stack.length > 0) {  
    while (root !== null) {  
      stack.push(root);  
      root = root.left;  
    }  
  
    root = stack.pop();  
    result.push(root.val);  
    root = root.right;  
  }  
  
  return result;  
}

