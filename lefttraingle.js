for (let i = 0; i < 5; i++) {
    let row = '';
    // add spaces to align the pattern to the right
    for (let j = 0; j < 5 - i - 1; j++) {
      row += '  ';
    }
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }