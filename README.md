### Promise 的简单介绍
* 该部分总结了关于前端异步处理 Promise 的简单使用
* Promise 主要是用于实现我们的处理异步的一个操作
* 是一种前端实现异步操作的一种规范化的操作，十分的重要

### 在 Promise 中的实例方法:
* 理解 Promise 中的 executor
* 理解 Promise 的 三大状态
* 理解 Promise 的 then 方法的使用
* 理解 Promise 的 catch 方法的使用
* 理解 Promise 的 finally 方法的使用
* 理解使用 Promise 中的其他更多的细节使用


### Promise 中的对象方法
* resolve 方法的使用
* reject 方法的使用
* all 方法的使用 —— 多个Promise 对象之间实现使用的对象
* race 方法的使用 —— 还是我们的多个 Promise 之间实现进行的判断
* allSettled 方法的实现
* any 方法的实现 —— 和all 方法相反的，所有的状态是 rejected 就返回，等到一个 fulfilled 状态的Promise 直接返回新的Promise


### 了解更多关于 Promise 的细节
如果想要理解我们的 Promise 的简单使用的可以，可以阅读文档或者博客
https://juejin.cn/post/7439727756458590218  Promise的简单使用


### 理解静态方法和实例方法的使用
* 静态方法： 就是我们的通过类名直接可以实现调用的方法，也是我们的静态方法
* 实例方法： 就是通过我们的实例对象进行调用的一些方法，添加到的是我们的 prototype 对象上面的方法


### 提交须知
```
git clone https://github.com/juwenzhang/Front_Promise.git

git add <file-need-commit>

git commit -m "commitlint: dosc"

git push -u <your-rop-name> <your-branch>

Promise 学习推荐资料阅读： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
```