/**
 * 该方法就是用来弥补我们的 Promise 的 all 方法的一些缺陷的
 * all 是只要遇到一个 rejected 状态的 Promise ，这次进行的判断直接结束
 * 但是 allSettled  方法就是对这一点的弥补吧，是等待我们的最终的 Promise 具备有结果后才结束
 */

const promise01 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello resolve01")
    }, 3000);
})

const promise02 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Hello resolve02")
        reject("hello rejected02")
    }, 4000)
})

const promise03 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello resolve03")
    }, 5000)
})

Promise.allSettled([promise01, promise02, promise03]).then(results => {
    console.log(results)
})

/**
 * allSettled 方法实现的是将每一个进行判断的 Promise 协同实现返回
 * 返回的是一个 对象数组，每个对象中含有我们的 status 字段和 另外一个字段
 * 当我们的 status 字段的值是 fulfilled 的时候，另外一个字段就是 value
 * 当我们的 status 字段的值是 rejected 的时候， 另外一个字段就是 reason
 */