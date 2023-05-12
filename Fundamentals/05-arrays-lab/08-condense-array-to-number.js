function condense(arr) {

    while (arr.length > 1) {

        let condensed = Array(arr.length - 1);

        for (let i = 0; i < arr.length - 1; i++) {

            condensed[i] = Number(arr[i]) + Number(arr[i + 1]);

        }
        arr = condensed;
    }

    console.log(arr[0]);

}
condense([2, 10, 3])