for (let i = 5; i >= 1; i--) {
    let row = '';
    // add spaces to align the pattern to the center
    for (let j = 0; j < 5 - i; j++) {
      row += ' ';
    }
    // loop through columns to add asterisks
    for (let j = 0; j < i * 2 - 1; j++) {
      row += '*';
    } 
    console.log(row);
  }