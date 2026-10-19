/**
 * Generates all consecutive substrings of a given string in order of appearance.
 * 
 * @param {string} str - The input string to process.
 * @returns {string[]} An array of all consecutive substrings.
 */
function consecutiveSubstrings(str) {
    const substrings = [];
    
    // Edge case: handle empty string input, null, or undefined
    if (!str) {
        return substrings;
    }

    // Outer loop: determines the starting index of the substring
    for (let i = 0; i < str.length; i++) {
        // Inner loop: determines the ending index of the substring
        for (let j = i + 1; j <= str.length; j++) {
            // Extract the consecutive substring and add it to our collection
            substrings.push(str.substring(i, j));
        }
    }

    return substrings;
}

// Export the function directly for CommonJS / Jest
module.exports = consecutiveSubstrings;