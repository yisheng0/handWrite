const arr = [
  {
    id: 1,
    value: "abc",
    children: [
      {
        id: 11,
        value: "aaa",
        children: [
          {
            id: 100,
            value: "nnn"
          }
        ]
      },
      {
        id: 56,
        value: "ccc"
      }
    ]
  },
  {
    id: 20,
    value: ",,,,"
  }
];
let bianli = ()=>{
  let res
let deep = (arr, Id) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === Id) {
            res =  arr[i].value;
        }
        if(arr[i].children){
          deep(arr[i].children, Id); 
        }
    }
    return res;
}
 deep(arr,100)
 return res
}

console.log(bianli())
