


/**
 * 闭包(Closure)
 *      简单讲：闭包就是指有权访问另外一个函数中的变量
 *      MSD上这么说：闭包就是一种特殊的对象
 *      
 *      它由两部分组成：函数、及创建该函数的环境.
 *          环境由闭包创建时在作用域中的任何局部变量组成
 * 
 *      关键在于，外部函数调用之后其变量对象本应该被销毁，但闭包的存在任然让我们可以
 *      访问外部函数的变量对象
 */

//栗子
function outer() {
    var a = 1;
    return function () {
        return a;   //返回a的值
    }
}

var b = outer()
console.log(b())

