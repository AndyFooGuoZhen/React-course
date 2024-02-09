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
