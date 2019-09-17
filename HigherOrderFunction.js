//Higher Order Function
function repeat(fn, n) {
  
    for(let i=0; i<n; i++){
      fn();
    }
  }
  repeat(hello, 5);
  repeat(goodbye, 6);
  
  function hello() {
    console.log('Hello world');
  }
  
  function goodbye() {
    console.log('Goodbye world');
  }