function calculateHight(){
    var r=33;
    var p=3.14;
    var h=2*p*r;
  
   document.getElementById('demo').innerHTML= h;
   
    }
    function calculateArea(){
    var r=33;
    var p=3.14;
    var s=p*r*r;
  
   document.getElementById('demo').innerHTML= s;
   
    }
    function calculateBmi() {
    var w = document.getElementById('textWeight').value; 
    var h = document.getElementById('textHight').value; 
    var bmi = (w / (h * h)); 
  
   document.getElementById('demo').innerHTML=bmi;
    }