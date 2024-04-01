let obj = {};
let protoObj = { prop: 'some value' };

// 使用 __proto__

// 或者使用 Object.setPrototypeOf


Object.defineProperties(obj, protoObj);

console.log(obj.prop); // 输出: 'some value'
