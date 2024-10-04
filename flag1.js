// flag1
function generateObfuscatedString() {
    
    const c = [
        81, 87, 69, 84, 82, 89, 
        49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 
        65, 83, 68, 70, 71, 72, 74, 75, 76, 
        90, 88, 67, 86, 66, 78, 77, 33, 64, 35 
    ];

  
    let result = String.fromCharCode(...c);
    return result;
}


function displayString() {
    const specificString = generateObfuscatedString();
    document.getElementById("output").innerText = specificString;
}

document.addEventListener("DOMContentLoaded", displayString);
