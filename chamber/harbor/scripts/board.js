document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.getElementById(this.getAttribute('data-target'));
        if (target.style.display === "none" || target.style.display === "") {
            target.style.display = "block";
        } else {
            target.style.display = "none";
        }
    });
});
