const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentPopup = null;
let wasDateClicked = false; // Was date overred (false) or clicked (true)

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

function setPopupClick(elemId, className, date) {
    wasDateClicked = true;
    setPopup(elemId, className, date);
}

function setPopup(elemId, className, date) {
    let tooltip = document.getElementById('tooltip');
    let elem = document.getElementById(elemId);

    // Put images in the popup
    let currDate = new Date(date);
    let str = "";
    members.filter(e => compareDates(e.debutDate, currDate)).forEach(function(x) {
        str += '<img class="' + className + '" src="' + window.location.origin + '/img/' + x.name + '.png"/>';
    })
    tooltip.innerHTML = str;

    let pos = elem.getBoundingClientRect();
    currentPopup = Popper.createPopper(elem, tooltip, {
        placement: pos.x < window.innerWidth / 2 ? 'right' : 'left',
    });
}

function leavePopup() {
    if (!wasDateClicked && currentPopup !== null) {
        currentPopup.destroy();
        currentPopup = null;
        wasDateClicked = false;
    }
}

document.body.addEventListener('click', function () {
    if (currentPopup !== null) {
        currentPopup.destroy();
        currentPopup = null;
    }
    wasDateClicked = false;
}, true);

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
            let currMembers = members.filter(e => compareDates(e.debutDate, date));
            if (currMembers.length > 0) {
                let genName = currMembers[0].genID[0];
                let className = "selected " + genName;
                let elemId = "x" + date.getFullYear() + "x"+  date.getMonth() + "x" + date.getDate();
                let onClick = "setPopupClick(\'" + elemId + "\', \'" + genName + "\', \'" + date + "\')";
                let onHover = "setPopup(\'" + elemId + "\', \'" + genName + "\', \'" + date + "\')";
                str += '<li class="data ' + className + '" id="' + elemId + '" onclick="' + onClick + '" onmouseover="' + onHover + '" onmouseleave="leavePopup()">'
                + (date.getDate()) + '</li>';
            }
            else {
                str += '<li class="data">' + (date.getDate()) + '</li>';
            }
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