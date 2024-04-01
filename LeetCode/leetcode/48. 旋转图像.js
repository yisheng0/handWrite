function rotate(matrix) {
    const n = matrix.length;
  
    // Vertical Flip
    for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
        [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
    }
  
    // Diagonal Flip
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
  