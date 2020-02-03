let dropdown = document.querySelector(".dropdown");
    let openDropdown = document.getElementById("settings-btn");
    let closeDropdown = document.querySelector(".close-dropdown"); // Background div that tracks when user clicks away from dropdown

    /* When settings button is clicked show/hide dropdown and closeDropdown */
    openDropdown.addEventListener('click', function() {
        dropdown.classList.toggle("show-grid");
        closeDropdown.classList.toggle("show-block");
    });

    /* When user clicks away from dropdown hide both dropdown and closeDropdown */
    closeDropdown.addEventListener('click', function() {
        dropdown.classList.remove("show-grid");
        closeDropdown.classList.remove("show-block");
        applyCloseDropdown();
    });