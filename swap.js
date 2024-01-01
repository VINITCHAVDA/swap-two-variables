function swap() {
    var b1 = document.getElementById("variable1").value;
    var b2 = document.getElementById("variable2").value;
    document.getElementById("print").innerText = " Before swap variable 1=" + b1 + ", variable 2 =" + b2;
    var tamp = b1;
    b1 = b2;
    b2 = tamp;
    document.getElementById("result").innerText = " after swap variable 1=" + b1 + ", variable 2 =" + b2;
    
  }