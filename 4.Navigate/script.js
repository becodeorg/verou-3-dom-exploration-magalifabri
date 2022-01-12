// Modify the script.js, do not create any new nodes!

// Select the last child of the <ol> tag and put it at the beginning of the list
const OlElem = document.querySelector("ol");
OlElem.insertBefore(OlElem.children[4], OlElem.children[0]);



// Move the <h2> of the third section in the second one and vice-versa
const sections = document.querySelectorAll("section");

// get 2nd section
const secondSection = sections[1];
// get h2 in 2nd section
const h2InSecondSection = secondSection.children[0]

// get wrapper div inside 3rd section
const thirdSection = sections[2].children[0];
// get h2 in 3rd section
const h2InThirdSection = thirdSection.children[0];

// put h2 of 3rd section at start of 2nd section
secondSection.insertBefore(h2InThirdSection, h2InSecondSection);

// put h2 of 2nd section at start of 3rd section (inside the div)
thirdSection.insertBefore(h2InSecondSection, thirdSection.children[0])



// Delete the last section from the DOM, we don't need it anyways
thirdSection.remove();
