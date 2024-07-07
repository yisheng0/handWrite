// class ListNode{
//         constructor(val, next){
//             this.val = (val===undefined ? 0 : val)
//             this.next = (next===undefined ? null : next)
//         }
//      }
  function removeNthFromEnd(head, n) {
    // 如果链表为空或者 n 为 0，直接返回
    if (head == null || n == 0) {
      return head;
    }
    // 定义一个虚拟头节点，指向原始头节点
    let dummy = new ListNode(0, head);
    // 定义两个指针，初始都指向虚拟头节点
    let fast = dummy;
    let slow = dummy;
    // 让快指针先走 n 步
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    // 然后让快慢指针同时走，直到快指针到达链表尾部
    while (fast.next != null) {
      fast = fast.next;
      slow = slow.next;
    }
    // 此时，慢指针的下一个节点就是要删除的节点
    // 将慢指针的下一个指针指向下下一个节点，即删除了倒数第 n 个节点
    slow.next = slow.next.next;
    // 返回虚拟头节点的下一个节点，即原始头节点
    return dummy.next;
  }