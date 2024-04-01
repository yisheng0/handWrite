// 手写 new
function myNew(constructor, ...args) {
  //创建一个新对象
  var obj = new Object();
  //将对象的[[Prototype]]属性指向构造函数的prototype属性
  Object.setPrototypeOf(obj,construtor.prototype)
  //将构造函数的this绑定到对象，并执行构造函数的代码
  let result = constructor.apply(obj, args);
  //如果构造函数返回非原始值，则返回该值，否则返回创建的对象
  return result instanceof Object ? result : obj;
}


  //如果构造函数返回非原始值，则返回该值，否则返回创建的对象
// 当你使用 new 操作符创建一个对象实例时，构造函数会执行一些操作，
// 比如给 this 对象添加属性和方法，然后返回 this 对象。
// 这个返回的对象就是 new 表达式的结果，也就是你创建的对象实例。例如：
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person("Alice", 20);
console.log(p1); // Person { name: "Alice", age: 20 }
// 但是，如果你在构造函数中显式地返回了一个非原始值，
// 比如另一个对象，数组，函数等，
// 那么 new 表达式的结果就不再是 this 对象，
// 而是你返回的那个非原始值。这样，
// 你就无法得到你想要的对象实例，而是得到了一个不相关的值。例如：

function Person(name, age) {
  this.name = name;
  this.age = age;
  return { name: "Bob", age: 30 }; // 返回一个非原始值
}

var p2 = new Person("Alice", 20);
console.log(p2); // { name: "Bob", age: 30 }

// 你可以看到，p2 的值并不是 Person 类型的对象，而是一个普通的对象字面量，
// 它的属性和值都和构造函数中返回的那个对象一样。这样，
// 你就失去了使用 new 操作符的意义，因为你没有得到你想要的对象实例。
// 所以，一般来说，构造函数不应该返回任何值，或者只返回原始值，
// 这样就不会影响 new 表达式的结果。如果返回原始值，
// 那么 new 表达式的结果就会忽略这个返回值，仍然返回 this 对象。例如：
function Person(name, age) {
  this.name = name;
  this.age = age;
  return "Hello"; // 返回一个原始值
}

var p3 = new Person("Alice", 20);
console.log(p3); // Person { name: "Alice", age: 20 }

// 你可以看到，p3 的值仍然是 Person 类型的对象，
// 它的属性和值都和构造函数中给 this 对象赋的值一样。
// 这样，你就可以得到你想要的对象实例。