const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getNewMonthHtml(date) {
    return '<div class="monthContainer"><div class="month"><ul><li>' + monthNames[date.getMonth()] + '<br><span class="headerYear">' + '</span></li></ul></div>' +
    '<ul class="weekdays"><li>Mo</li><li>Tu</li><li>Mo</li><li>We</li><li>Fr</li><li>Sa</li><li>Su</li></ul><ul class="days">';
}

function getEndMonthHtml() {
    return '</ul></div></div>';
}

function initCalendar() {
    let date = new Date("2017-01-01");
    let current = new Date(); // Today
    let str = ""; // Final HTML

    while (date < current) {

        // Print year every Jannyary
        if (date.getMonth() == 0)
            str += '<br><h1>' + date.getFullYear() + '</h1><br>';

        str += getNewMonthHtml(date);

        // Increase days
        let currentMonth = date.getMonth();
        let i = 0;
        do {
            str += '<li>' + (date.getDate()) + '</li>';
            date.setDate(date.getDate() + 1);
        } while (date.getMonth() === currentMonth);

        str += getEndMonthHtml();
    }

    document.getElementById("calendar").innerHTML = str;
}

initCalendar();