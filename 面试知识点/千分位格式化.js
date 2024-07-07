function format(num) {
    let strNum = num.toString();
    let result = '';
    let count = 0;

    for (let i = strNum.length - 1; i >= 0; i--) {
        result = strNum[i] + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
            result = ',' + result;
        }
    }

    return result;
    // let res = "";
    // let count = 0;
    // let strNum = String(num).split("").reverse().join("")
    // for(let i = 0; i<strNum.length; i++){
    //     res = res + strNum[i]
    //     count++
    //     if(count%3==0){
    //         res = res + ","
    //     }
    // }
    // return res.split("").reverse().join("")
}

// 使用示例
console.log(format(1234567)); // 输出: "1,234,567"