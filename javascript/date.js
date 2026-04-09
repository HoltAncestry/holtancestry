function getShortDateString() {
    // Returns: DD Month YYYY (no weekday)
    const monthNames = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const dateOfMonth = this.getDate();
    const month = monthNames[this.getMonth()];
    const year = this.getFullYear();

    return dateOfMonth + " " + month + " " + year;
}

Date.prototype.getShortDateString = getShortDateString;

function DocDate() {
    // Return the document's real last-modified date
    const raw = document.lastModified;
    const parsed = Date.parse(raw);

    if (!parsed) {
        return "Unknown";
    }

    const d = new Date(parsed);
    return d.getShortDateString();
}

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
