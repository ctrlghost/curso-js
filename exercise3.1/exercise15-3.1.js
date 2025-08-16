function checkStock(current, minimum){
    if (current <= 0){
        return "Out of stock";
    } else if (current <= minimum){
        return "Crtically low stock";
    } else if (current <= minimum * 2){
        return "Low stock";
    } else return "In stock";
}