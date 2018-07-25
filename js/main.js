let years           = document.getElementById('years');
let months          = document.getElementById('months');
let days            = document.getElementById('days');
let plans           = document.getElementById('plans');
let write           = document.getElementById('write');
let print           = document.getElementById('print');
let out             = document.getElementById('output');



let base = {};

write.addEventListener('click', function () {
    base.first = plans.value;
    plans.value = ' ';
    console.log(base);
});

print.addEventListener('click', function () {
    out.innerHTML = base.value;
    plans.value = ' ';

    out.classList.toggle('output');
    // if (plans.value == '') {
    //     out.classList.remove('output');
    // }
    //     out.classList.add('output');
});



