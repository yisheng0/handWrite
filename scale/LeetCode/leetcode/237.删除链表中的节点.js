 
  // 定义一个函数来删除给定的节点
  function deleteNode(node) {
    // 如果节点为空，直接返回
    if (node == null) {
      return;
    }
    // 如果节点的下一个节点不为空，将下一个节点的值复制到当前节点，并将当前节点的下一个指针指向下下一个节点
    if (node.next != null) {
      node.val = node.next.val;
      node.next = node.next.next;
    }
    // 否则，说明节点是链表中的最后一个节点，无法删除，抛出异常
    else {
      throw new Error("Cannot delete the last node of the list");
    }
  }
  