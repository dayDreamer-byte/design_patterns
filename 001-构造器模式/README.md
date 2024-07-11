# JavaScript 构造器模式

> 构造器模式（Constructor Pattern）是一种创建型设计模式。\
> 它用于创建复杂对象，并允许对象的构建过程分离出来，使得同样的构建过程可以创建不同表示的对象。\
> 在 JavaScript 中可以通过函数和原型来实现类似的构造器模式 \

当你想创建一个用户时，可能使用字面量可以直接实现

```js
const user = {
	name: "xiaoming",
	age: 18,
	say: function () {
		console.log(this.name, "今年", this.age, "岁");
	},
};
```

当你想实现多个用户时呢，不可能使用多个字面量对象来实现吧。那样代码太多了。
可以使用构造器函数实现

```js
// 构造器函数 函数名首字母最好大写
// *** 无法共享属性和方法,各个实例属性和方法都有自己独立的内存空间,通过prototype解决共享问题。
function User(name, age) {
	this.name = name;
	this.age = age;
	this.say = function () {
		console.log(this.name + "--" + this.age);
	};
}
```

// 拓展：worker,doctor 的 Prototype === Object,constructor = function User(){}

```js
var worker = new User("老板", 40);
var doctor = new User("doctor", 30);
console.log(worker, doctor);
```
