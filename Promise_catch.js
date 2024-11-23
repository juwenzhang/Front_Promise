// 开始实现我们的 Promise 的 catch 的更多的细节实现

const promise = new Promise((resolve, reject) => {
    resolve(true)
    reject(false)
})

promise.then(value => {
    console.log(value)
    return "下一步的执行"
}).then(value => {
    console.log(value)
    return "再下一步的执行"
}).then(value => {
    console.log(value)
    // 直接在这一步修改 Promise 的异常
    throw new Error("Error")
}).then(value => {
    console.log(value)  // 因为上面有抛出异常，所以说直接不执行
}).then(value => {
    console.log(value)  // 因为上面有抛出异常，所以说直接不执行
}).catch(err => {
    console.log(err)  // Error: Error
})



/**
 * catch 方法 和 then 方法类似
 * 其可以实现的是我们的处理 Promise 处于 rejected 状态时候的错误的结果
 * 但是需要注意的是只要我们的 Promise 的上面的只要是有一层是 rejected 的状态
 * 那么 catch 直接执行
 *
 * 我们在实现我们的修改链式调用的时候的 Promise 的状态的时候
 * 我们是可以通过 抛出异常来实现直接修改链式调用途中的Promise 的状态的 throw new Error()
 *
 * Promise 的源码是通过的我们的 try...catch 语句 + throw 结合使用来实现的我们的捕获异常来实现的
 */