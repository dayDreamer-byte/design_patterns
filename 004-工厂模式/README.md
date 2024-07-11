# JavaScript简单工厂模式

> 简单工厂模式（Factory Pattern）是一种创建型设计模式，\
> 它不会暴露创建对象的具体逻辑,而是将逻辑封装在一个函数中，那么这个函数便成为了工厂,同时根据抽象程度的不同分为简单工厂、抽象工厂。
> 我们可以将工厂方法看做一个实例化对象的工厂，它只做实例化对象这一件事。

基于构造器模式创建工厂函数
```js
// 定义一个工厂函数, 接受角色名返回角色对象
function UserFactory(role) {
    // 2.定义一个工厂类，工厂函数返回的对象基于此类创建。
    function User(role, pages) {
        this.role = role;
        this.pages = pages;
    }
    var roles = {
        superAdmin: ["home", "user-manage", "right-manage", "news-manage"],
        admin: ["home", "user-manage", "news-manage"],
        editor: ["home", "news-manage"],
    };
    return new User(role, roles[role]);
}
const superAdmin = UserFactory("superAdmin");
const admin = UserFactory("admin");
```
基于class类创建工厂函数

```js
// 基于Class类创建工厂函数
class User {
    constructor(role, pages) {
        this.role = role;
        this.pages = pages;
    }
    static roles = {
        superAdmin: ["home", "user-manage", "right-manage", "news-manage"],
        admin: ["home", "user-manage", "news-manage"],
        editor: ["home", "news-manage"],
    };
    // 工厂函数
    static UserFactory(role) {
        if (!User.roles[role]) {
            throw new Error("无效的权限：" + role);
        }
        return new User(role, User.roles[role]);
    }
}
const superAdmin1 = User.UserFactory("superAdmin");
const admin1 = User.UserFactory("admin");
console.log(superAdmin1, admin1);
```
简单的工厂函数，定义一个函数返回一个对象字面量。
```js
// 最简洁的做法
function createUser(role) {
    const roles = {
        superAdmin: ["home", "user-manage", "right-manage", "news-manage"],
        admin: ["home", "user-manage", "news-manage"],
        editor: ["home", "news-manage"],
    };

    if (!roles[role]) {
        throw new Error("Invalid role:" + role);
    }

    return {role,pages: roles[role]};
}
```