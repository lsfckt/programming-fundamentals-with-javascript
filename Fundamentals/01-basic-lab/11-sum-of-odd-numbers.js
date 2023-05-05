function oddNumbers(number){

    let curNum = 0;
    let sum = 0;
    let oddNum = 0;

   while(number > oddNum){
    curNum++;

    if(curNum % 2 != 0){
        sum += curNum;
        oddNum++;
            console.log(curNum);
    }

   }

    console.log(`Sum: ${sum}`);

}
oddNumbers(3);