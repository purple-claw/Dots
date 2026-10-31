const b0 = Date.now()
const ticks = [];
const iv = setInterval(() => ticks.push(Date.now() - b0), 5);
while (Date.now() - b0 < 50) {} // 50ms of blocking work
setTimeout(() => {
    clearInterval(iv);
    console.log(JSON.stringify(ticks))
}, 100);
