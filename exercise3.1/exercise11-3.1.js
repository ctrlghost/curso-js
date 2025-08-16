function isValidDate(day, month, year) {

    if (month < 1 || month > 12) {
      return "Invalid date";
    }
  
  
    let maxDays;
  
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        maxDays = 31;
        break;
      case 4: case 6: case 9: case 11:
        maxDays = 30;
        break;
      case 2:
     
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        maxDays = isLeap ? 29 : 28;
        break;
    }
  
    if (day >= 1 && day <= maxDays) {
      return "Valid date";
    } else {
      return "Invalid date";
    }
  }
