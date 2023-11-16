function getRootProperty(obj, targetValue, currentPath = []) {
    for (const key in obj) {
        const newPath = currentPath.concat(key);

        if (Array.isArray(obj[key]) && obj[key].includes(targetValue)) {
            return newPath[0];
        } else if (typeof obj[key] === 'object') {
            const result = getRootProperty(obj[key], targetValue, newPath);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}

const object = {
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    },
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};

console.log(getRootProperty(object, 250));
console.log(getRootProperty(object, 116));
console.log(getRootProperty(object, 111));
console.log(getRootProperty(object, 999));
