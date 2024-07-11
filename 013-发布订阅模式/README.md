# JavaScript 发布订阅模式

> 发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern），是一种行为型设计模式，用于解耦发布者和订阅者之间的关系。 \
> 发布者和订阅者不用互相知道，通过第三方实现调度，属于经过解耦合得观察者模式。

简单的发布订阅模式

```js
// 这种实际与观察者模式没有区别，事件单一没有办法解耦。通过添加事件类型 归类事件。
const PubSub = {
	message: {}, // 调度中心
	// 发布事件
	publish(type) {
		if (!this.message[type]) return;
		this.message[type].forEach((item) => {
			item();
		});
	},
	// 订阅事件
	subscribe(type, cb) {
		if (!this.message[type]) {
			this.message[type] = [cb];
		} else {
			cb && this.message[type].push(cb);
		}
	},
	unsubscribe(type, cb) {
		if (!cb) {
			this.message[type].length = 0;
		} else {
			this.message[type] = this.message[type].filter((item) => item !== cb);
		}
	},
};
function testA() {
	console.log("testA");
}
function testB() {
	console.log("testB");
}
function testC() {
	console.log("testC");
}

PubSub.subscribe("a", testA);
PubSub.subscribe("b", testB);
PubSub.subscribe("a", testC);

PubSub.publish("a");
```

> [菜单栏发布订阅案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/013-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F/01.html)
