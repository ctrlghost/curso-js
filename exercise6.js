const components = [
    { name: "Motherboard", model: "ASUS ROG STRIX B550-F", price: 180 },
    { name: "Graphics Card", model: "NIDIA RTX 4070", price: 600 },
    { name: "Processor", model: "AMD Ryzen 7 5800X", price: 320 },
    { name: "RAM", model: "Corsair Vengeance 16GB DDR4", price: 80},
    { name: "Power Supply", model: "EVGA 600W Bronze", price: 60 }
];

console.log("Computer Components and Prices:");
console.log("--------------------------------");

components.forEach(component => {
    console.log(`${component.name}: ${component.model} - $${component.price}`);
});

const total = components.reduce((sum, comp) => sum + comp.price, 0);
console.log("--------------------------------");
console.log(`Total Cost: $${total}`);