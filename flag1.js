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

    // Applying a simple obfuscation (e.g., adding a constant to each code)
    const obfuscatedCodes = originalCodes.map(code => code + 3);
    return obfuscatedCodes;
}

// Function to decode the obfuscated character codes back to characters
function decodeCharacterCodes(codes) {
    // Reverse the obfuscation by subtracting the constant
    const originalCodes = codes.map(code => code - 3);
    return String.fromCharCode(...originalCodes);
}

// Function to generate the obfuscated string
function generateObfuscatedString() {
    const encoded = encodeString();
    const result = decodeCharacterCodes(encoded);
    return result;
}

// Function to get the output string for display
function getOutput() {
    return generateObfuscatedString();
}
