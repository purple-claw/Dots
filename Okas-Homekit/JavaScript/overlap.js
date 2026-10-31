const slp = (ms) => new Promise((r) => setTimeout(r, ms));

const rng = 0;
const mxRng = 0;

function wrk(){
    rng++;
    mxRng = Math.max(mxRng, rng);
    return slp(50).then(
        () => {
            rng--
        }
    );
};

const iv = setInterval(wrk, 10);
setTimeout(() => clearInterval(iv), 100);