# JavaScript 原型模式

> 原型模式（Prototype Pattern）是一种创建型设计模式。\
> 在 JavaScript 中，每个函数都有一个 prototype 属性，这个属性引用了一个对象，即原型对象。而这个原型对象的用途则是为了实现基于原型的继承机制。

使用构造器函数 new 出的实例是无法共享属性和方法的，使用的都是独立的内存空间。
class 模式的方法自动挂载到原型上，满足共享方法。

```js
// 构造器函数
function User(name, age) {
	this.name = name;
	this.age = age;
	this.say = function () {
		console.log(this.name, "----", this.age);
	};
}
// 基于构造器函数创建的实例，say方法每次new时，都要开辟空间存放say Function
const worker = new User("j", 100);
const doctor = new User("a", 19);
```

使用原型模式可以解决属性和方法共享的问题

```js
User.prototype.say = function () {
	console.log(this.name, "----", this.age);
};
```

这样通过构造函数实例化的实例，它们的 say 方法是同一块内存空间。到达共享方法的目的。

```js
const worker = new User("j", 100);
const doctor = new User("a", 19);
console.log(worker.say === doctor.say) // true
```

> [查看选项卡原型实例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/002-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F/01.html)
