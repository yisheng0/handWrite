function list_to_tree(list) {
    const map = {}, roots = [];
    for (let i = 0; i < list.length; i++) {
      map[list[i].id] = i; 
      list[i].children = []; 
    }
    for (let i = 0; i < list.length; i++) {
      let node = list[i];
      if (node.parentId !== 0) { 
        list[map[node.parentId]].children.push(node); 
      } else {
        roots.push(node); 
      }
    }
    return roots;
  }
  
  function list_to_tree1(list) {
    const roots = []
    for(let i = 0; i < list.length; i++){
      node = list[i]
      node.children = []
      if(node.parentId !== '0'){
        for(let j = 0; j < list.length; j++) {
          if(list[j].id === node.parentId) {
            list[j].children.push(node)
          }
        }
      }else {
        roots.push(node)
      }
    }
    return roots;
}


  
  /** 数组结构数据 */
  const arrayData = [
    { id: 2, title: "中国", parentId: 0 },
    { id: 3, title: "广东省", parentId: 2 },
    { id: 4, title: "广州市", parentId: 3 },
    { id: 5, title: "天河区", parentId: 4 },
    { id: 6, title: "湖南省", parentId: 2 },
    { id: 1, title: "俄罗斯", parentId: 0 },
  ];
  
  console.log(list_to_tree(arrayData));
  