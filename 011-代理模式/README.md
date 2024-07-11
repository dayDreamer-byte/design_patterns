# JavaScript 代理模式

> 代理模式（Proxy Pattern）是一种结构型设计模式，它允许通过代理对象控制对其他对象的访问。
> 代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件、资源、内存中的对象，或者是一些难以复制的东西

es5 实现对象代理(通过修改代理对象 targetProxy 达到修改 target 的目的)
原理：通过 Object.create 对目标对象建立代理对象。通过 defineProperties 监听代理对象 get、set 方法到达控制原始对象的目的。

```js
//目标对象
var target = {
	name: "张三",
	age: 18,
};

// Oject.create() 静态方法以一个现有对象作为原型，创建一个新对象。
// 第二个参数给自身添加属性。
var targetProxy = Object.create(target, {
	sex: {
		value: "男",
		writable: true, // 是否可写
		enumerable: true, // 是否可枚举
		configurable: true, // 是否可配置
	},
	bar: {
		configurable: false,
		get: function () {
			return 10;
		},
		set: function (value) {
			console.log("value-", value);
		},
	},
});
console.log("---->", targetProxy.__proto__ === target); // true

// Object.defineProperties() 静态方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象
Object.defineProperties(targetProxy, {
	name: {
		get: function () {
			console.log("访问name");
			return target.name;
		},
		set: function (value) {
			console.log("设置name", value);
			target.name = value;
		},
	},
	age: {
		get: function () {
			console.log("访问age");
			return target.age;
		},
		set: function (value) {
			console.log("设置age", value);
			target.age = value;
		},
	},
	sex: {
		get: function () {
			return target.sex;
		},
		set: function (value) {
			target.sex = value;
		},
	},
});
```

es6 实现对象代理

```js
var worker = {
	name: "tiechui",
	money: 10000,
};
let workerProxy = new Proxy(worker, {
	get(target, key) {
		if (key === "name") {
			console.log("访问了worker");
		}
		return worker.name;
	},
	set(target, key, value) {
		if (key === "money") {
			console.log("设置了worker");
			if (value > 10000) {
				console.log("可以合租");
			} else {
				throw new Error("太少了，怎么合作啊");
			}
		}
	},
});
```

实现代理模式
场景：明星不会主动接戏，通过经纪人来完成相关工作，明星只负责拍戏。

```js
class Star {
	play() {
		console.log("秦晓鹏来拍戏了");
	}
}

class jingji {
	constructor() {
		this.star = new Star();
	}
	getWork(price) {
		if (price > 1000) {
			this.star.play();
		} else {
			throw new Error("给这么少谁给你干啊");
		}
	}
}

// 通过代理经济人 来处理相关前置工作。明星只管拍戏
const jj = new jingji();
jj.getWork(1000);
```

> [简单的数据驱动案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/011-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/01.html)
