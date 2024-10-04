// Function to encode the string as character codes with complex mathematical obfuscation
function encodeString() {
    // Original character codes
    const originalCodes = [
        81, 87, 69, 82, 84, 89,  // QWERTY
        50, 51, 52, 53, 54, 55, 56, 57, 48,  // 234567890
        65, 83, 68, 70, 71, 72, 74, 75, 76,  // ASDFGHJKL
        90, 88, 67, 86, 66, 78, 77,  // ZXCVBNM
        33, 64, 35  // !@#
    ];

    // Apply a complex mathematical transformation to create larger numbers
    return originalCodes.map(code => (code * 1000) + 9999); // Example transformation
}

// Function to decode the encoded character codes with reverse math
function decodeCharacterCodes(codes) {
    // Reverse the transformation applied during encoding
    const originalCodes = codes.map(code => (code - 9999) / 1000);
    return String.fromCharCode(...originalCodes); // Convert back to characters
}

// Function to generate the obfuscated string
function generateObfuscatedString() {
    const encoded = encodeString();
    const result = decodeCharacterCodes(encoded);
    return result;
}

// Function to display the string in the HTML
function displayString() {
    const specificString = generateObfuscatedString();
    const outputElement = document.getElementById("output");
    
    if (outputElement) {
        outputElement.innerText = specificString;
    } else {
        console.error("Output element not found.");
    }
}

// Execute display function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayString);
