function requiredReading(pagesNumber, pagesPerHour, readingDays) {

    let totalReadingTime = pagesNumber / pagesPerHour;
    let totalTime = totalReadingTime / readingDays;
    console.log(totalTime);


}
requiredReading(432,
    15 ,
    4
    )