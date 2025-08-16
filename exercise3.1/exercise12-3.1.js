function calculateElectricityBill(kWh, isSocialTariff) {
    if (kWh <= 0) {
      return "Invalid consumption: kWh must be greater than 0.";
    }
  
    let rate;
  
    if (kWh <= 100) {
      rate = 0.60;
    } else if (kWh <= 200) {
      rate = 0.75;
    } else {
      rate = 0.90;
    }
  
    let total = kWh * rate;
  
    if (isSocialTariff.toLowerCase() === "yes" && kWh <= 150) {
      total *= 0.85;
    }
  
    return `Total bill: R$ ${total.toFixed(2)}`;
  }
  
