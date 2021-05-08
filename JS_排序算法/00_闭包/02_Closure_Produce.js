


/**
 * 产生一个闭包
 */

//最常见方式，就是在一个函数内创建另一个函数

// function func() {
//     var a = 1, b = 2;

//     function closure() {
//         return a + b;
//     }
//     return closure;     //返回闭包函数
// }

// var c = func()
// console.log(c())


/**
 * 注意事项:通常，函数的作用域及其所有变量都会在函数执行后被销毁
 *         但是在创建了闭包之后，这个函数的作用域就会一直存在，
 *         直到闭包不存在为止
 */

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(2))

//释放对闭包的引用
add5 = null;
add10 = null;

//console.log(add5(2))    //TypeError: add5 is not a function

//在上述 add5 和 add10中，它们共享了相同的函数定义，但是保存的环境是不同的
//一个x为5，一个为10，最后通过null释放了闭包的引用

//*在javascript中，如果一个对象不在被引用，那么它就会被垃圾回收机制回收
// 如果两个对象互相引用，且不被其他对象引用，那么这两个对象会被同时回收