# JavaScript 适配器模式

> 适配器模式（Adapter Pattern）是一种结构型设计模式，也叫包装器。用于将一个类的接口转换成客户端所期望的另一个接口。\
>  它允许不兼容的类能够协同工作，通过创建一个适配器类来封装对原始类的调用。\
> 白话就是在无法共用的方法外嵌套一层，封装为能协同工作的方法。

简单实现适配器模式(将无法共用的 show 方法 通过一个适配器类转换为可以公用的 display 方法，在进行封装。可以减少判断逻辑)

```js
// 被适配者
class TencentMap {
	show() {
		console.log("开始渲染腾讯地图");
	}
}

// 目标类
class BaiduMap {
	display() {
		console.log("开始渲染百度地图");
	}
}

// 实现适配器类：将被适配者的接口转换为目标接口的类。
class TencentApterMap extends TencentMap {
	constructor() {
		super();
	}
	display() {
		this.show();
	}
}

// 场景：1.当有两个按钮需要打开不同的地图，但是使用的同一个公告函数时，需要进行一定的转换。
function render(target) {
	// 2.这里调用的是百度地图的渲染函数，所以腾讯地图会报错；
	// 目标实例
	target.display();
}

// 将实例使用适配器类实现
// render(new TencentMap());
render(new TencentApterMap());
render(new BaiduMap());
```

```js
// 场景2：现有项目使用jquery实现 需要使用类似框架重构。考虑$.ajax不能使用
// 可以使用适配器思想实现，避免大量修改。
$ = {
    ajax() {
        //具体代替逻辑修改
    },
};
```
