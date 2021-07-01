
  let a = 1;
  
 
  document.getElementById("value").innerHTML = a;
  
  function myFunction2() {
  document.getElementById("value").innerHTML = 0*a;
  }
  function myFunction1() {
  document.getElementById("value").innerHTML = --a;
  }
  function myFunction3() {
  document.getElementById("value").innerHTML = ++a;
  }
  
  let b = 0*a;
  let c = ++a;
  let d = --a;
  

if (0*a === 0) {document.getElementById("value").style.color = 'Green';
} else if (--a < 0) {document.getElementById("value").style.color = 'red';
} 
if (++a > 0) {document.getElementById("value").style.color = 'black';
} 