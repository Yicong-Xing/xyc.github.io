var myImage = document.querySelector('img'); //获取image元素的引用存放在myImage变量中."document.querySelector(CSS选择符selectors,多个则以逗号分隔)"返回文档中匹配指定的选择器组的第一个元素(使用深度优先先序遍历文档的节点 | 并且通过文档标记中的第一个元素，并按照子节点数量的顺序迭代顺序节点)。
myImage.onclick = function() {  //将myImage变量的"onclick"事件与一匿名函数绑定;onclick 事件会在对象被单击并放开时发生,而"onmousedown"事件是在按下鼠标后发生;匿名函数：function () {}; 使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。
    var mySrc = myImage.getAttribute('src'); //"element.getAttribute(attributename)"通过名称获取属性的值.
    if(mySrc === 'images/1.jpg') {
        myImage.setAttribute ('src','images/2.jpg'); //"element.setAttribute(attributename,attributevalue)";setAttribute() 方法添加指定的属性，并为其赋指定的值,如果这个指定的属性已存在，则仅设置/更改值。
    }
    else {
        myImage.setAttribute ('src','images/1.jpg');
    }
}

var myButton = document.querySelector('button'); //获取button元素的引用存放在myButton变量中.
var myHeading = document.querySelector('h1');

function setUserName() { //函数声明
    var myName = prompt('please enter your name'); //prompt()函数会弹出一个对话框， 有一点像 alert() 只不过 prompt() 需要用户输入数据,，而且在用户点击 OK 后将数据存储在变量里。
    localStorage.setItem('name',myName); //localStorage - 没有时间限制的数据存储;使用 localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，然后将其值设置为包含用户输入的姓名的 myName 变量。
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){ //用一个非运算符（逻辑非）来检查 name 数据是否存在。
    setUserName(); //如果不存在， setUserName() 函数就会运行来创建它。
}
else{
    var storedName = localStorage.getItem('name'); //如果存在（比如用户在之前创建过） 我们通过 getItem()调用存储过的 name 然后将 innerHTML 设置为加上用户姓名的字符串，就像我们在 setUserName()里做的一样。
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName; //innerHTML 属性可以用来获取、修改指定元素内的所有标签和内容。
}

myButton.onclick = function() { //onclick 事件处理器绑定到 按钮 上，这样当我们点击时， setUserName() 函数就会运行。
    setUserName();
}