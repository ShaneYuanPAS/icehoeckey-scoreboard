// Left 
function cancelHome() {
    if (homeScore > 0 ) {
    homeScore--
    document.querySelector(".homescore").innerHTML = homeScore;
    }
}
function addHome() {
    homeScore++
    document.querySelector(".homescore").innerHTML = homeScore;
}
var homeScore = 0;

function penaltynameH() {
    var penaltynameH = prompt(" Penalty to..?")
    document.querySelector(".penaltynamesl").innerHTML = penaltynameH;
}
// Mid
function cancelPeriod() {
    if (period > 0 ) {
    period--
    document.querySelector(".periodbox").innerHTML = period;
    }
}
function addPeriod() {
    if (period < 3 ) {
    period++
    document.querySelector(".periodbox").innerHTML = period;
    }
}
var period = 0;
// Right
function cancelGuest() {
    if (guestScore > 0 ) {
    guestScore--
    document.querySelector(".guestscore").innerHTML = guestScore;
    }
}
function addGuest() {
    guestScore++
    document.querySelector(".guestscore").innerHTML = guestScore;
}
var guestScore = 0;

function penaltynameG() {
    var penaltynameH = prompt(" Penalty to..?")
    document.querySelector(".penaltynamesr").innerHTML = penaltynameH;
}
