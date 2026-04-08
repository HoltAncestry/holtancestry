function getLongDateString() {
    // Returns: Day DD Month YYYY
    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];
    const dayNames = [
        "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    const day = dayNames[this.getDay()];
    const dateOfMonth = this.getDate();
    const month = monthNames[this.getMonth()];
    const year = this.getFullYear();

    return day + " " + dateOfMonth + " " + month + " " + year;
}

Date.prototype.getLongDateString = getLongDateString;

function DocDate() {
    // Return the document modification date (excl. time) as a string
    const DateTimeStr = document.lastModified;
    const secOffset = Date.parse(DateTimeStr);

    if (!secOffset) {
        return "Unknown";
    }

    const aDate = new Date(secOffset);
    return aDate.getLongDateString();
}

// --- No more document.write here ---

(function initFooterDates() {
    // Last updated
    const lastUpdatedEl = document.getElementById("last-updated");
    if (lastUpdatedEl) {
        lastUpdatedEl.textContent = "Last updated: " + DocDate();
    }

    // Current year
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
