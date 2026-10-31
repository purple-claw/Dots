const sleep = (ms) => new Promise(
    (r) => setTimeout(r, ms)
);

let rng = 0, mxRng = 0;
function wrk(){
    rng++;
    mxRng = Math.max(mxRng, rng)
    return sleep(35).then(
        () => { rng-- }
    );
};
const iv = setInterval(wrk, 10);
setTimeout(() => clearInterval(iv), 200);