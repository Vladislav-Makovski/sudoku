module.exports = function solveSudoku(matrix) {
  let rowAndCol = {row : 0,col : 0} ;
  let copyMatrix = matrix;
  if(!emptyCell(copyMatrix, rowAndCol)){return copyMatrix;}
  for(let i = 1; i <= 9; i++){
      if(isSafe(copyMatrix, rowAndCol, i)){
          copyMatrix[rowAndCol.row][rowAndCol.col] = i;
          if(solveSudoku(copyMatrix)){return copyMatrix;}
          copyMatrix[rowAndCol.row][rowAndCol.col] = 0;
      }
  }
  return 0;
}
function emptyCell(copyMatrix, rowAndCol){
  for (rowAndCol.row = 0; rowAndCol.row < 9; rowAndCol.row++) {
      for(rowAndCol.col = 0; rowAndCol.col < 9; rowAndCol.col++){
          if(copyMatrix[rowAndCol.row][rowAndCol.col] === 0)
              return true;
      }
  }
  return false;
}
function noValidityInRow(matrix, row, num){
  for(let i = 0; i < 9; i++){
      if(matrix[row][i] === num){
          return true;
      }
  }
  return false;
}
function noValidityInCol(matrix, col, num){
  for(let row = 0; row < 9; row++){
      if(matrix[row][col] === num){
          return true;
      }
  }
  return false;
}
function noValidityInBox(matrix, boxStartRow, boxStartCol, num){
  for(let row = 0; row < 3; row++){
      for(let col = 0; col < 3; col++){
          if(matrix[row + boxStartRow][col + boxStartCol] === num){return true;}
      }
  }
  return false;
}
function isSafe(matrix, rowAndCol, num){
  return !noValidityInRow(matrix,rowAndCol.row,num) &&
      !noValidityInCol(matrix, rowAndCol.col, num) &&
      !noValidityInBox(matrix, rowAndCol.row - rowAndCol.row % 3, rowAndCol.col - rowAndCol.col % 3,num) &&
      matrix[rowAndCol.row][rowAndCol.col] === 0;
}