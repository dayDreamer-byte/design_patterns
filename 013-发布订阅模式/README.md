# JavaScript 发布订阅模式

> 发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern），是一种行为型设计模式，用于解耦发布者和订阅者之间的关系。
>
> 发布者和订阅者不用互相知道，通过第三方实现调度，属于经过解耦合得观察者模式。

```ts
interface Borker {
	[property: string]: ((...args: any[]) => void)[];
}

interface Pubsub {
	borker: Borker;
}

class Pubsub implements Pubsub {
	constructor() {
		this.borker = {};
	}
	// 向调度中心中添加相关频道的订阅事件
	subscribe(channel, callback) {
		if (!this.borker[channel]) {
			this.borker[channel] = [];
		}
		this.borker[channel].push(callback);
	}

	// 发布相关频道的消息
	publish(channel, data) {
		if (this.borker[channel]) {
			this.borker[channel].forEach((callback) => {
				callback(data);
			});
		}
	}

	// 取消订阅某个频道的某个消息
	unSubscribe(channel, callback) {
		if (this.borker[channel]) {
			this.borker[channel] = this.borker[channel].filter((cb) => cb !== callback);
		}
	}
}

const pubsub = new Pubsub();

// sub作为订阅者，订阅了message频道
const sub = (data) => {
	console.log("sub: ", data);
};
// sub作为订阅者，订阅了message频道
const sub1 = (data) => {
	console.log("sub1: ", data);
};

pubsub.subscribe("message", sub);
pubsub.subscribe("message", sub1);

// pubsub实例作为发布者，向message频道发布消息
pubsub.publish("message", "hello world");
```

> [菜单栏发布订阅案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/013-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F/01.html)
