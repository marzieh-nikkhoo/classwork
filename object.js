
const country={
    location:"europe",
    countryName:"spain",
    population:"50" ,
    countryNumber:"+34",
    };
    
   function fullContactNumber(){
    const phoneNumber=document.querySelector("#textNumber").value;
    document.getElementById("demo").innerHTML=country.countryNumber+phoneNumber;
   
    };
  


