// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let bgflightScreen = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function() {
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleReady) {
            flightStatus.innerText = "Shuttle in flight.";
            bgflightScreen.style.backgroundColor = "blue";
            shuttleHeight.innerText = "10000";
        }
    })
})
