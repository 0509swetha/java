for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5 - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
  for (let i = 5 - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= 5 - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
}