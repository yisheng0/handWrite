function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(null, args);
      } else {
        return function(...args2) {
          return curried.apply(null, args.concat(args2));
        }
      }
    };
  }
  
  // 使用示例
  function sum(a, b, c) {
    return a + b + c;
  }
  // fn.length  3
  
  let curriedSum = curry(sum);

  console.log(curriedSum(1)(2)(3)); // 输出 6
  console.log(curriedSum(1, 2, 3)); // 同样输出 6
  

  // add(1)(2)(3)
  function add(a,b,c){
    return a+b+c
  }
//   console.log( sum(1,3,4))
   let cur = (fn)=>{
    return function curr(...args){
        if(args.length>=fn.length){
            return fn.apply(null,args)
        }else{
            return function(...args2){
                return curr.apply(null,args.concat(args2))
            }
        }
    }
   }
   let curriedAdd = cur(add);
   console.log(curriedAdd(1)(2)(3))




   // 长度不确定
   function curry1(fn) {
    return function curried1(...args) {
      if (args.includes(null)) {
        return fn.apply(this, args.slice(0, -1)); // 去掉最后一个参数（null），然后执行函数
      } else {
        return function(...args2) {
          return curried1.apply(this, args.concat(args2));
        }
      }
    };
  }
  
  // 使用示例
//   function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   }
  
//   let curriedSum1 = curry1(sum);
  
//   console.log(curriedSum1(1)(2)(9)(null)); // 输出 6
  