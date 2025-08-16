let n1 = parseFloat(prompt("Enter grade N1 (weight 2):"));
let n2 = parseFloat(prompt("Enter grade N2 (weight 3):"));
let n3 = parseFloat(prompt("Enter grade N3 (weight 5):"));

let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

if (media >= 6.8 && media < 7) {
  let extraWork = prompt("Did the student do extra credit? (yes/no)").toLowerCase();
  if (extraWork === "yes") {
    media += 0.2;
    if (media > 10) {
      media = 10;
    }
  }
}

if (media >= 7) {
  alert("Approved. Final average: " + media.toFixed(2));
} else if (media >= 5) {
  let exame = parseFloat(prompt("Enter exam grade:"));
  let finalMedia = (media + exame) / 2;

  if (finalMedia >= 6) {
    alert("Approved in exam. Final average: " + finalMedia.toFixed(2));
  } else {
    alert("Failed. Final average: " + finalMedia.toFixed(2));
  }
} else {
  alert("Failed. Final average: " + media.toFixed(2));
}
