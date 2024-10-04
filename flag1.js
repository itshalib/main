// Flag1 
function encodeString() {
    
    const d86cf9d4cc444445b230ad02c7f14cecd86cf9d4cc444445b230ad02c7f14cec
     = [
        81, 87, 69, 84, 82, 89,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 
        65, 83, 68, 70, 71, 72, 74, 75, 76, 
        90, 88, 67, 86, 66, 78, 77,
        33, 64, 35 
    ];

   
    return d86cf9d4cc444445b230ad02c7f14cecd86cf9d4cc444445b230ad02c7f14cec.map(code => {
       
        return (code * 2) + 10;
    });
}


function decodeCodes(codes) {
   
    return String.fromCharCode(...codes.map(code => {
        
        return (code - 10) / 2; 
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
