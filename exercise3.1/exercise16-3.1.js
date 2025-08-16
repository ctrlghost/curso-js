function calculateBill(billAmount, serviceQuality, numPeople, serviceCharge) {
    if (numPeople < 1) {
      return "Invalid input: number of people must be at least 1.";
    }
  
    let tipPercent;
  
    switch (serviceQuality) {
      case 1:
        tipPercent = 0.05;
        break;
      case 2:
        tipPercent = 0.10;
        break;
      case 3:
        tipPercent = 0.15;
        break;
      default:
        return "Invalid service quality. Choose 1 (bad), 2 (okay), or 3 (great).";
    }
  
    let tip = billAmount * tipPercent;
    let total = billAmount + tip;
  
    if (serviceCharge.toLowerCase() === "yes") {
      total += billAmount * 0.10; // Add 10% service charge
    }
  
    let perPerson = total / numPeople;
  
    return {
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2)
    };
  }
