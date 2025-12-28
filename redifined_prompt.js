/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various word separators (spaces, hyphens, underscores)
 * and special characters, then converts it to camelCase where the first word is lowercase
 * and subsequent words have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * @throws {Error} If input is an empty string after trimming
 * @throws {Error} If input contains no alphanumeric characters
 * 
 * @example
 * toCamelCase("hello world");           // Returns: "helloWorld"
 * toCamelCase("hello-world");           // Returns: "helloWorld"
 * toCamelCase("hello_world");           // Returns: "helloWorld"
 * toCamelCase("hello world-test_case"); // Returns: "helloWorldTestCase"
 * toCamelCase("hello@world#test");      // Returns: "helloWorldTest"
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with various word separators (spaces, hyphens, underscores)
 * and special characters, then converts it to dot.case where words are separated by dots
 * and all characters are lowercase.
 * 
 * @param {string} str - The input string to convert to dot.case
 * @returns {string} The converted dot.case string with words separated by dots
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * @throws {Error} If input is an empty string after trimming
 * @throws {Error} If input contains no alphanumeric characters
 * 
 * @example
 * toDotCase("hello world");           // Returns: "hello.world"
 * toDotCase("hello-world");           // Returns: "hello.world"
 * toDotCase("hello_world");           // Returns: "hello.world"
 * toDotCase("hello world-test_case"); // Returns: "hello.world.test.case"
 * toDotCase("hello@world#test");      // Returns: "hello.world.test"
 */
function toCamelCase(str) {
    // Validate input
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and check for empty string
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Split by word separators (spaces, hyphens, underscores, etc.) and filter out empty parts
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0)
        .map((word) => {
            // Remove special characters and keep only alphanumeric
            const cleaned = word.replace(/[^a-zA-Z0-9]/g, "");
            return cleaned;
        })
        .filter((word) => word.length > 0);

    if (words.length === 0) {
        throw new Error("Input must contain at least one alphanumeric character");
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (index === 0) {
                // First word is lowercase
                return word.toLowerCase();
            }
            // Subsequent words: first letter uppercase, rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

// Test cases
console.log(toCamelCase("helloworld")); // "helloworld"
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("Hi there ")); // "hiThere"
console.log(toCamelCase("hello-world")); // "helloWorld"
console.log(toCamelCase("hello_world")); // "helloWorld"
console.log(toCamelCase("hello world-test_case")); // "helloWorldTestCase"
console.log(toCamelCase("hello@world#test")); // "helloWorldTest"

function toDotCase(str) {
    // Validate input
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and check for empty string
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Split by word separators (spaces, hyphens, underscores, etc.) and filter out empty parts
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0)
        .map((word) => {
            // Remove special characters and keep only alphanumeric
            const cleaned = word.replace(/[^a-zA-Z0-9]/g, "");
            return cleaned;
        })
        .filter((word) => word.length > 0);

    if (words.length === 0) {
        throw new Error("Input must contain at least one alphanumeric character");
    }

    // Convert to dot.case
    return words.map((word) => word.toLowerCase()).join(".");
}

// Test cases
console.log(toDotCase("helloworld")); // "helloworld"
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("Hi there ")); // "hi.there"
console.log(toDotCase("hello-world")); // "hello.world"
console.log(toDotCase("hello_world")); // "hello.world"
console.log(toDotCase("hello world-test_case")); // "hello.world.test.case"
console.log(toDotCase("hello@world#test")); // "hello.world.test"

