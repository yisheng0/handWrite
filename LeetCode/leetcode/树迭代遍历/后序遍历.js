function preorderTraversal(root) {  
  const result = [];  
  const stack = [root];  
  
  while (stack.length > 0) {  
    const node = stack.pop();  
  
    if (node !== null) {  
      result.push(node.val);  

     if (node.left !== null) {  
        stack.push(node.left);  
      }  

      if (node.right !== null) {  
        stack.push(node.right);  
      }  
  
   
    }  
  }  
  
  return result.reverse();  
}