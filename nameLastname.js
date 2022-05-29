function addName(){
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
   
    document.getElementById("demo").innerHTML=getName(name,lastName);               
}
function getName(name,lastName){
    const name1 =name+'  '+lastName;
    return name1;
}
