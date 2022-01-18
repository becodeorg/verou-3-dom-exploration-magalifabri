// Use childNodes to list all the children from the <ul>
const ulElem = document.querySelector("ul");
// Write a for loop to iterate over every child. In this loop:
for (const child of ulElem.childNodes) {
    // Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
    if (child.nodeType === 1) {
        // Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
        if (child.textContent === "Fast and Furious") {
            ulElem.insertBefore(child, ulElem.childNodes[0]);

            // Since Fast and Furious is the most important franchise ever, add a class .important to the element
            child.classList.add("important");
        }

        // Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
        child.addEventListener("click", event => {
            if (child.textContent === "Fast and Furious") {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            } else {
                alert(child.textContent);
            }
            // Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.
        });
        // (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
        for (childToCompare of ulElem.childNodes) {
            if (child.isEqualNode(childToCompare)
            && child.previousSibling !== childToCompare.previousSibling) {
                ulElem.removeChild(childToCompare);
            }
        }
    }
}

// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
let numFFEntries = 1;
document.body.addEventListener("keyup", event => {
    const liElems = document.querySelectorAll("li");
    if (event.key === 'r') {
        // i = numFFEntries, because we don't want to reposition FF entries
        for (let i = numFFEntries; i < liElems.length; i++) {
            const li = liElems[i];
            // = + numFFEntries, because we want the lowest number to be that high, so we don't put something before FF
            // .length - numFFEntries, to not go beyond the end of the array
            const randNum = numFFEntries + Math.floor(Math.random() * (liElems.length - numFFEntries));
            ulElem.insertBefore(li, liElems[randNum]);
        }
    }
    // (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
    else if (event.key === 'd') {
        const FFLiElem = document.querySelector(".important");
        const FFClone = FFLiElem.cloneNode(true);
        ulElem.insertBefore(FFClone, ulElem.childNodes[0]);
        numFFEntries++;
    }
})

// Create a new <div> before the list, using createElement and insertBefore
const div = document.createElement("div");
document.body.insertBefore(div, document.body.childNodes[0])

// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
const selectElem = document.createElement("select");
selectElem.innerHTML = 
`<option>select</option>
<option value="important-franchises">important franchises</option>
<option value="normal-franchises">normal franchises</option>`;
div.append(selectElem);

// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
const liElems = document.querySelectorAll("li");
selectElem.addEventListener("change", event => {
    const selectedOption = event.target.value;
    if (selectedOption === "important-franchises") {
        for (const li of liElems) {
            if (li.classList.contains("important") === false) {
                li.style.display = "none";
            }
        }
    } else {
        for (const li of liElems) {
            li.style.display = "list-item";
        }
    }
});
