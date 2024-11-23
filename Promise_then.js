// 该文件主要是用于讲解我们的 Promise then 方法的更过的细节
const promise = new Promise((resolve, reject) => {
    resolve(true)
    // reject(false)
})

promise.then(res => {
    console.log(res)
    // 1.返回的是普通值的时候
    // return true

    // 2.返回的是新的 Promise 的时候
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve("new Promise")
    //     }, 1000)
    // })

    // 3.返回值是我们的 thenable 的时候
    return {
        then(resolve) {
            resolve("thenable")
        }
    }

}, err => {
    console.log(err)
    return false
}).then(res => {
    console.log(res)
    return true
}, err => {
    console.log(err)
    return false
}).then(res => {
    console.log(res)
    return false
}, err => {
    console.log(err)
    return true
}).then(res => {
    console.log(res)
    return true
}, err => {
    console.log(err)
    return false
})



/**
 * Promise 中的 then 方法的返回值
 * then 方法的内部实际上的话是返回了我们的 Promise 的
 * 同时这个 Promise 和上一次确定了的状态一样的
 * 就是因为这个特点的存在，所以说就可以实现 Promise 的链式调用
 * 同时 Promise 的本身的内部也是实现了我们的携带了上一次的 Promise 的状态了的
 * 这个状态和上一次的状态是相同的
 *
 * 也就是说上一次的 Promise 的状态是 fulfilled
 * 那么下一次的也是我们的 fulfilled
 *
 * 如果说上一次的 Promise 状态是我们的 rejected
 * 那么下一次的 Promise 的状态也是我们的 rejected
 *
 * 但是我们的决议的结果还是由上一次的 Promise 来实现决议的
 * 所以说进行链式调用的时候，我们的 Promise 的决议结果就会有所不同了
 *
 * 我们返回的新的 Promise 携带的信息含有： 上一次决议的状态以及上一次进行决议的结果进行了返回的
 *
 * 如果想要获得我们的每一次的决议结果，这个就需要使用到我们 return 来实现返回决议的值
 */