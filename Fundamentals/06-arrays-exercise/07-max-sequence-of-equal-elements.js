function maxSequence(arr) {

    let longestSeuence = [];
    let leftIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let currEl = Number(arr[i]);
        let currSequence = [currEl];

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);

            if (nextEl === currEl) {
                currSequence.push(nextEl)
            } else {
                break;
            }
        }

        if (currSequence.length > longestSeuence.length) {
            longestSeuence = [];

            for (let j = 0; j < currSequence.length; j++) {
                longestSeuence.push(currSequence[j]);
            }
        } else if (currSequence.length === longestSeuence.length) {
            if (i < leftIndex) {
                leftIndex = i;
            }
        }
    }

    console.log(longestSeuence.join(' '));

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])