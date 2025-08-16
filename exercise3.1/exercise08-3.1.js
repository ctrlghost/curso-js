function evaluateSpeed(speed, speedLimit) {
    if (speed <= speedLimit) {
      return "Within the limit";
    }
  
    const excess = speed - speedLimit;
    const excessPercent = (excess / speedLimit) * 100;
  
    if (excessPercent <= 20) {
      return "Minor infraction";
    } else if (excessPercent <= 50) {
      return "Serious infraction";
    } else {
      return "Very serious infraction";
    }
  }
  
  