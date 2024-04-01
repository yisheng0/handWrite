//防抖函数   input
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

// 搜索建议的函数
function showSuggestions(input) {
    // 根据输入的内容，显示一些搜索建议
    console.log("Showing suggestions for " + input);
}
// 获取输入框元素
var inputBox = document.getElementById("input");
// 给输入框添加键盘抬起事件的监听器，使用防抖函数
inputBox.addEventListener("keyup", debounce(function() {
    // 获取输入框的值
    var input = inputBox.value;
    // 调用搜索建议的函数
    showSuggestions(input);
}, 500));


// 你的理解有一点误区，键盘抬起500ms后，并不是执行debounce函数，
// 而是执行debounce函数返回的匿名函数。
// 这个匿名函数会在每次被调用时，
// 先清除之前的定时器（如果有的话），
// 然后重新设置一个新的定时器，
// 让showSuggestions函数在500ms后执行。
// 这样就实现了防抖的效果。
