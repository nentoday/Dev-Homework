function unpackSausages(truck) {
    let displayCounter = "";
    let undamagedSausagesCount = 0;
    function areAllCharactersEqual(str) {
        return str.slice(1, -1).split('').every(char => char === str[1]);
    }
    for (const box of truck) {
        for (const pack of box) {
            if (pack.startsWith("[") && pack.endsWith("]") && pack.length % 6 === 0) {
                if (areAllCharactersEqual(pack)) {
                undamagedSausagesCount++;
                    if (undamagedSausagesCount % 5 === 0) {
                        continue;
                    }
                displayCounter += pack.slice(1, -1);
                }
            }
            }
        }
    return displayCounter.trim().split('').join(' ');
}


const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];


const result = unpackSausages(truck);
console.log(result);
