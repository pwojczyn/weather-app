console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);
setTimeout(() => {
  console.log('5000 ms setTimeout');
}, 5000);

setTimeout(() => {
  console.log('1000 ms setTmieout');

}, 1000);

console.log('Finishing up');