
function encodeString() {
   
    const originalCodes = [
        81, 87, 69, 82, 84, 89,  
        49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 
        65, 83, 68, 70, 71, 72, 74, 75, 76, 
        90, 88, 67, 86, 66, 78, 77, 
        33, 64, 35 
    ];

   
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


function getOutput() {
    return generateObfuscatedString();
}
