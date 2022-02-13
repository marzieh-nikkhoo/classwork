function getTax(fee) {
    var tax = 0.09;
    return fee * tax;
}
function calculateTax() {
    
    var price = document.getElementById('textPrice').value;
    var tax = getTax(price); 
    var total = (Number(price)) + tax;

    document.getElementById('demo').innerHTML = "قیمت نهایی=" + total + "تومان";
    document.getElementById('demo1').innerHTML = "مالیات بر ارزش افزوده=" + tax + "تومان";

}