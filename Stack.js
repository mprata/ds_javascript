class Stack{
    constructor(){
        this.top = -1;
        this.stack = {};
    }

    push(data){
        this.top = this.top+1;
        this.stack[this.top] = data;
    }

    pop(){
        if(!this.isEmpty()){
            var result = this.stack[this.top];
            this.top = this.top-1;
            return result;
        }
    }

    topElement(){
        return this.stack[this.top];
    }

    isEmpty(){
        if(this.top == -1){
            return true;
        } else {
            return false;
        }
    }

    size(){
        return this.top+1;
    }

}

const stack = new Stack();
// stack.push(12);
// stack.push(13);
// stack.push(89);
// console.log(stack.top);
// console.log(stack.size());
// console.log(stack.topElement());
// stack.pop();
// console.log(stack.top);
// console.log(stack.size());
// console.log(stack.topElement());
//balanced paranthese problem
var str = "[()]{}{[()()]()}{)";
var parantheseMapping = {
    ")" : "(",
    "}" : "{",
    "]" : "["
};
for(let i = 0; i<str.length; i++){
    if(str[i] === "(" || str[i] === "{" || str[i] === "["){
        stack.push(str[i]);
    } else if(str[i] === ")" || str[i] === "}" || str[i] === "]"){
        var sPopped = stack.pop();
        //console.log(sPopped + " " +parantheseMapping[str[i]]);
        if(sPopped !== parantheseMapping[str[i]]){
            stack.push(sPopped);
            break;
        }
    }
}
if(stack.top == -1){
    console.log("Balanced string");
} else {
    console.log("It's not balanced");
}

module.exports = Stack;