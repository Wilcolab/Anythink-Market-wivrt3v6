/*
Information about the current repository. You can use this information when you need to calculate diffs or compare changes with the default branch:
Repository name: Anythink-Market-wivrt3v6
Owner: Wilcolab
Current branch: main
Default branch: main
*/

module.exports = {
  repositoryName: 'Anythink-Market-wivrt3v6',
  owner: 'Wilcolab',
  currentBranch: 'main',
  defaultBranch: 'main',
};

function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

module.exports.toCamelCase = toCamelCase;
