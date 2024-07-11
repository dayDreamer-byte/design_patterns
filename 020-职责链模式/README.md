# JavaScript 职责链模式

> 责任链模式（Chain of Responsibility Pattern）是一种行为设计模式，它允许多个对象依次处理请求，直到其中一个对象能够处理该请求为止。\
> 在责任链模式中，每个处理者对象都有一个对下一个处理者对象的引用。当一个请求进入责任链时，从第一个处理者开始，如果当前处理者能够处理该请求，则处理请求并结束；否则，将请求传递给下一个处理者，直到找到能够处理请求的处理者或者责任链遍历完毕。

不使用责任链模式的表单验证方法

```js
btn.onclick = function () {
	let val = input.value;
	if (val.length <= 0) {
		console.log("不能为空");
	} else {
		if (Number.isNaN(+val)) {
			console.log("需要输入数字");
		} else {
			if (val.length < 6) {
				console.log("需要大于6位");
			} else {
				console.log("验证通过");
			}
		}
	}
};
```

使用责任链模式实现

```js
btn.onclick = function () {
	emptyChain.check();
};

function checkEmpty() {
	if (input.value.length <= 0) {
		console.log("不能为空");
		return;
	}
	return "next";
}
function checkNumber() {
	if (Number.isNaN(+input.value)) {
		console.log("需要输入数字");
		return;
	}
	return "next";
}
function checkLength() {
	if (input.value.length < 6) {
		console.log("需要大于6位");
		return;
	}
	return "next";
}
class Chain {
	constructor(rule) {
		this.checkRule = rule;
		this.nextRule = null;
	}

	addRule(rule) {
		this.nextRule = rule;
	}

	check() {
		this.checkRule() === "next" ? this.nextRule.check() : null;
	}
}

let emptyChain = new Chain(checkEmpty);
let numberChain = new Chain(checkNumber);
let lengthChain = new Chain(checkLength);
emptyChain.addRule(numberChain);
numberChain.addRule(lengthChain);
lengthChain.addRule({
	check() {
		console.log("验证通过");
		return "end";
	},
});
```

优化为链式调用

```js
btn.onclick = function () {
	emptyChain.check();
};

function checkEmpty() {
	if (input.value.length <= 0) {
		console.log("不能为空");
		return;
	}
	return "next";
}
function checkNumber() {
	if (Number.isNaN(+input.value)) {
		console.log("需要输入数字");
		return;
	}
	return "next";
}
function checkLength() {
	if (input.value.length < 6) {
		console.log("需要大于6位");
		return;
	}
	return "next";
}
class Chain {
	constructor(rule) {
		this.checkRule = rule;
		this.nextRule = null;
	}

	addRule(rule) {
		this.nextRule = new Chain(rule);
		return this.nextRule;
	}
	end() {
		this.nextRule = {
			check() {
				console.log("验证通过");
			},
		};
	}

	check() {
		this.checkRule() === "next" ? this.nextRule.check() : null;
	}
}

let emptyChain = new Chain(checkEmpty);
emptyChain.addRule(checkNumber).addRule(checkLength).end();
```
