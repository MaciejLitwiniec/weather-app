
// //promises are available from ES6
// //promise is pending when is triggered and waiting
// //promise is settled when its either resolved (fulfilled) or rejected
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       //resolve('It worked');
//       reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// //first argument for Success
// somePromise.then((message) => {
//   console.log('Success: ', message);
// //second argument for Failure
// },(errorMessage) => {
//   console.log('Error: ', errorMessage);
// });


var asyncAdd = (a, b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};


asyncAdd(5, 7).then((res) => {
  console.log('Result: ', res);
  //promise chaining
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45. ', res);
}).catch((errorMessage) => {
  //error handler
  console.log(errorMessage);
});
