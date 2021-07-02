const increaseBtn = document.querySelector('#increase')
const resetBtn = document.querySelector('#reset')
const decreaseBtn = document.querySelector('#decrease')

let count = 0
document.getElementById('num').innerHTML = count;

increaseBtn.addEventListener('click', function(){
    count++; document.getElementById('num').innerHTML = count;
    if (count > 0) {
        document.getElementById('num').style.color = 'green';
        } else if (count === 0) {
            document.getElementById('num').style.color = 'black';
        }
})

decreaseBtn.addEventListener('click', function(){
    count--; document.getElementById('num').innerHTML = count;
    if (count < 0) {
        document.getElementById('num').style.color = 'red'
    }
    else if (count === 0) {
        document.getElementById('num').style.color = 'black';
    }
})

resetBtn.addEventListener('click', function(){
    count = 0; document.getElementById('num').innerHTML = count;
    if (count === 0) {
        document.getElementById('num').style.color = 'black'
    }
})