// Modify the script.js to create a new <section> with a random background-color for each learner in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
const articleElem = document.querySelector("article");

const learners = [
    "Ahmad",
    "Jian",
    "Michael",
    "Dante",
    "Muhammet",
    "Nicolas",
    "Jordy",
    "Beryl",
    "Cynthia",
    "Ruben",
    "Magali",
    "Jawid",
    "Koen",
    "Kevin",
    "Benjamin",
    "Dery",
    "Michelle",
    "Colin",
    "Feruz",
    "Pieter",
    "Ellen",
    "Sara"
];

/*
VERSION 1: slightly shuffles learners

for (learner of learners) {
    const newSection = document.createElement("section");
    const newTextNode = document.createTextNode(learner);
    newSection.appendChild(newTextNode);
    articleElem.appendChild(newSection);

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    newSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // If the background is dark the text should be white, if the background is light the text should be black
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    if (luminance < 120) {
        newSection.style.color = "white";
    }
    
    // Find a way so that everytime you load the page the order of the elements changes!
    if (Math.floor(Math.random() * 2) === 1) {
        if (newSection.previousElementSibling.nodeName != "H2") {
            articleElem.insertBefore(newSection, newSection.previousElementSibling);
        }
    }
}
*/

// VERSION 2: completely shuffles learners
while (learners.length > 0) {
    const newSection = document.createElement("section");
    const randNum = Math.floor(Math.random() * learners.length);
    const newTextNode = document.createTextNode(learners[randNum]);
    learners.splice(randNum, 1);
    
    newSection.appendChild(newTextNode);
    articleElem.appendChild(newSection);

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    newSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // If the background is dark the text should be white, if the background is light the text should be black
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    if (luminance < 120) {
        newSection.style.color = "white";
    }
}

// https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color
