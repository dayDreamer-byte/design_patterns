# JavaScript 装饰器模式

> 装饰器模式（Decorator Pattern）属于结构型模式。装饰器模式能够很好的对已有功能进行拓展，这样不会更改原有的代码，对其他的业务产生影响。
> 装饰者一般也用来实现 AOP （面向切面编程）利用 AOP 可以对业务逻辑的各个部分进行隔离，也可以隔离业务无关的功能比如日志上报、异常处理等，从而使得业务逻辑各部分之间的耦合度降低，提高业务无关的功能的复用性，也就提高了开发的效率。

```js
// 装饰器步骤解析
// 2. Function原型挂载前置函数
Function.prototype.before = function (beforeFn) {
	// before函数内，this就是test实例
	var _this = this;
	// 考虑要先挂载前置函数 直接在before函数体内实现，达不到挂载的目的，所以return一个函数来实现。
	// 为什么说达不到挂载的目的，不return函数test.before()会直接执行beforeFn函数。
	return function () {
		// 这里的this是全局window
		console.log(arguments);
		// 先执行前置函数
		beforeFn.apply(this, arguments);
		// 在执行函数本身
		return _this.apply(this, arguments);
	};
};
// 4. Function原型挂载后置函数
Function.prototype.after = function (afterFn) {
	var _this = this;
	return function () {
		// 在执行函数本身 这里的函数本身是前置函数return的匿名函数
		/**
		 * return function () {
		 * // 这里的this是全局window
		 * console.log(arguments);
		 * // 先执行前置函数
		 * beforeFn.apply(this, arguments);
		 * // 在执行函数本身
		 * return _this.apply(this, arguments);
		 * };
		 * */
		var result = _this.apply(this, arguments);
		// 先执行后置函数
		afterFn.apply(this, arguments);
		return result;
	};
};

// 1. 函数定义相当于 var test = new Funciton(),test是Function构造函数的实例。
function test() {
	console.log("11111", arguments);
	return 1111;
}
// 3. 执行前置函数（确切的说这里是挂载前置函数,实参function才是前置函数）
var test1 = test
	.before(function () {
		console.log("00000", arguments);
	})
	.after(function () {
		// 挂载后置函数
		console.log("22222");
	});
/**
 * test1执行流程
 * 1. 执行 var result = _this.apply(this, arguments);
 * 2. 执行 beforeFn.apply(this, arguments);
 * 3. 执行 return _this.apply(this, arguments);
 * 4. 执行 afterFn.apply(this, arguments);
 * 5. return test的return
 * */
test1(1, 2, 3);
```

> [uv、pv 上报案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/008-%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F/01.html) > [ajax 公共参数 token 案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/008-%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F/02.html)
