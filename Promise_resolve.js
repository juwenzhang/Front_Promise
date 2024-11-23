/**
 * 什么是类方法，什么是实例方法
 * 类方法是我们的类名直接进行使用的
 * 实例方法是我们的实例对象进行使用的
 * 同时我们的类方法和静态方法也就是我们的类方法
 */

Promise.resolve("hello world").then(res => {
    console.log(res)
})

Promise.reject('Promise reject').then(res => console.log(res)).catch(err => console.log(err))

/**
 * 使用我们的这个 resolve 方法实现的是直接实现决定我们的 Promise 的状态以及结果的返回
 * 这个就是我们的 resolve 方法的使用
 *
 * reject 和 resolve 方法是类似的
 * 都是属于是我们的类方法，直接实现决定我们的 Promise 的状态以及其携带的结果
 */