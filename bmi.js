function calculateBmi(weight,height) {
             
    return weight / (height * height);
 }
 function getBmi(){
     let bmi=calculateBmi(70,1.81);


if(bmi<18.5){

document.getElementById("demo").innerHTML="underweight!";
}
if(bmi>=18.5 && bmi<24.5){

document.getElementById("demo").innerHTML="Ideal weight!";
}
if(bmi>=24.5 && bmi<29.9){

document.getElementById("demo").innerHTML="overweight!";
}
if(bmi>=29.9){

document.getElementById("demo").innerHTML="fat!";
}


}
