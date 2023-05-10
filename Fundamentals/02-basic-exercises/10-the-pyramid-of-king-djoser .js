function thePyramid(base, increment) {

    let firstStep = base;

    let stoneRequired = 0;
    let marbelRequired = 0;
    let lapisLazulliRequired = 0;
    let goldRequired = 0;

    let stepCount = 0;

    let pyramidHeight = 0;

    while (firstStep > 2) {
        let width = firstStep;
        let length = firstStep;

        pyramidHeight++;
        stepCount++;
        stoneRequired += (width - 2) * (length - 2);


        if (stepCount % 5 === 0) {
            lapisLazulliRequired += ((width + length) * 2) - 4;
        } else {
            marbelRequired += ((width + length) * 2) - 4;
        }

        firstStep -= 2;

    }

    pyramidHeight++;
    goldRequired += 1;

    let totalStones = stoneRequired * increment;
    let totalMarbel = marbelRequired * increment;
    let totalLapisLazulli = lapisLazulliRequired * increment;
    let totalGold = goldRequired * increment;

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazulli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

}
thePyramid(11, 0.75)