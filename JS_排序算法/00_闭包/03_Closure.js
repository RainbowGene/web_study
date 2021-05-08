

/**
 * 闭包只能取得包含函数中任何变量的最后一个值
 */

function arrFunc() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = function (num) {
            return num
        }(i)
    }
    return arr
}

console.log(arrFunc())