function toKebabCase(str) {
    // Handle invalid inputs
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }

    // Step 1: Convert all 'A's to @
    let result = str.replace(/A/g, '@');

    // Step 2: Convert all 'S's to $
    result = result.replace(/S/g, '$');

    // Step 3: Handle word separators and convert to kebab-case
    // Replace spaces, underscores, and other separators with hyphens
    result = result.replace(/[\s_\-./]+/g, '-');

    // Remove leading/trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    // Convert to lowercase for kebab-case
    result = result.toLowerCase();

    return result;
}