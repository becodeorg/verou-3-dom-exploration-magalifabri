// Add a title attribute to every element that has the important class, stating This is an important item
const importantClassElems = document.querySelectorAll(".important");

for (elem of importantClassElems) {
    elem.setAttribute("title", "This is an important item");
    // console.log(elem);
}

// Select all the img tags and loop through them. If they have no important class, turn their display property to none
const images = document.querySelectorAll("img");
for (img of images) {
    if (img.hasAttribute("important") === false) {
        img.style.display = "none";
    }
}

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
const pars = document.querySelectorAll("p");
for (par of pars) {
    console.log(par);
    if (par.className) {
        console.log(par.className);
    } else {
        par.style.color = genRandRgbColor();
    }
}

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
function genRandRgbColor() {
    return `rgb(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
}
