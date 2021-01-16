const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentPopup = null;

function getNewMonthHtml(date) {
    return '<div class="monthContainer"><div class="month"><ul><li>' + monthNames[date.getMonth()] + '<br><span class="headerYear"></span></li></ul></div>' +
    '<ul class="weekdays"><li>Su</li><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li></ul><ul class="days">';
}

function getEndMonthHtml() {
    return '</ul></div></div>';
}

function compareDates(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

document.body.addEventListener('click', function (e) {
    if (currentPopup !== null) {
        currentPopup.destroy();
        currentPopup = null;
    }
}, true);

function setPopup(elemId, className) {
    let tooltip = document.getElementById('tooltip');
    let elem = document.getElementById(elemId);
    tooltip.classList = [ className ];
    currentPopup = Popper.createPopper(elem, tooltip, {
        placement: 'right',
    });
}

function initCalendar() {
    let date = new Date(Date.UTC(2017, 0, 1));
    let current = new Date(); // Today
    let str = ""; // Final HTML

    while (date < current) {

        // Print year every Jannyary
        if (date.getMonth() === 0)
            str += '<h1>' + date.getFullYear() + '</h1>';

        str += getNewMonthHtml(date);

        // Set first day of the month
        if (date.getDay() !== 6) {
            for (let i = 0; i <= date.getDay(); i++) {
                str += '<li>&nbsp;</li>';
            }
        }

        // Increase days
        let currentMonth = date.getMonth();
        do {
            let currMembers = members.find((e) => compareDates(e.debutDate, date));
            let className = "";
            let genName = "";
            let onClick = "";
            let elemId = "";
            if (currMembers !== undefined) {
                genName = currMembers.genID[0];
                className = "selected " + genName;
                elemId = "x" + date.getFullYear() + "x"+  date.getMonth() + "x" + date.getDate();
                onClick = "setPopup(\'" + elemId + "\', \'" + genName + "\')";
            }
            str += '<li class="data ' + className + '" id="' + elemId + '" onclick="' + onClick + '">'
            + (date.getDate()) + '</li>';
            date.setDate(date.getDate() + 1);
        } while (date.getMonth() === currentMonth);

        for (let i = date.getDay(); i < 7; i++) {
            str += '<li>&nbsp;</li>';
        }

        str += getEndMonthHtml();
    }

    document.getElementById("calendar").innerHTML = str;
}

initCalendar();