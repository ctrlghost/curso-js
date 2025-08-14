let hours = parseFloat(prompt("Enter parking time in hours (e.g., 3.5, 5):"));
let total = 0;

if (hours <= 1) {
  total = 12;
} else if (hours < 4) {
  let extraHours = Math.ceil(hours - 1);
  total = 12 + (extraHours * 6);
} else if (hours === 4) {
  total = 30;
} else {
  let extraHours = Math.ceil(hours - 4);
  total = 30 + (extraHours * 5);
}

alert("Total parking cost: R$ " + total.toFixed(2));
