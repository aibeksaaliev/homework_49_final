function createChessDesk(size:number) {
    let count:number = 0;
    let deskBySymbols:string = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (count%2 === 0) {
                deskBySymbols += '██'
            } else {
                deskBySymbols += '  ';
            }
            count++;
        }
        deskBySymbols += '\n';
        count++;
    }
    console.log(deskBySymbols);
}

createChessDesk(16);

