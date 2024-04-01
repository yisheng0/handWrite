// 定义节点类，包含数据和指针
class Node {
    constructor(data) {
      this.data = data; // 数据域
      this.next = null; // 指针域
    }
  }
  
  // 定义单向链表类，包含头节点和一些操作方法
  class LinkedList {
    constructor() {
      this.head = new Node('head'); // 头节点，用于标识链表的起始位置
    }
  
    // 查找节点，根据给定的数据，返回对应的节点，如果不存在，返回 null
    find(data) {
      let currentNode = this.head; // 从头节点开始遍历
      while (currentNode !== null && currentNode.data !== data) { // 如果当前节点不为空，且数据不匹配
        currentNode = currentNode.next; // 将当前节点移动到下一个节点
      }
      return currentNode; // 返回当前节点，如果找到，返回对应的节点，如果没找到，返回 null
    }
  
    // 插入节点，根据给定的数据和目标节点，将新节点插入到目标节点后面
    insert(data, target) {
      const newNode = new Node(data); // 创建新节点
      const targetNode = this.find(target); // 查找目标节点
      if (targetNode !== null) { // 如果目标节点存在
        newNode.next = targetNode.next; // 将新节点的 next 指向目标节点的 next
        targetNode.next = newNode; // 将目标节点的 next 指向新节点
      }
    }
  
    // 删除节点，根据给定的数据，删除对应的节点
    remove(data) {
      let prevNode = this.head; // 定义前驱节点，从头节点开始
      while (prevNode.next !== null && prevNode.next.data !== data) { // 如果前驱节点的下一个节点不为空，且数据不匹配
        prevNode = prevNode.next; // 将前驱节点移动到下一个节点
      }
      if (prevNode.next !== null) { // 如果前驱节点的下一个节点存在
        prevNode.next = prevNode.next.next; // 将前驱节点的 next 指向下一个节点的 next，从而删除下一个节点
      }
    }
  
    // 显示链表，打印出链表中的所有数据
    display() {
      let result = ''; // 定义结果字符串
      let currentNode = this.head; // 从头节点开始遍历
      while (currentNode !== null) { // 如果当前节点不为空
        result += currentNode.data; // 将当前节点的数据添加到结果字符串中
        currentNode = currentNode.next; // 将当前节点移动到下一个节点
        if (currentNode !== null) { // 如果当前节点不是最后一个节点
          result += '->'; // 在结果字符串中添加箭头符号
        }
      }
      console.log(result); // 打印结果字符串
    }
  }
  