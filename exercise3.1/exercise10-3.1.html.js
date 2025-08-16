function calculatePlan(planCode, wantsExtraInternet) {
    let planName;
    let basePrice = 0;
    let totalPrice = 0;
    let message = "";
  
    switch (planCode) {
      case 1:
        planName = "Basic";
        basePrice = 39;
        if (wantsExtraInternet.toLowerCase() === "yes") {
          message = "Extra internet is not available for the Basic plan.";
          totalPrice = basePrice; //
        } else {
          totalPrice = basePrice;
          message = `Selected: ${planName} - Total: R$ ${totalPrice}`;
        }
        break;
  
      case 2:
        planName = "Plus";
        basePrice = 59;
        totalPrice = basePrice + (wantsExtraInternet.toLowerCase() === "yes" ? 15 : 0);
        message = `Selected: ${planName} - Total: R$ ${totalPrice}`;
        break;
  
      case 3:
        planName = "Pro";
        basePrice = 79;
        totalPrice = basePrice + (wantsExtraInternet.toLowerCase() === "yes" ? 15 : 0);
        message = `Selected: ${planName} - Total: R$ ${totalPrice}`;
        break;
  
      default:
        message = "Invalid plan code.";
    }
  
    return message;
  }