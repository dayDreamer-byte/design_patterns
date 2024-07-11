# Javascript 相关的设计模式

> -   [深入设计模式](https://refactoringguru.cn/design-patterns)
> -   课程信息：[千锋教育 web 前端进阶 JS 内功修炼之 JavaScript 设计模式](https://www.bilibili.com/video/BV1MP4y127kd/?p=3&share_source=copy_web&vd_source=14e1927630ac217da52cc6bc365f04ec)
> -   结束时间：23/11/12

> -   设计模式是我们在解决问题的时候针对特定问题给出的简洁而优化的处理方案
> -   最核心的思想是：封装变化。
> -   将变与不变分离，确保变化的部分灵活、不变的部分稳定。

## 课程涉及 20 种 JavaScript 相关设计模式

> ### 创建型模式，关注如何实例化对象，以及如何将对象组织成更大的结构。
>
> -   [001-构造器模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/001-%E6%9E%84%E9%80%A0%E5%99%A8%E6%A8%A1%E5%BC%8F)
> -   [002-原型模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/002-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F)
> -   [003-class 模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/003-Class%E6%A8%A1%E5%BC%8F)
> -   [004-工厂模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/004-%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F)
> -   [005-抽象工厂模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/005-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F)
> -   [006-建造者模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/006-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F)
> -   [007-单例模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/007-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)

> ### 结构型模式，关注对象的组合和类之间的关系，帮助我们将多个对象组合在一起以形成更大的结构。
>
> -   [008-装饰器模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/008-%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F)
> -   [009-适配器模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/009-%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F)
> -   [011-代理模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/011-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F)
> -   [015-桥接模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/015-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F)
> -   [016-组合模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/016-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F)

> ### 行为型模式，关注对象之间的职责分配和交互的设计模式。它们涉及到对象的运行行为，而不仅仅是对象结构。
>
> -   [010-策略模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/010-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F)
> -   [012-观察者模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/012-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F)
> -   [013-发布订阅模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/013-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F)
> -   [014-模块化模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/014-%E6%A8%A1%E5%9D%97%E5%8C%96%E6%A8%A1%E5%BC%8F)
> -   [017-命令模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/017-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F)
> -   [018-模板方法模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/018-%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F)
> -   [019-迭代器模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/019-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F)
> -   [020-职责链模式](https://github.com/dayDreamer-byte/reading-notes/tree/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/020-%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F)

# 设计模式终极

[⭐⭐⭐⭐⭐ 有能力看这里](https://refactoringguru.cn/design-patterns)
