function calculateShippingCost(weight, distance) {

    let basePrice;
    if (weight <= 2) {
      basePrice = 12;
    } else if (weight <= 10) {
      basePrice = 25;
    } else {
      basePrice = 40;
    }
  
    let additionalCharge;
    if (distance <= 100) {
      additionalCharge = 0;
    } else if (distance <= 500) {
      additionalCharge = 15;
    } else {
      additionalCharge = 30;
    }
  
    const total = basePrice + additionalCharge;
    retu
}