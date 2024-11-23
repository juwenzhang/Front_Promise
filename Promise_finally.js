// finally 的实现

const promise = new Promise((resolve, reject) => {
    resolve("Promise success")
})

promise.then(res => {
    console.log(res)
    return "交给第二步继续进行处理"
}).then(res => {
    console.log(res)
    throw new Error("第二步无法实现处理...")
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log(`笑死我了...`)
})



/**
 * finally 表示的是我们的 Promise 的状态管他是什么状态最终都是会执行我们的这个语句
 *
 * finally 就是我们的最终的代码的执行
 */