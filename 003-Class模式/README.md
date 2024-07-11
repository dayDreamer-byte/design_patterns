# JavaScript 原型模式（class）

> ES6 产生了类的概念（Class Pattern）。class（类）实例方法是直接挂载在原型上的，可以共享方法，属性不会被共享。

```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // say挂载在原型上，不会初始化到实例上
    say() {
        console.log(this.name + "-" + this.age);
    }
    // 静态方法 类直接调用User.singing();
    static singing() {
        console.log("歌唱...");
    }
}

const worker = new User("a", 100);
const singer = new User("j", 18);
console.log(worker, singer);
worker.say();
singer.say();
```
> [查看选项卡Class实例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/002-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F/01.html)