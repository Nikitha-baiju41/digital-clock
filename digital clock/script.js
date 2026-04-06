function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h ? h : 12;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("time").textContent =
        `${h}:${m}:${s} ${ampm}`;

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();