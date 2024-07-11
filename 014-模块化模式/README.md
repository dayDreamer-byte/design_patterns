# JavaScript 模块化模式

> 模块化模式（Modular Pattern）是一种组织和管理 JavaScript 代码的方法，它将代码划分为独立的模块，并定义了模块之间的依赖关系和导出接口。模块化能够提供更好的代码封装、复用和可维护性。

es5 模块化

```js
// 提供对象公共/私有的方法和变量。避免作用域变量污染。
// 采用闭包实现模块化
var numer = (function () {
	// 私有变量
	var count = 0;
	return {
		// 公共方法
		increment() {
			return ++count;
		},
		// 公共方法
		decrement() {
			return --count;
		},
		// 公共方法
		reset() {
			count = 0;
		},
	};
})();
numer.increment(); // count == 0
numer.increment(); // count == 1
numer.increment(); // count == 2
```

es6 模块化

```js
/**
 * 注意事项
 * 1.每个模块都是单独的作用域，不会污染全局命名空间。
 * 2.模块中的变量、函数或对象只有在使用export关键字导出后才能被其他模块使用。
 * 3.在导入模块时，可以使用不同的导入方式，根据需要选择导入整个模块或部分成员，并且可以为导入的成员指定别名以避免命名冲突。
 * es6导入导出的几种方式
 * 1.
 *  基本导出:
 *  使用export导出一个或多个变量、函数或对象;
 *  export const name = ""; // 导出一个变量
 *  export function greet(){}; // 导出一个函数
 *  export default {name,greet}; // 默认导出
 *  基本导入:
 *  使用import导入一个或多个变量;
 *  import {name,greet} from './module'; // 导入多个变量
 *  import {fullName as name, fn as greet} from './module.js'; // 别名导入
 *  import moduleTarget from './module'; // 默认导入 只接收export default;
 * 2.
 *  命名导出:
 *  使用as关键字给导出的变量指定一个别名;
 *  export {name as fullName};
 *  命名导入:
 *  使用as关键字给导入的变量指定一个别名;
 *  import {fullName as name} from './module.js';
 * 3.
 *  默认导出: 在一个模块中，只能有一个默认导出
 *  export default function() {}
 *  export default class MyClass {}
 *  默认导入:
 *  import moduleTarget from './module';
 * 4.
 *  统一导出:
 *  export * from './module'
 *  统一导入:
 *  import * as module from './module';
 **/
<script type="module">
	// es6模块化 需要运行服务演示，否则报错 已被CORS策略阻止。 // 这里的count 也是es6js模块私有的 import{" "}
	{(increment, decrement)} from "./es6.js";
</script>
```

> [es6 导出示例](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/014-%E6%A8%A1%E5%9D%97%E5%8C%96%E6%A8%A1%E5%BC%8F/es6.js)
