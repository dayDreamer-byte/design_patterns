# JavaScript 组合模式

> 组合模式（Composite Pattern）是一种结构性设计模式。\
> 它允许我们使用对象组合的方式来构建复杂的对象结构。组合模式通过将对象组织成树形结构，使得单个对象和组合对象可以被一致地对待。

组合模式示例

```js
const Folder = function (folder) {
	this.folder = folder;
	this.lists = [];
};

Folder.prototype.add = function (res) {
	this.lists.push(res);
};
Folder.prototype.scan = function () {
	console.log("扫描", this.folder, "文件夹");
	if (this.lists.length > 0) {
		this.lists.forEach((item) => {
			item.scan();
		});
	}
};

const File = function (file) {
	this.file = file;
};

File.prototype.scan = function () {
	console.log("扫描", this.file, "文件");
};

const root = new Folder("root");
const HTMLFOLDER = new Folder("HTML");
const JSFOLDER = new Folder("JS");
const CSSFOLDER = new Folder("CSS");

const INDEXHTML = new File("INDEXHTML");
const HOMEHTML = new File("HOMEHTML");
const INDEXCSS = new File("INDEXCSS");
const HOMECSS = new File("HOMECSS");
const INDEXJS = new File("INDEXJS");
const HOMEJS = new File("HOMEJS");

HTMLFOLDER.add(INDEXHTML);
HTMLFOLDER.add(HOMEHTML);

CSSFOLDER.add(INDEXCSS);
CSSFOLDER.add(HOMECSS);

JSFOLDER.add(INDEXJS);
JSFOLDER.add(HOMEJS);

root.add(HTMLFOLDER);
root.add(JSFOLDER);
root.add(CSSFOLDER);
root.scan();
```

> [树形菜单栏-组合模式](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/016-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/01.html)

> [动态加载树形结构数据](https://github.com/dayDreamer-byte/reading-notes/blob/main/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/016-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/02.html)
