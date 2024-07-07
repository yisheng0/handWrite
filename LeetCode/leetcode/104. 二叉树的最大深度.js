function maxDepth(root) {
    if (root === null) {
      return 0;
    }
    let max = 0;
    const stack = [root];
    while (stack.length > 0) {
      const levelSize = stack.length;
      max++; // 每一层开始时将最大深度加一
      for (let i = 0; i < levelSize; i++) {
        const node = stack.shift(); // 使用 shift 方法来弹出节点
        if (node.left !== null) {
          stack.push(node.left);
        }
        if (node.right !== null) {
          stack.push(node.right);
        }
      }
    }
  
    return max;
  }
  