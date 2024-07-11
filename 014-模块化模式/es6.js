let count = 0;

const increment = function () {
    return ++count;
};

const decrement = function () {
    return --count;
};

export { increment, decrement };

export default function(){
    console.log("default fn")
}
export default class MyClass{
    constructor(){
        console.log("default myClass");
    }
}
