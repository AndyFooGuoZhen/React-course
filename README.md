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

# Async await problems

## Cant use top level await in react, can only be used in useEffect 
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
