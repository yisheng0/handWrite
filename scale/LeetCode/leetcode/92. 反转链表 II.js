

function reverseBetween(head, left, right) {
    // 如果链表为空或只有一个节点，直接返回
    if (!head || !head.next) {
      return head;
    }
    // 定义一个虚拟头节点
    let dummy = new ListNode(0, head);
    // 定义一个栈
    let stack = [];
    // 定义一个指针，从虚拟头节点开始遍历
    let p = dummy;
    // 遍历到left位置的前一个节点，记录为pre
    for (let i = 0; i < left - 1; i++) {
      p = p.next;
    }
    let pre = p;
    // 继续遍历，将left到right位置的节点入栈
    for (let i = left; i <= right; i++) {
      p = p.next;
      stack.push(p);
    }
    // 记录right位置的后一个节点为next
    let next = p.next;
    // 出栈，将节点连接到pre后面
    while (stack.length > 0) {
      pre.next = stack.pop();
      pre = pre.next;
    }
    // 将最后一个出栈的节点连接到next
    pre.next = next;
    // 返回虚拟头节点的下一个节点，即反转后的链表头节点
    return dummy.next;
  }


  
  for (let i = l; i <= Math.floor((l + r) / 2); i++) {
    // 将 arr[i] 和 arr[left + right - i] 进行交换
    let temp = stack[i];
    stack[i] = arr[l + r - i];
    stack[l + r - i] = temp;}