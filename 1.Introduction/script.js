console.log(document.title);

document.title = "Modifying the DOM";

// document.body.setAttribute("style","background-color: #FF69B4");
// OR
document.body.style.backgroundColor = "#FF69B4";

document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

for (const child of document.body.children) {
    console.log(child);
}
