// Make sure the DOM is fully loaded before attaching the event
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");

    // Check if the button exists
    if (button) {
        button.addEventListener("click", function() {
            alert("Button was clicked!");
        });
    }
});
