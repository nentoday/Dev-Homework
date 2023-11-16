function groupAnagrams(words) {
    const anagramGroups = {};

    function sortWord(word) {
        return word.split('').sort().join('');
    }

    words.forEach(word => {
        const sortedWord = sortWord(word);
        if (anagramGroups.hasOwnProperty(sortedWord)) {
            anagramGroups[sortedWord].push(word);
        } else anagramGroups[sortedWord] = [word];
    });

    const result = Object.values(anagramGroups);
    return result;
}

const result = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
console.log(result);