
const originalCodes = [
    90, 88, 67, 86, 66, 78, 77,
    97, 115, 100,                
    49, 50, 51, 52,            
    81, 87, 69, 82, 84, 89,    
    53, 54, 55, 56,              
    33, 64, 35, 36, 37, 94, 38, 40, 41
];

function encodeString() {
    const obfuscatedCodes = originalCodes.map(code => code + 3);
    return obfuscatedCodes;
}

function decodeCharacterCodes(codes) {
    const originalCodes = codes.map(code => code - 3);
    return String.fromCharCode(...originalCodes);
}

function generateObfuscatedString() {
    const encoded = encodeString();
    const result = decodeCharacterCodes(encoded);
    return result;
}

// Combine the two outputs
function getOutput() {
    // Return the obfuscated string generated from original codes
    return generateObfuscatedString();
}

// Optionally, if you want to use the random flag as well, you can add logic to choose between them
function getRandomFlag() {
    return "FLAG{" + Math.random().toString(36).substr(2, 9) + "}";
}

// Example: Uncomment to use random flag instead
// function getOutput() {
//     return getRandomFlag();
// }
