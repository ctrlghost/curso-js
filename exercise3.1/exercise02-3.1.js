let value = parseFloat(prompt("Enter the purchase value:"));
let coupon = prompt('Enter coupon ("FRETEGRATIS", "DESC10", or leave empty):').toUpperCase();

let shipping = 25;

let discount = 0;

if (value >= 500) {
  discount = 0.15;
} else if (value >= 300) {
  discount = 0.10;
} else if (value >= 150) {
  discount = 0.05;
}

let discountedValue = value - (value * discount);

if (coupon === "DESC10") {
  discountedValue -= discountedValue * 0.10;
}

if (coupon === "FRETEGRATIS") {
  shipping = 0;
}

let finalValue = discountedValue + shipping;

if (finalValue < 0) {
  alert("Final value was negative. Adjusted to 0.");
  finalValue = 0;
}

alert(
  "Original value: R$ " + value.toFixed(2) +
  "\nDiscounted value: R$ " + discountedValue.toFixed(2) +
  "\nShipping: R$ " + shipping.toFixed(2) +
  "\nFinal amount to pay: R$ " + finalValue.toFixed(2)
);
