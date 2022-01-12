const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}

// 1. Everytime the user clicks on one of the action squares
// 1.1 Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
const logUlElem = document.querySelector("ul");

actionsquares.forEach(square => {
    square.addEventListener("click", () => {
        const newDisplayedSquare = document.createElement("div");
        newDisplayedSquare.classList.add("displayedsquare", square.classList[1]);

        // 3. Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
        newDisplayedSquare.addEventListener("click", () => alert(square.classList[1]));
        // ---

        const displayedsquareElem = document.querySelector(".displayedsquare-wrapper");
        displayedsquareElem.appendChild(newDisplayedSquare);

        // 1.2 Create a new <li> in the log below to state when the action was done

        const newLiElem = document.createElement("li");
        newLiElem.textContent = `[${getElapsedTime()}] Created a new ${square.classList[1]} square`;
        logUlElem.appendChild(newLiElem);
    });
});

// 2. Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
document.body.addEventListener("keypress", (e) => {
    // 2.1 When the spacebar is hit randomly change the background color of the whole page
    console.log(e);
    if (e.code === "Space") {
        console.log("yes");
        document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

        // 2.2 Log when the spacebar is used the same way you used for the generated squares.
        const newLiElem = document.createElement("li");
        newLiElem.textContent = `[${getElapsedTime()}] Hit spacebar`;
        logUlElem.appendChild(newLiElem);
    }
    // 2.3 When the l key is pressed the log gets deleted (erases the generated <li>s)
    else if (e.code === "KeyL") {
        const liElems = document.querySelectorAll("li");
        liElems.forEach(li => li.remove());
    }
    // 2.4 When the s key is pressed the squares get deleted (erases the generated squares)
    else if (e.code === "KeyS") {
        const displayedsquareElems = document.querySelectorAll(".displayedsquare");
        displayedsquareElems.forEach(square => square.remove());
    }
});
