function getNextDay(year, month, day) {
    // Create a new Date object with the given year, month, and day
    let date = new Date(year, month - 1, day);
  
    // Increase the date by one day
    date.setDate(date.getDate() + 1);
  
    // Get the year, month, and day of the next day
    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1;
    let nextDay = date.getDate();
  
    // Concatenate the next year, month, and day into a string in the format 'yyyy-mm-dd'
    let nextDayString = nextYear + '-' + nextMonth + '-'+ nextDay;
  
    // Print the next day as a string in the format 'yyyy-mm-dd'
    console.log(nextDayString);
  }
  getNextDay(2016, 9, 30)
  
  
  
  
  
  
  