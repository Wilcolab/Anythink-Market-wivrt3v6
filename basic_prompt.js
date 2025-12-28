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
    return str.replace(/\b\w/g, (char, index) => 
        index === 0 ? char.toLowerCase() : char.toUpperCase()
    );
}

module.exports.toCamelCase = toCamelCase;
