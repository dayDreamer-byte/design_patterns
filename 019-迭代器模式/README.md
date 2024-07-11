# JavaScript 迭代器模式

> 迭代器模式（Iterator Pattern）是一种行为型设计模式，它提供了一种顺序访问聚合对象中各个元素的方法，而不需要暴露该对象的内部表示。\
> 在 JavaScript 中，迭代器模式可以帮助我们遍历和访问集合对象中的元素，同时将遍历算法与具体集合的实现解耦。

实现简单的迭代器

```js
var each = function (array, cb) {
	for (var i = 0; i < array.length; i++) {
		cb(array, i, array[i]);
	}
};

each([111, 222, 333, 444, 555, 666], function (arr, key, value) {
	console.log(arr, key, value);
});
```

ES6 Iterator 接口
内置 Iterator 接口的对象：Array map set String arguments NodeList
演示内置迭代器：

```js
var arr = ["kerwin", "xiaoming", "tiechui"]; // Symbol(Symbol.iterator)
// 支持迭代器会有一个Symbol.iterator的属性。可以使用 for...of循环。
// done：true 停止迭代
var ite = arr[Symbol.iterator](); // values
console.log(ite.next(), ite.next(), ite.next()); // {done :false,value:"kerwin"/"xiaoming"/"tiechui"}
```

拓展对象迭代器

```js
let obj = {
	// "name":"kerwin",不支持这种迭代
	0: "kerwin",
	1: "xiaoming",
	// 拓展迭代器
	length: 2, // 使用迭代器必须增加一个length属性
	[Symbol.iterator]: Array.prototype[Symbol.iterator], // 使用Array原型的迭代器方法
};
for (let item of obj) {
	console.log(item);
}
```

深度拓展 Symbol.iterator

```js
let objs = {
	name: "kerwin",
	code: 200,
	list: ["aaaa", "bbbb", "cccc"],
	// 自定义Symbol.iterator
	[Symbol.iterator]: function () {
		let index = -1;
		return {
			next: () => {
				index++;
				if (index < Object.keys(this).length) {
					return {
						value: this[Object.keys(this)[index]],
						key: Object.keys(this)[index],
						done: false,
					};
				} else {
					return {
						value: undefined,
						key: undefined,
						done: true,
					};
				}
			},
		};
	},
};
let ites = objs[Symbol.iterator]();
console.log(ites.next(), ites.next(), ites.next());
for (let item of objs) {
	console.log(item);
}
```
