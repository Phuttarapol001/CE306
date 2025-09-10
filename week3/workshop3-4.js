let products = [
    {price: "600",discount: "20"},
    {price: "500",discount: "10"},
    {price: "400",discount: "30"},
    {price: "700",discount: "15"},
    {price: "300",discount: "25"},
    
];

function calculateTotal(){
    let total =0;
    products.forEach(function(product){
        priceAfterDiscount = product.price - (product.price * product.discount / 100);
    total += priceAfterDiscount;
    });
    console.log("Total price after discount:"+ total);
}
calculateTotal();