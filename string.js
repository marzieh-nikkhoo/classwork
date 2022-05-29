function addProduct(){
    const productName = document.getElementById("pName").value;
   
    document.getElementById("demo").innerHTML+=getNameProduct(productName);               
}
function getNameProduct(productName){
    const product =`<div class="productContainer">
    <h3>${productName}</h3>
    </div>`
    return product;
}
