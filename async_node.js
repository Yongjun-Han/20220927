// let first = setTimeout(() => {
//   console.log("1번 setTimeout")
  
//   let second = setTimeout(() => {
//     console.log("2번 setTimeout")
    
//     let third = setTimeout(() => {
//       console.log("3번 setTimeout")

//       let fourth = setTimeout(() => {
//         console.log("4번 setTimeout")
//       }, 1000);

//     }, 1000);
    
//   }, 2000);
  
// }, 3000);


let test = new Promise((resolve, reject)=> {
  console.log(typeof resolve);
  console.log(typeof reject);
  console.dir(resolve);
  // console.dir(typeof reject);

});
console.dir(test);