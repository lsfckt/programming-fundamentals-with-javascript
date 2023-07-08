function matchReg() {

    let text = 'Aleksandar: 7 Teodora: 21';
    let regexp = /(\w+): (\d+)/g;
    
    let matches = text.match(regexp);
    console.log(matches);

}
matchReg();