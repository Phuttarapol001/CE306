let productP = 800;
let discountP = 30;

let discount = productP *(discountP /100);
let pricetopay = productP - discount;


if (pricetopay <= 0){
    pricetopay = 0;
    
}
else if (pricetopay <= 500){
    pricetopay += 50;
}
else {
    pricetopay = pricetopay- (pricetopay * 0.1);
}

console.log("ราคาที่ต้องจ่าย:", pricetopay , "บาท"  );