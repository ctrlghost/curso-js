let a = parseFloat(prompt("Enter side 1:"));
let b = parseFloat(prompt("Enter side 2:"));
let c = parseFloat(prompt("Enter side 3:"));

if (a + b > c && a + c > b && b + c > a) {

  if (a === b && b === c) {
    alert("Equilateral triangle");
  } else if (a === b || b === c || a === c) {
    alert("Isosceles triangle");
  } else {
    alert("Scalene triangle");
  }
} else {
  alert("Invalid triangle");
}
