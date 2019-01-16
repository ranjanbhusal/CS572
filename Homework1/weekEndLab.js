(function isWeekend () {
    const todayDate = new Date();
    const day = todayDate.getDay();
    //const day = 6;
    console.log(day);

    var selectDay = {
        0: "weekend",
        6: "weekend",
        weekday: "weekday"
    };
    console.log ( selectDay[day] || selectDay["weekday"]);
})();















