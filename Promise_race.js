//
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


Promise.race([promise01, promise02, promise03]).then(results => {
    console.log(results)
})


/**
 * 该方法实现判断的就是对每一种 Promise 进行的赛跑模式吧
 * 那一个 Promise 对象先实现返回状态，的值就先实现返回
 *
 * 注意实际上的话，这几个 Promise 的类方法的话，实际上的话都是实现了产生了新的 Promise 对象的呐
 * 只是这个 Promise 对象的话其状态和返回值的判断机制有所不同罢了！！！
 */