window.addEventListener('load', ()=> {
    
  


    var dayDetails = document.querySelectorAll(".five-day-forecast ul li")
    var details = document.querySelectorAll(".details");
    let delay = 0;

    dayDetails[0].addEventListener('click', function() {
        if(details[0].classList.contains("show-details")) {
            delay = 300;
            details[0].classList.add("animate-details");
        } else {
            delay = 0;
            details[0].classList.remove("animate-details");
        }

        dayDetails[0].classList.toggle("active-day");
        
        setTimeout(function() {
            details[0].classList.toggle("show-details");
        }, delay);
    });
    dayDetails[1].addEventListener('click', function() {
        if(details[1].classList.contains("show-details")) {
            delay = 300;
            details[1].classList.add("animate-details");
        } else {
            delay = 0;
            details[1].classList.remove("animate-details");
        }

        dayDetails[1].classList.toggle("active-day");
        
        setTimeout(function() {
            details[1].classList.toggle("show-details");
        }, delay);
    });
    dayDetails[2].addEventListener('click', function() {
        if(details[2].classList.contains("show-details")) {
            delay = 300;
            details[2].classList.add("animate-details");
        } else {
            delay = 0;
            details[2].classList.remove("animate-details");
        }

        dayDetails[2].classList.toggle("active-day");
        
        setTimeout(function() {
            details[2].classList.toggle("show-details");
        }, delay);
    });
    dayDetails[3].addEventListener('click', function() {
        if(details[3].classList.contains("show-details")) {
            delay = 300;
            details[3].classList.add("animate-details");
        } else {
            delay = 0;
            details[3].classList.remove("animate-details");
        }

        dayDetails[3].classList.toggle("active-day");
        
        setTimeout(function() {
            details[3].classList.toggle("show-details");
        }, delay);
    });
    dayDetails[4].addEventListener('click', function() {
        if(details[4].classList.contains("show-details")) {
            delay = 300;
            details[4].classList.add("animate-details");
        } else {
            delay = 0;
            details[4].classList.remove("animate-details");
        }

        dayDetails[4].classList.toggle("active-day");
        
        setTimeout(function() {
            details[4].classList.toggle("show-details");
        }, delay);
    });


    let dropdown = document.querySelector(".dropdown");
    let openDropdown = document.getElementById("settings-btn");
    let closeDropdown = document.querySelector(".close-dropdown"); // Background div that tracks when user clicks away from dropdown

    closeDropdown.addEventListener('click', function() {
        dropdown.classList.remove("show-grid");
        closeDropdown.classList.remove("show-block");
        applyCloseDropdown();
    });



  
});