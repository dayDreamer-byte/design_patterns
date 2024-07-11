# JavaScript 桥接模式

> 桥接模式（Bridge Pattern）是一种结构性设计模式。用于将抽象和实现分离，使它们可以独立变化。它通过创建一个桥接接口（Bridge Interface）来连接抽象部分和实现部分，使它们能够独立地演化。

实现桥接模式

```js
// 抽象部分
// 这是一个基类，不需要在代码其他部分使用。
// 基类的作用是定义一些基础的方法和属性，其他具体的形状类可以继承自该基类，并根据自身的特点实现特定的方法和属性。
// 通过这种方式，我们可以在程序中方便地对不同的类进行统一的操作和处理。
// 这个示例里 此类的作用是定义一些基于此类的类，实现自身的特点。例如（圆形、矩形）
class Shape {
	constructor(color) {
		this.color = color;
	}
	draw() {
		throw new Error("This method should be overridden");
	}
}

// 实现部分
// 基于基类实现
class Square {
	constructor(side, color) {
		this.side = side;
		this.color = color;
	}
	draw() {
		console.log(`Drawing a ${this.color} square with side ${this.side}`);
	}
}

class Circle extends Shape {
	constructor(color) {
		super(color);
	}
	draw() {
		console.log(`Drawing a ${this.color}`);
	}
}

// 桥接类（桥接接口）
class ShapeBridge {
	constructor(shape) {
		this.shape = shape;
	}
	draw() {
		this.shape.draw();
	}
}

// 使用桥接模式
const blueSquare = new ShapeBridge(10, "blue");
const circle = new ShapeBridge("red");
blueSquare.draw();
circle.draw();
```

在上面的示例中，Shape 是抽象部分，Circle 和 Square 是实现部分。ShapeBridge 是桥接接口，它将抽象部分和实现部分连接起来。通过创建不同的实例对象并传递给 ShapeBridge，我们可以实现不同形状的绘制，而不需要直接处理具体的实现部分。

桥接模式的优点是可以使抽象部分和实现部分独立演化，增加了系统的灵活性和可扩展性。它也符合 JavaScript 中对象组合和委托的特性，可以更好地组织代码并提高代码的可维护性。

> [奥迪+发动机桥接模式案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/015-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F/02.html)

> [弹窗动画桥接模式案例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/015-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F/01.html)
