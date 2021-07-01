let sum = 0

function myFunction3() {
    sum++
    var inc = document.getElementById('value')
    inc.innerHTML = `${sum}`;
    checker()

}
function myFunction1() {
    sum--
    inc = document.getElementById('value');
    inc.innerHTML = `${sum}`;
    checker()

}
function myFunction2() {
    sum = 0
    inc = document.getElementById('value')
    inc.innerHTML = `${sum}`;
    checker()
}

function checker() {
    if (sum > 0) {
        inc.style.color = 'green';
    } else if (sum < 0) {
        inc.style.color = 'red';
    } else { inc.style.color = 'black'; }
} 