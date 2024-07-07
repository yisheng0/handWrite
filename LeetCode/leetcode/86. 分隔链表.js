//push优于unshfit
var partition = function(head, x) {
    let stack = [];
    while(head != null){
        stack.push(head.val);
        head = head.next
    }
    let arr1 = [];
    let arr2 = [];
    let node = 0;
    for(let i = 0;i < stack.length; i++){
        if(stack[node] < x){
           arr1.push(stack[node])
        } else {
            arr2.push(stack[node])
        }
        node++
    }
    let newarr = [...arr1 , ...arr2].reverse();
    let dummy = new ListNode(0);
    let curr = dummy;
    while(newarr.length > 0){
        let newNode = new ListNode(newarr.pop());
        curr.next = newNode;
        curr = curr.next
    }
    return dummy.next
 };