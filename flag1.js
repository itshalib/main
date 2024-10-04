// Flag1 
function encodeString() {
    const characterCodes = [
        81, 87, 69, 84, 82, 89,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 
        65, 83, 68, 70, 71, 72, 74, 75, 76, 
        90, 88, 67, 86, 66, 78, 77,
        33, 64, 35 
    ];

    return characterCodes.map(code => {
        // New encoding logic: multiply, add, and then take modulus
        return (code * 3 + 5) % 256; // Keep it within valid char code range
    });
}

function decodeCodes(codes) {
    return String.fromCharCode(...codes.map(code => {
        // Reverse the encoding: subtract, then divide
        return (code - 5) / 3; // Reverse the math to get original character codes
    }));
}

function generateObfuscatedString() {
    const encoded = encodeString();
    const result = decodeCodes(encoded);
    return result;
}

function displayString() {
    const specificString = generateObfuscatedString();
    document.getElementById("output").innerText = specificString;
}

document.addEventListener("DOMContentLoaded", displayString);
