// ==========================================
// COREFORGE PC BUILDER - JAVASCRIPT FUNCTIONS
// ==========================================


// ==========================================
// OBJECT WITH MULTIPLE PROPERTIES
// ==========================================

const pcBuild = {
    name: "CoreForge Gaming PC",
    processor: "AMD Ryzen 7",
    graphicsCard: "NVIDIA RTX 5070",
    memory: "32GB DDR5",
    storage: "1TB SSD",
    price: 1499
};


// ==========================================
// OBJECT METHOD
// ==========================================
// A method is a function that belongs to an object.

pcBuild.getDescription = function() {
    return this.name + " has a " + this.processor +
        " processor and " + this.memory + " of memory.";
};

console.log(pcBuild.getDescription());


// ==========================================
// FUNCTION - PARAMETERS IN
// ==========================================
// This function receives a PC name as a parameter.

function welcomeUser(pcName) {
    return "Welcome to " + pcName + "!";
}


// Call the function and pass a parameter into it.
let welcomeMessage = welcomeUser("CoreForge");

console.log(welcomeMessage);


// ==========================================
// FUNCTION - PARAMETERS OUT
// ==========================================
// This function receives two prices and returns
// their combined value.

function calculateTotal(price1, price2) {
    let total = price1 + price2;
    return total;
}

let componentTotal = calculateTotal(500, 300);

console.log("Component Total: $" + componentTotal);


// ==========================================
// THIS
// ==========================================
// "this" refers to the object that is using the method.

const pcInfo = {
    brand: "CoreForge",
    type: "Gaming PC",

    showInfo: function() {
        return this.brand + " " + this.type;
    }
};

console.log("PC Info:", pcInfo.showInfo());


// ==========================================
// CALL()
// ==========================================
// call() allows us to use a function with a
// specific object as "this".

function showPC() {
    return this.name + " costs $" + this.price;
}

console.log(showPC.call(pcBuild));


// ==========================================
// APPLY()
// ==========================================
// apply() works like call(), but parameters are
// passed as an array.

function calculatePCPrice(tax, shipping) {
    return this.price + tax + shipping;
}

let finalPrice = calculatePCPrice.apply(pcBuild, [120, 25]);

console.log("Final PC Price: $" + finalPrice);


// ==========================================
// BIND()
// ==========================================
// bind() creates a new function that remembers
// which object should be used as "this".

const boundPCFunction = showPC.bind(pcBuild);

console.log("Bound Function:", boundPCFunction());


// ==========================================
// FUNCTION REFERENCE
// ==========================================
// Instead of immediately calling the function,
// we store a reference to the function.

function showClickMessage() {
    console.log("The PC image was clicked!");
}

const clickFunction = showClickMessage;


// ==========================================
// CLOSURE
// ==========================================
// A closure allows a function to remember a value
// even after the outside function has finished.

function createClickCounter() {

    let clickCount = 0;

    return function() {
        clickCount++;
        return clickCount;
    };
}

const countPCClicks = createClickCounter();


// ==========================================
// IIFE
// ==========================================
// IIFE = Immediately Invoked Function Expression.
// It runs immediately when the JavaScript loads.

(function() {
    console.log("CoreForge JavaScript is running!");
})();


// ==========================================
// COLOR WAVE FUNCTION
// ==========================================
// This function creates the color wave animation.

function startColorWave(pcImage) {

    console.log("Starting color wave for:", pcImage.alt);

    // Add the animation class to the page.
    document.body.classList.remove("color-wave");

    // Force the browser to restart the animation.
    void document.body.offsetWidth;

    document.body.classList.add("color-wave");

    // Show the number of clicks.
    let currentClick = countPCClicks();

    console.log("PC Click Count:", currentClick);

    // Remove the animation class after it finishes.
    setTimeout(function() {
        document.body.classList.remove("color-wave");
    }, 1500);
}


// ==========================================
// EVENT
// ==========================================
// Find the PC image on the page.

const pcImage = document.getElementById("pcImage");


// ==========================================
// EVENT LISTENER
// ==========================================
// When the PC image is clicked, the functions run.

pcImage.addEventListener("click", function() {

    // Function reference
    clickFunction();

    // Start the color wave.
    startColorWave(this);

});
// ==========================================
// NVIDIA RTX 5070 DESCRIPTION FUNCTION
// ==========================================
// This function shows or hides information
// about the graphics card.

function showGPUDescription() {

    const gpuName = document.getElementById("gpuName");
    const gpuDescription = document.getElementById("gpuDescription");

    // Change the GPU text to blue.
    gpuName.style.color = "blue";

    // Show the description.
    gpuDescription.style.display = "block";

    console.log("NVIDIA RTX 5070 description opened.");
}


// ==========================================
// GPU EVENT
// ==========================================
// Find the NVIDIA RTX 5070 text.

const gpuName = document.getElementById("gpuName");

// When the text is clicked, run the function.

gpuName.addEventListener("click", showGPUDescription);
