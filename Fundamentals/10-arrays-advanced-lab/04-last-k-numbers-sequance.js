function lastSequense(first, second) {

    let output = [1];
    for (let i = 1; i < first; i++) {
        let start = Math.max(output.length - second, 0);

        let end = output.slice(start);
        let sum = 0;
        for (const el of end) {
            sum += el;
        }
        output.push(sum);
    }
    console.log(output.join(' '));
}
lastSequense(6, 3);