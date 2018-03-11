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
  if (breakProp === false) return matrix;
  let sqrI, sqrJ;
  if (zeroI <= 2) sqrI = 0;
  else if ((zeroI > 2) && (zeroI <= 5)) sqrI = 3;
  else sqrI = 6;
  if (zeroJ <= 2) sqrJ = 0;
  else if ((zeroJ > 2) && (zeroJ <= 5)) sqrJ = 3;
  else sqrJ = 6;
  for (let i = 0; i < 9; i++){
    let hIndex = naturalNumbers.indexOf(matrix[zeroI][i]), vIndex = naturalNumbers.indexOf(matrix[i][zeroJ]),
    sqrIndex = naturalNumbers.indexOf(matrix[sqrI][sqrJ]);
    if (matrix[zeroI][i] !== 0) if (hIndex > -1) {naturalNumbers.splice(hIndex, 1); hIndex = naturalNumbers.indexOf(matrix[zeroI][i]); vIndex = naturalNumbers.indexOf(matrix[i][zeroJ]); sqrIndex = naturalNumbers.indexOf(matrix[sqrI][sqrJ]);};
    if (matrix[i][zeroJ] !== 0) if (vIndex > -1) {naturalNumbers.splice(vIndex, 1); hIndex = naturalNumbers.indexOf(matrix[zeroI][i]); vIndex = naturalNumbers.indexOf(matrix[i][zeroJ]); sqrIndex = naturalNumbers.indexOf(matrix[sqrI][sqrJ]);};
    if (matrix[sqrI][sqrJ] !== 0) if (sqrIndex > -1) naturalNumbers.splice(sqrIndex, 1); 
    sqrI++;
    if (sqrI === 3) {sqrI = 0; sqrJ++;}
    else if (sqrI === 6) {sqrI = 3; sqrJ++;}
    else if (sqrI === 9) {sqrI = 6; sqrJ++;};
  }
  if (naturalNumbers.length === 0) return false;
  let tempMatrix = JSON.parse(JSON.stringify(matrix));
  for (number of naturalNumbers){
    tempMatrix[zeroI][zeroJ] = number;
    let solved = solveSudoku(tempMatrix);
    if (solved) return solved; 
  }
  return false;
}