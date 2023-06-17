function bitcoin(goldAmount) {

    let totalGoldGrams = 0;
    let sumOfGold = 0;
    let days = 0;
    let bitcoinEarn = 0;
    let firstBitcoinDay = 0;

    const oneBitcoin = 11949.16;
    const goldPerGram = 67.51;

    for (let i = 0; i < goldAmount.length; i++) {
        days++;
        days % 3 === 0 ? totalGoldGrams = goldAmount[i] * 0.70 : totalGoldGrams = goldAmount[i];

        sumOfGold += totalGoldGrams * goldPerGram;

        if (sumOfGold >= oneBitcoin) {
            while (sumOfGold >= oneBitcoin) {
                bitcoinEarn++;
                sumOfGold -= oneBitcoin;

                if (bitcoinEarn === 1) {
                    firstBitcoinDay = days;
                }
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinEarn}`);

    if (bitcoinEarn != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }

    console.log(`Left money: ${sumOfGold.toFixed(2)} lv.`);

}
bitcoin([100,
    200, 300]);