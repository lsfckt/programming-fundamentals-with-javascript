function rounding(roundedNum, precisionNum) {


    if (precisionNum <= 15) {
        console.log(parseFloat(roundedNum.toFixed(precisionNum)))
    } else {
        precisionNum = 15;
        console.log(parseFloat(roundedNum.toFixed(precisionNum)));
    }

}
rounding(10.5, 17)