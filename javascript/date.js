function getLongDateString() {
    // Returns: Day DD Month YYYY
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const day = dayNames[this.getDay()];
    const dateOfMonth = this.getDate();
    const month = monthNames[this.getMonth()];
    const year = this.getFullYear(); // modern, correct

    return day + " " + dateOfMonth + " " + month + " " + year;
}

Date.prototype.getLongDateString = getLongDateString;

function DocDate() {
    // Return document modification date (excl. time)
    const DateTimeStr = document.lastModified;
    const secOffset = Date.parse(DateTimeStr);

    if (!secOffset) {
        return "Unknown";
    }

    const aDate = new Date(secOffset);
    return aDate.getLongDateString();
}

// Write the last updated date
document.write("Last updated: ");
document.writeln(DocDate(), "</center>");

// NEW: Update copyright year automatically
(function updateCopyrightYear() {
    const span = document.getElementById("current-year");
    if (span) {
        span.textContent = new Date().getFullYear();
    }
})();
