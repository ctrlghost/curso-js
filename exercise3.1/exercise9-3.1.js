function getGreeting(hour) {
    if (hour < 0 || hour > 23) {
      return "Invalid hour";
    }
  
    if (hour >= 5 && hour <= 11) {
      return "Good morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }
