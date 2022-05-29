function calculateBmi() {
    var weight = document.getElementById('textWeight').value; 
    var height = document.getElementById('textHight').value;
   document.getElementById('demo').innerHTML=getBMI(weight,height);
    }



    function getBMI(weight,height) {
      
        var bmi = weight / (height * height);
        return bmi;
    }
  
    
    
    