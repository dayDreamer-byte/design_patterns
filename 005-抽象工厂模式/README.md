# JavaScript抽象工厂模式

> 抽象工厂模式（Abstract Factory Pattern）是一种创建型设计模式。
> 我们可以将工厂方法看做一个实例化对象的工厂，它只做实例化对象这一件事。

> 理解抽象工厂模式首先需要理解什么是抽象类。\
> 抽象类：一个方法无法给出具体明确的，该方法可以声明为抽象方法；拥有抽象方法的类，叫做抽象类。\
> 抽象类的价值：
> 由于抽象类既能拥有普通的方法，又有抽象的方法，这样抽象类既能自己完成一些功能，又给子类提供无线的可能。\
> 抽象类的特点：
> 1. 继承了抽象类的子类，要么对父类的抽象方法进行重写，要么自己是抽象类。
> 2. 抽象类也可以拥有普通方法。
> 3. 抽象类不能创建对象。
> 4. 抽象类也有构造方法，但是是为了子类创建对象使用。

使用es6实现抽象工厂模式
```js
// 1.定义一个父类(抽象类)
class User {
    constructor(name, role, pages) {
        this.name = name;
        this.role = role;
        this.pages = pages;
    }

    welcome() {
        console.log("欢迎回来", this.name);
    }

    // 模拟抽象方法，此方法如果子类不重写该方法，直接调用会抛异常throw
    dataShow() {
        throw new Error("抽象方法必须子类重新实现之后调用，父类调用抛出异常");
    }
}

// 2.定义子类实现，每个类相当于一种角色
class SuperAdmin extends User {
    constructor(name) {
        super(name, "superAdmin", ["home", "user-manage", "right-manage", "news-manage"]);
    }
    addRight() {}
    // 重写父类datashow
    dataShow() {
        console.log(this.role, "---dataShow");
    }
    addUser() {}
}
// 2.定义子类实现，每个类相当于一种角色
class Admin extends User {
    constructor(name) {
        super(name, "admin", ["home", "user-manage", "news-manage"]);
    }
    // 重写父类datashow
    dataShow() {
        console.log(this.role, "---dataShow");
    }
    addUser() {}
}
// 3. 定义工厂函数，接收一个角色名返回角色类
function getAbstractUserFactory(role) {
    switch (role) {
        case "superAdmin":
            return SuperAdmin;
        case "admin":
            return Admin;
        default:
            throw new Error("无效的权限");
    }
}
const UserClass = getAbstractUserFactory("superAdmin");
const user = new UserClass("aaa");
```

es5实现抽象工厂
1. 模拟抽象类定义
2. 模拟继承
```js
function User(name, role, pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
}
// 类方法定义在原型上，达到实例共享方法的目的。节省内存空间。
User.prototype.welcome = function () {
    console.log(this.name, "，欢迎回来");
};
User.prototype.dataShow = function () {
    // abstract 抽象方法需要子类实现
    throw new Error("抽象方法需要子类实现");
};
function SuperAdmin1(name) {
    // 模拟继承1
    // call() 方法会以给定的 this 值和逐个提供的参数调用该函数，返回使用指定的 this 值和参数调用函数后的结果。
    User.call(this, name, "superAdmin", ["home", "user-manage", "right-manage", "news-manage"]);
}
// 模拟继承2
// 以一个现有对象作为原型，创建一个新对象。
SuperAdmin1.prototype = Object.create(User.prototype);
// 模拟继承3
SuperAdmin1.prototype.constructor = User;
SuperAdmin1.prototype.addUser = function () {};
function getAbstractUserFactory1(role) {
    switch (role) {
        case "superAdmin":
            return SuperAdmin1;
        case "admin1":
            return Admin1;
        default:
            throw new Error("无效的权限");
    }
}

const UserClass1 = getAbstractUserFactory1("superAdmin");
const user1 = new UserClass1("bbb");
```