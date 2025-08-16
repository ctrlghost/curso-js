let x = parseFloat(prompt("Enter x coordinate:"));
let y = parseFloat(prompt("Enter y coordinate:"));

if (x === 0 && y === 0) {
    alert("Origin");

} else if (x === 0) {
    alert("Y-axis");
} else if (y === 0) {
    alert("X-axis");
} else if (x > 0 && y > 0){
    alert("Quadrant 1(Q1)");
} else if (x < 0 && y > 0){
    alert("Quadrant 2(Q2)");
} else if (x < 0 && y < 0 ){
    alert("Quadrant 3(Q3)");
} else if (x > 0 && y < 0){
    alert("Quadrant 4(Q4)")
}