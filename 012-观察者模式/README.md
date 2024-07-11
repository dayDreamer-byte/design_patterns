# JavaScript 观察者模式

> 观察者模式（Observer Pattern）是一种行为设计模式，它允许一个对象（称为主题或可观察者）将其状态的变化通知给一组依赖于它的其他对象（称为观察者）。 \
> 包含观察目标和观察者两类， 一个目标可以有多个与之相依赖的观察者 \
> 一旦观察目标的状态发生改变，所有的观察者都将得到通知

观察者模式（Subject 目标 可以添加删除观察者，目标有一个集中的通知方法发送给观察者 Observer）

```js
// 目标
class Subject {
	constructor() {
		// 观察者集合
		this.observers = [];
	}

	add(observer) {
		this.observers.push(observer);
	}

	remove(observer) {
		this.observers = this.observers.filter((item) => item !== observer);
	}
	// 目标改变通知方法
	notify() {
		this.observers.forEach((item) => {
			item.update();
		});
	}
}

// 观察者类
class Observer {
	constructor(name) {
		this.name = name;
	}
	update() {
		console.log("observer update", this.name);
	}
}

const subject = new Subject();
const observer1 = new Observer("q1");
const observer2 = new Observer("q2");
subject.add(observer1);
subject.add(observer2);
setTimeout(() => {
	subject.remove(observer1);
}, 1000);
setTimeout(() => {
	subject.notify();
}, 2000);
```

> [菜单栏观察者模式案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/012-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F/01.html)
