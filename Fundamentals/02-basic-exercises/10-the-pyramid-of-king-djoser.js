function thePyramid(base, increment) {

    let firstStep = base;

    let stoneRequired = 0;
    let marbelRequired = 0;
    let lapisLazulliRequired = 0;
    let goldRequired = 0;

    let stepCount = 0;
    let pyramidHeight = 0;

    let width = firstStep;
    let length = firstStep;

    while (firstStep > 2) {

        pyramidHeight++;
        stepCount++;

        stoneRequired += ((width - 2) * (length - 2)) * increment;

        if (stepCount % 5 === 0) {
            lapisLazulliRequired += ((width + length) * 2) - 4;
        } else {
            marbelRequired += (((width * 2) + (length * 2)) - 4);
        }

        width -= 2;
        length -= 2;
        firstStep -= 2;

    }

    pyramidHeight++;
    goldRequired = firstStep * firstStep;

    let totalStones = stoneRequired;
    let totalMarbel = marbelRequired * increment;
    let totalLapisLazulli = lapisLazulliRequired * increment;
    let totalGold = goldRequired * increment;
    let finalPyramidHeight = pyramidHeight * increment;

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazulli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalPyramidHeight)}`);

}
thePyramid(11, 0.75
);