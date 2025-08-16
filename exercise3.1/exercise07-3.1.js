function evaluateLoan(salary, employmentMonths, installment, isNegative) {
    const reasons = [];
  
    if (isNegative.toLowerCase() === "yes") {
      reasons.push("Client is in default");
    }
  
    if (employmentMonths < 6) {
      reasons.push("Insufficient employment duration");
    }
  
    if (installment > 0.3 * salary) {
      reasons.push("Installment exceeds 30% of salary");
    }
  
    if (reasons.length === 0) {
      return "Loan approved";
    } else {
      return "Loan denied: " + reasons.join("; ");
    }
  }
  