 for (let i = 1; i <= 5; i++) {
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
// The inner loop adds spaces to align
// the pattern to the center of the console,
//  and then adds the required number of
//  asterisks to the row string. 
//  The number of asterisks added 
// is calculated as i * 2 - 1,
// since each row requires an odd number of stars