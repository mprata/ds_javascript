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
