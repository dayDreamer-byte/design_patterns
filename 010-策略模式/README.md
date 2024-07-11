# JavaScript 策略模式

> 策略模式（Strategy Pattern）是一种行为型设计模式。\
> 就是定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

场景：根据评级计算员工年终奖

```js
//定义策略管理
const bonus = {
	A: function (money) {
		return money * 3;
	},
	B: function (money) {
		return money * 2;
	},
};

function calBonus(level, money) {
	// 不使用策略模式，相对麻烦，不好维护，易读性差
	// if (level === "A") {
	//     return money * 3;
	// }
	// if (level === "B") {
	//     return money * 2;
	// }
	// 使用策略模式
	return bonus[level](money);
}
```
