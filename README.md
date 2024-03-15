# Promises

# Creating a promise
```
let p = new Promise((resolve, reject)=>{
  let a = 1 + 1;

  if(a==2){
    resolve("Success");
  }else{
    reject("error");
    }
  }
);
```

# Working with a promise
```
p.then((result)=>{
  console.log("this is a " , result);  // promise would return this
}).catch((message)=>{
  console.log("this is a ", message)  // if code in promise is let a = 1+2, promise would return this
});
```

# Reject will always be handled by a .catch method
```
Suppose condition for p is a==3 instead of a==2,

let pResult = await p;
console.log(pResult); // will be empty here

p.then((result)=>{
  console.log("this is a " , result);  // will not reach here
}).catch((message)=>{
  console.log("this is a ", message)  // prints here
});
```

# Async await problems

## Can't use top level await in react, can only be used in useEffect 
NOTE: we cant make useEffects's arrow function as async as well , must follow the convention below to call an async function.


```
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const App = () => {
  const [message, setMessage] = useState("");
  
  let p = new Promise((resolve, reject)=>{
    let a = 1 + 1;
  
    if(a==2){
      resolve("Success");
    }else{
      reject("error");
      }
  }
  );
  
  useEffect(()=>{
    async function hello(){
      let pResult = await p;
      setMessage(pResult)
    }
    hello();

  },[])
  
  return (
  <>
    {message}
  </>
    
  )
}
```

# Complex and Nested promises

```
let p =  new Promise((resolve, reject)=>{
    let a = 1 + 1;
  
    if(a == 2){ resolve("Success from p"); }

    reject("error from p");
    }
  );
  
  let bbb = new Promise((resolve, reject)=>{
      p.then((result)=>{
              console.log(result); // Success from p
              resolve(result + " and returned from b");
              })
              .catch((err)=>{
                 console.log(err); // error from p
                 resolve(err);
               }); 
            }
  );


  useEffect(()=>{
    async function hello(){
      let bbbResult = await bbb;
      console.log("is "+ bbbResult); // Success from p and returned from b
    }
    hello();
  },[]);

```
Explanation:

p is a promise, if it resolves it returns "Success from p", else it rejects to "error from p"

In the useEffect, we await bbb , meaning we try to resolve the bbb promise

bbb is a promise that calls p, if p resolves, it prints "success from p" and resolves to "Sucess from p and resolved from b".

else it rejects

In this case, the outcome would be "Success from p and resolved from b"


## Automatically passing result from previous promise to current resolve

```
let p =  new Promise((resolve, reject)=>{
    let a = 1 + 1;
  
    if(a == 2){ resolve("Success from p"); }

    reject("error from p");
    }
  );
  
  let bbb = new Promise((resolve, reject)=>{
      p.then(resolve) 
              .catch((err)=>{
                 console.log(err); // error from p
                 resolve(err);
               }); 
            }
  );
```

Instead of destructuring the result of promise p we can automatically do so like this as well. The resolve from bbb takes the resolved value from p and is used as the argument for the resolve function of bbb.



