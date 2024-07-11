# JavaScript 模板方法设计模式

> 模板方法模式（Template Method Pattern）是一种行为设计模式，它允许你定义一个算法的框架，但将一些步骤的具体实现延迟到子类中。这样，可以在不改变算法结构的情况下，让子类重新定义某些步骤的具体实现。\
> 模板方法模式在 JavaScript 中可以帮助你实现算法的复用和扩展，同时也能够有效地管理算法的整体结构。

不使用设计模式渲染逻辑

```js
var F = function () {
	this.init = function () {
		this.getData();
		this.render();
	};
};
F.prototype.getData = function () {
	console.log("getData");
};
F.prototype.render = function () {
	console.log("render");
};

new F().init();
```

使用模板方法模式

```js
// 形参param给一个默认值 不然下面param.getData会报错
var container = function (param = {}) {
	var F = function () {};
	F.prototype.init = async function () {
		const res = await this.getData();
		this.render(res);
	};
	// 模拟抽象父类的抽象方法。子类必须实现。
	F.prototype.getData =
		param.getData ||
		function () {
			throw new Error("必须重写getData方法");
		};
	F.prototype.render = function (list) {
		console.log("render", list);
	};
	return F;
};
// 获取模板类
var F = container({
	getData: function () {
		return [1, 2, 3];
	},
});
new F().init();
```
