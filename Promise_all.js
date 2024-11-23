// 先实现一次性创建多个 Promise 的实例对象

const promise01 = new Promise((resolve, reject) => {
    resolve("Hello resolve01")
})

const promise02 = new Promise((resolve, reject) => {
    resolve("Hello resolve02")
    // reject("hello rejected02")
})

const promise03 = new Promise((resolve, reject) => {
    resolve("Hello resolve03")
})


Promise.all([promise01, promise02, promise03]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

/**
 * 对于我们的 all 方法的话实际上的话实现的是我们的对多个 Promise 之间实现我们的判断
 * 同时这个方法的实现的最后会不会返回我们新的 Promise
 *
 * 这个  Promise 的状态的话，只有我们的实现传入的所有的 Promise 的状态全部是 fulfilled 的时候
 * 这个新的 Promise 的状态才是 fulfilled，同时将这些 fulfilled 状态的 Promise 携带的值连接成数组实现返回
 *
 * 如果含有一个或者有多个 rejected 状态的 Promise 存在，我们就是实现的是将**第一个**出现 rejected 状态的 Promise
 * 实现返回，同时实现的是携带其 状态信息和值 进行的一起返回
 */