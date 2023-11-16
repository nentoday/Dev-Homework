function calculatePerimeter(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                if (j === 0 || arr[i][j - 1] === 'O') {
                    perimeter++;
                }
                if (j === cols - 1 || arr[i][j + 1] === 'O') {
                    perimeter++;
                }
                if (i === 0 || arr[i - 1][j] === 'O') {
                    perimeter++;
                }
                if (i === rows - 1 || arr[i + 1][j] === 'O') {
                    perimeter++;
                }
            }
        }
    }

    return perimeter;
}

const grid1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

console.log(calculatePerimeter(grid1));

const grid2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];

console.log(calculatePerimeter(grid2));
