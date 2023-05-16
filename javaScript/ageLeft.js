function lifeInWeeks(age) {
    var yearRemaining = 90-age;
    var daysRemaining = yearRemaining*365;
    var weeksremaining = yearRemaining*52;
    var monthsremaining = yearRemaining*12;
    console.log("You have "+daysRemaining+" days, "+weeksremaining + " weeks, and " + monthsremaining+ " months left.");
    }
    lifeInWeeks(22);
    
    