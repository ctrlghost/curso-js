function isOpen(dayOfWeek, hour, isHoliday) {

    if (dayOfWeek < 1 || dayOfWeek > 7) {
      return "Invalid day of the week.";
    }
    if (hour < 0 || hour > 23) {
      return "Invalid hour.";
    }
  
    if (isHoliday.toLowerCase() === "yes" && dayOfWeek >= 2 && dayOfWeek <= 6) {
      return "Closed (holiday)";
    }
  
    if (dayOfWeek === 1) {
      return "Closed (Sunday)";
    }
  
    if (dayOfWeek >= 2 && dayOfWeek <= 6) {

      if (hour >= 9 && hour < 18) {
        return "Open";
      } else {
        return "Closed";
      }
    }
  
    if (dayOfWeek === 7) {
  
      if (hour >= 9 && hour < 13) {
        return "Open";
      } else {
        return "Closed";
      }
    }
  
    return "Closed";
  }
  
