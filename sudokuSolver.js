const sudoku2 = (grid) => {
  let result = false;
  
  if (checkRows(grid)) {
    if (checkCols(grid)) {
      if (checkSubGrids(grid)) {
        result = true;
      }
    }
  }
  
  return result;
};

const checkRows = (grid) => {
  let tracker = {};
  
  for (let row = 0; row < grid.length; row++) {
    for (let cell = 0; cell < grid[row].length; cell++) {
      if (grid[row][cell] !== '.') {
        tracker[grid[row][cell]] ? tracker[grid[row][cell]]++ : tracker[grid[row][cell]] = 1;
      }
    }
    for (let key in tracker) {
      if (tracker[key] > 1) {
        return false;
      }
    }
    tracker = {};
  }
  
  return true;
};

const checkCols = (grid) => {
  let tracker = {};
  
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] !== '.') {
        tracker[grid[row][col]] ? tracker[grid[row][col]]++: tracker[grid[row][col]] = 1; 
      }
    }
    
    for (let key in tracker) {
      if (tracker[key] > 1) {
        return false;
      }
    }
    tracker = {};
  }

  return true;
};

const checkSubGrids = (grid) => {
  let tracker = {};
  let subGridContainer = [];
  
  //iterate through first row starting from first cell, then going to third cell after that, and so on until the end 
  for (let i = 0; i < grid[0].length; i+=3) {
    //for each iteration, start at first layer and create a submatrix using 3 cells starting from current cell index and including next two after it for current row and next two rows
    for (let j = 0; j < grid.length; j+=3) {
      for (let k = j; k < j + 3; k++) {
        //you should end up with a 3x3 matrix that you can check for duplicates
        let subGridRow = [];
        subGridRow.push(grid[k][i]);
        subGridRow.push(grid[k][i+1]);
        subGridRow.push(grid[k][i+2]);
        subGridContainer.push(subGridRow);
      }
      console.log(subGridContainer);
      for (let row = 0; row < subGridContainer.length; row++) {
        for (let cell = 0; cell < subGridContainer[row].length; cell++) {
          if (subGridContainer[row][cell] !== '.') {
            tracker[subGridContainer[row][cell]] ? tracker[subGridContainer[row][cell]]++ : tracker[subGridContainer[row][cell]] = 1;
          }
        }
      }
      for (let key in tracker) {
        if (tracker[key] > 1) {
          return false;
        }
      }
      tracker = {};
      subGridContainer = [];
    }
  }
  
  return true;
};