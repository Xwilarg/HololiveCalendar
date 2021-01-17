const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentPopup = null;
let wasDateClicked = false; // Was date overred (false) or clicked (true)
let datePositions = {}; // Position of dates depending of the adjacent ones
let allIds = []; // All dates with a character on them

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

    currentPopup = Popper.createPopper(elem, tooltip, {
        placement: datePositions[elemId]
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
            for (let i = 0; i < date.getDay(); i++) {
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
                allIds.push(elemId);
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

    allIds.forEach(function (e) {
        datePositions[e] = getBestPosition(e);
    });
}

// Used by getBestPosition, if we are too close to the border, we must not put the popup in this direction
function remIfTooClose(distance) {
    if (distance > 200) return distance;
    return 0;
}

// Return the position with the most free space depending of the adjacent dates
function getBestPosition(id) {
    let position = document.getElementById(id).getBoundingClientRect();
    let distLeft = remIfTooClose(position.x);
    let distRight = remIfTooClose(document.body.scrollWidth - position.x);
    let distUp = remIfTooClose(position.y);
    let distDown = remIfTooClose(document.body.scrollHeight - position.y);

    let idSplit = id.split('x');
    let currYear = idSplit[1];
    let currMonth = parseInt(idSplit[2]);

    allIds.forEach(function (e) {
        if (id === e) {
            return;
        }

        // We only take info from the adjacent months
        let otherSplit = e.split('x');
        if (otherSplit[1] !== currYear || Math.abs(otherSplit[2] - parseInt(currMonth)) > 1) {
            return;
        }

        let otherPos = document.getElementById(e).getBoundingClientRect();
        let xDist = position.x - otherPos.x;
        let yDist = position.y - otherPos.y;

        let dist = Math.sqrt(xDist * xDist + yDist * yDist);

        if (yDist === 0) {
            if (xDist > 0 && xDist < distLeft) distLeft = xDist;
            else if (xDist < 0 && (-xDist) < distRight) distRight = -xDist;
        } else {
            if (xDist > 0 && dist < distLeft) distLeft = dist;
            else if (xDist < 0 && dist < distRight) distRight = dist;
        }
        if (xDist === 0) {
            if (yDist > 0 && yDist < distUp) distUp = yDist;
            else if (yDist < 0 && (-yDist) < distDown) distDown = -yDist;
        } else {
            if (yDist > 0 && dist < distUp) distUp = dist;
            else if (yDist < 0 && dist < distDown) distDown = dist;
        }
    });

    let result = "";
    if (distLeft > distRight && distLeft > distUp && distLeft > distDown) {
        result = "left";
        if (distUp > distDown) {
            result += "-start";
        } else if (distUp < distDown) {
            result += "-end";
        }
    } else if (distRight > distUp && distRight > distDown) {
        result = "right";
        if (distUp > distDown) {
            result += "-start";
        } else if (distUp < distDown) {
            result += "-end";
        }
    } else if (distUp > distDown) {
        result = "top";
        if (distLeft > distRight) {
            result += "-start";
        } else if (distLeft < distRight) {
            result += "-end";
        }
    } else {
        result = "bottom";
        if (distLeft > distRight) {
            result += "-start";
        } else if (distLeft < distRight) {
            result += "-end";
        }
    }
    return result;
}

initCalendar();