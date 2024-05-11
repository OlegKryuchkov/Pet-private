let count = 0;
const intervalId = setInterval(() => {
  console.log(count++);
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
