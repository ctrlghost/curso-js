function calculateTicketPrice(age, isStudent) {
    let priceType;
    let reason = "";
  
    if (age < 12) {
      priceType = "Half price";
      reason = "Under 12 years old";
    } else if (age >= 60) {
      priceType = "Half price";
      reason = "60 years or older";
    } else if (isStudent.toLowerCase() === "yes") {
      priceType = "Half price";
      reason = "Student";
    } else {
      priceType = "Full price";
      reason = "No discount criteria met";
    }
  
    return `${priceType} - Rule applied: ${reason}`;
  }
  