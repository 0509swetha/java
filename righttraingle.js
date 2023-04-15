for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  //the outer loop iterates 5 times 
//   creating a new row each time.
//   inner loop iterates from 0 to 
//    curnt row numberand adding star and space to row