# JavaScript 命令模式

> 命令模式（Command Pattern）是一种行为设计模式。它通过将请求封装成一个对象，从而使不同的请求可以被参数化，并且能够在不同的时间点执行或者队列化。\
> 命令模式可以在很多情况下提供更松散的耦合，并支持更灵活的代码组织。

命令模式由三种角色构成：发布者 invoker , 接收者 receiver , 命令对象 command

```js
class Receiver {
	// 接收者类
	execute() {
		console.log("接收者执行请求");
	}
}

class Command {
	// 命令者类
	constructor(receiver) {
		this.receiver = receiver;
	}
	execute() {
		console.log("命令对象->接收者->对应接口执行");
		this.receiver.execute();
	}
}

class Invoker {
	// 发布者类
	constructor(command) {
		this.command = command;
	}
	execute() {
		console.log("发布请求");
		this.command.execute();
	}
}

const order = new Command(new Receiver());
const invoker = new Invoker(order);
invoker.execute();
```

> [电视开关命令模式案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/017-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F/02.html)
