function checkCombination(num1, num2, num3) {
    // Validate range
    const nums = [num1, num2, num3];
    if (nums.some(n => n < 1 || n > 6)) {
      return "Invalid input: numbers must be between 1 and 6.";
    }
  
    nums.sort((a, b) => a - b);
  
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
      return "Three of a kind";
    }
  
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
      return "Pair";
    }
  
    if (nums[1] === nums[0] + 1 && nums[2] === nums[1] + 1) {
      return "Sequence";
    }
  
    return "No combination";
  }
  