

//let 没有声明提升
let a = 10;
console.log("a = ", a);

if (a){
  //let 以 {}作用域的划分
  let b = 20;
}

// console.log("b = ", b);


for (let i = 0; i < 10; i++) {
}

// console.log(i);
