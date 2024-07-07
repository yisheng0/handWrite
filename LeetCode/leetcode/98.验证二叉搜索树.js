
  function isValidBST(root) {
    // 如果根节点为空，那么返回true
    if (root == null) {
      return true;
    }
    // 定义一个变量prev来存储前一个节点的值，初始为null
    let prev = null;
    // 定义一个栈来存储节点，初始为空
    let stack = [];
    // 使用中序遍历的非递归方式来遍历二叉树
    while (root || stack.length > 0) {
      // 先访问左子树，把所有左子节点入栈
      while (root) {
        stack.push(root);
        root = root.left;
      }
      // 然后访问根节点，把栈顶元素出栈
      root = stack.pop();
      // 如果prev不为空，并且当前节点的值小于等于prev的值，那么返回false
      if (prev && root.val <= prev.val) {
        return false;
      }
      // 否则，更新prev为当前节点的值
      prev = root;
      // 最后访问右子树，把右子节点作为新的根节点
      root = root.right;
    }
    // 如果遍历完毕没有返回false，那么返回true
    return true;
  }
  