for(let i=0; i<5; i++){
    let row='';
    for(let j=0; j<5; j++){
        if((i==0)||(i==5-1)||(j==0)||(j=5-1)){
            row +='*';
        }else{
            row +=' ';
        }
    }
    console.log(row);
}