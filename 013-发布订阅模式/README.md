# JavaScript 发布订阅模式

> 发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern），是一种行为型设计模式，用于解耦发布者和订阅者之间的关系。
>
> 发布者和订阅者不用互相知道，通过第三方实现调度，属于经过解耦合得观察者模式。

### 发布订阅的角色

1. 发布者（Publisher）
    - 发布消息，同时设置好需要通知的订阅者。
2. 订阅者（Subscriber）
    - 订阅感兴趣的消息，同时向调度中心注册，指定回调函数。
3. 调度中心（Broker）
    - 订阅者和发布者不直接通信，而是通过调度中心进行通信。
4. 消息（Message）
    - 消息不直接被发布者和订阅者使用，而是通过调度中心中转。
5. 回调函数（Callback）
    - 当消息到达时，调度中心会调用订阅者注册的回调函数。

### 示例

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

### 案例

[菜单栏发布订阅案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/013-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F/01.html)
