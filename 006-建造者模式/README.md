# JavaScript 建造者模式

> 建造者模式（Builder Pattern）属于创建型模式的一种。\
> 它将一个复杂的对象的构建和表现分离，使得同样的构建过程可以创建不同的表示
> 建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。
> 工厂模式主要是为了创建对象实例或类簇（抽象工厂），关心的是最终产生的是什么，而不关系创建的过程。
> 而建造者模式关心的是创建这个对象的整个过程，甚至于创建对象的每个细节。

```js
// 建造细节
class NavBar {
	init() {
		console.log("navbar --- init");
	}
	getData() {
		console.log("navbar --- getData");
	}
	render() {
		console.log("navbar --- render");
	}
}
// 建造细节
class List {
	init() {
		console.log("list --- init");
	}
	getData() {
		console.log("list --- getData");
	}
	render() {
		console.log("list --- render");
	}
}

// 建造者类
class creator {
	//建造过程
	startBuild(builder) {
		builder.init();
		builder.getData();
		builder.render();
	}
}

// 实例化建造者对象，传入实例化不同的对象，执行相同的逻辑
const op = new creator();
op.startBuild(new NavBar());
op.startBuild(new List());
```
