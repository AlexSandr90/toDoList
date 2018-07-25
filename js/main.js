let years           = document.getElementById('years');
let months          = document.getElementById('months');
let days            = document.getElementById('days');
let plans           = document.getElementById('plans');
let write           = document.getElementById('write');
let print           = document.getElementById('print');
let out             = document.getElementById('output');

let writeCount = parseInt(write.value);


let base = {};

write.addEventListener('click', getWrite);

print.addEventListener('click', getPrint);


function getWrite() {

    base.first = plans.value;
    
    // if (writeCount === '1') {
    //     base.first = plans.value;
    // }
    // if (writeCount === '2') {
    //     base.second = plans.value;
    // }
    plans.value = ' ';
    console.log(base);
}

function getPrint() {
    out.innerHTML = Object.values(base);
    plans.value = ' ';
    console.log(base);

    out.classList.toggle('output');
}


