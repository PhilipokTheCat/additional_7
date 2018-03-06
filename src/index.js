module.exports = function solveSudoku(matrix) {
  let zeroI, zeroJ, breakProp = false, naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      if (matrix[i][j] === 0){
        breakProp = true;
        zeroI = i;
        zeroJ = j;
        break;
      }
    }
    if (breakProp) break;
  }
  for (let i = 0; i < 9; i++) {
    let hIndex = naturalNumbers.indexOf(matrix[zeroI][i]), vIndex = naturalNumbers.indexOf(matrix[i][zeroI]);
    if (matrix[zeroI][i] !== 0){
      if (hIndex > -1) naturalNumbers.splice(hIndex, 1);
      if (vIndex > -1) naturalNumbers.splice(vIndex, 1);
    }
  }
}
