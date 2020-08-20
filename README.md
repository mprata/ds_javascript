# New Features in ES6/ES2015
1. Default Parameters

    Example of default params in ES6:
    
        var getAccounts = function(limit = 10) {

          ...

        }

        var link = function(height = 50, color = 'red', url = 'http://capitalone.io') {

            ...

        }
  
2. Rest and Spread Parameters

    ES6 Developers can use the spread operator in the following cases:
    
    * Function calls as seen above
    * Array literals, e.g., array2 = […array1, x, y, z]
    * Destructuring
    * new function calls (constructors), e.g., var d = new Date(…dates)
    * push() calls, e.g., arr1.push(…arr2)

3. Template Literals

    In ES6 we can use a new syntax ${NAME} inside of the back-ticked string:
    
        var name = `Your name is ${first} ${last}.`
    
        var url = `http://localhost:3000/api/messages/${id}`
    
4. Multi-line Strings
    
    In ES6 we can use backticks to write multiline strings.
    
5. Destructuring Assignment

    In ES6 we can destructure like below:
    
        var { userId, accountNumber} = $('body').data() 

        var {json} = require('body-parser')

        var {username, password} = req.body
    
    This also works with arrays:
    
        var [col1, col2]  = $('.column'), [line1, line2, line3, , line5] = file.split('\n')
    
6. Enhanced Object Literals

     In ES6 object literals, we can use shorthands for assignment.
     
     We can also set the prototype right there in the __proto__ property 
     
        var serviceBase = {port: 3000, url: 'azat.co'},
      
        getAccounts = function(){return [1,2,3]}
      
        var accountService = {
      
          __proto__: serviceBase,
      
          getAccounts,
      
7. Arrow Functions
8. Promises
9. Block-Scoped Constructs: Let and Const
10. Classes
11. Modules
12. For Of Comprehensions

    We can us for ..in loop for itertaing over keys for something like let test = [1,2,foo:'3'] (expect output: 0, 1, foo ). We can use for ..of for iterating over values directly (expected output: 1,2,'3').
    
    Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its @@iterator method is called with no arguments, and the returned     iterator is used to obtain the values to be iterated.

    Some built-in types have a default iteration behavior, while other types (such as Object) do not. The built-in types with a @@iterator method are:

    * Array.prototype[@@iterator]()
    * TypedArray.prototype[@@iterator]()
    * String.prototype[@@iterator]()
    * Map.prototype[@@iterator]()
    * Set.prototype[@@iterator]()
    
    We can make an Object iterable using below approach:
    
        const iterable1 = {};

        iterable1[Symbol.iterator] = function* () {
          yield 1;
          yield 2;
          yield 3;
        };

        console.log([...iterable1]);
        // expected output: Array [1, 2, 3]
        
        
        let jk = {x:1, y:2};
        jk[Symbol.iterator] = function*() {
            let keys = Object.keys(this);
            for(let i = 0; i < keys.length; i++) {
                yield this[keys[i]];
            }
        }
        for(const val of jk) {
            console.log(val)
        }
        
# Pollyfill for Function.prototype.bind

        Function.prototype.bind = function() {
            const func = this;
            const that = arguments[0];
            let args = [...arguments];
            args.splice(0,1);
            if (typeof func !== 'function') {
                throw new TypeError('Function.prototype.bind - ' +
                       'what is trying to be bound is not callable');
              }
            return function() {
                let funcArgs = [...args, ...arguments];
                return func.call(that, funcArgs);
            }
        }
        
# Prototypal inheritance in javascript

        function vehicle(type, color, engine) {
            this.type = type;
            this.color = color;
            this.engine = engine;
        }

        function car(name) {
            vehicle.call(this, "4 wheeler", "Blue", "1.3ltr");
            this.name = name;
        }

        car.prototype = Object.create(vehicle.prototype);
        
# Pollyfill for Function.prototype.call

        Function.prototype.myCall = function(...args) {
            const func = this;
            if (typeof func !== 'function') {
                throw new TypeError('Function.prototype.myCall - ' +
                    'what is trying to be bound is not callable');
            }
            const ref = args[0];
            if (typeof ref !== 'object') {
                func(...args)
            } else {
                args.splice(0,1);
                const fnName = Symbol();
                ref[fnName] = func;
                ref[fnName](...args)
                delete ref[fnName];
            }
        }
