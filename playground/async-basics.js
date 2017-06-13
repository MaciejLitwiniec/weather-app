console.log('starting app');

//callback function
//program will proceed and come back to function once function finish
setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('second callback');
}, 0);

console.log('finishing app');
