function spiceMustFlow(startingYield) {

    let yieldPerDay = startingYield;
    let dayMined = 0;
    let miningCrewConsumes = 0;
    let spiceExtracted = 0;

    while (yieldPerDay >= 100) {

        dayMined++;
        spiceExtracted += yieldPerDay
        yieldPerDay -= 10;

        if (spiceExtracted >= 26) {
            spiceExtracted -= 26;
        }

    }

    if (spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }

    console.log(dayMined++);
    console.log(spiceExtracted);


}
spiceMustFlow(450)