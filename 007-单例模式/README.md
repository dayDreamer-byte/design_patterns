# JavaScript 单例模式

> 单例模式（Singleton Pattern）保证一个类仅有一个实例，并提供一个全局访问点。
> 主要解决一个全局使用类的频繁创建和销毁，占用内存的问题。

使用 es5 的闭包方式创建单例模式  
复习闭包：函数 1 内部返回函数被外界变量引用，导致这个函数 1 内的变量无法施放。形成闭包。

```js
// es5
var instance = (function () {
	var instance = null;
	function User(name, age) {
		this.name = name;
		this.age = age;
	}
	// 始终return instance这一个实例形成单例
	return function (name, age) {
		// 实例为null就创建
		if (!instance) {
			instance = new User(name, age);
		}
		// 否则直接return
		return instance;
	};
})();
```

使用 class 类实现单例

```js
class Singleton {
	// Singleton类是内存唯一的。
	constructor(name, age) {
		// 在类上挂一个属性instance
		if (!Singleton.instance) {
			this.name = name;
			this.age = age;
			Singleton.instance = this;
		}
		return Singleton.instance;
	}
}
```

> [单例示例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/007-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F/01.html)
