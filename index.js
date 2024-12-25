// Theme Toggle 
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.getElementById('moon');

    // Applying saved theme in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    }

    // Theme Toggle Functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            moonIcon.classList.remove('fa-moon');
            moonIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Save dark theme
        } else {
            moonIcon.classList.remove('fa-sun');
            moonIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light'); // Save light theme
        }
    });
});




// Carousel 
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
const totalSlides = images.length;

// Show the first image initially
function showSlide(index) {
  // Remove active class from all images and let them be inactive
  images.forEach((img, i) => {
    img.classList.remove('active');
    img.classList.add('inactive');
  });

  // Remove inactive class from all images and let them be active
  images[index].classList.add('active');
  images[index].classList.remove('inactive');
}

// Auto-slide function
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide if at the end
  showSlide(currentIndex);
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Thumbnails click event
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide when a thumbnail is clicked
    currentIndex = index; // Set to the clicked thumbnail
    showSlide(currentIndex);
    autoSlide = setInterval(nextSlide, 3000); // Resume auto-slide after selecting a particular thumbnail 
  });
});

// To initialize the carousel with the first image visible
showSlide(currentIndex);



// Pop-up display and form submission
let popupShown = false;

window.addEventListener('scroll', function() {
    // Pop-up to display only once when the user scrolls
    if (!popupShown) {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        popupShown = true;
    }
});

function closePopup() {
    // Function to close the pop-up
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('enroll-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById('email-input');

    if (emailInput.value === '') {
        alert('Please enter your email address.');
    } else {
        alert('Successful! You\'re enrolled.');
        closePopup();
    }
});



// Loading Animation JS Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a'); // All clickable items
        const spinner = document.getElementById('loading-spinner');
        const loadingOverlay = document.getElementById('loading-overlay');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                spinner.style.display = 'block'; // Show the spinner
            
                // Show the loading animation
                loadingOverlay.classList.add('active');
            
                // Use setTimeout to simulate loading
                setTimeout(() => {
                
                    // Check if the link has target="_blank"
                    if (link.target === '_blank') {
                         window.open(link.href, '_blank'); // Open in new tab
                         
                          // Hide spinner and overlay immediately
                            spinner.style.display = 'none';
                            loadingOverlay.classList.remove('active');
                        } else {
                            window.location.href = link.href; // Open in the same tab
                            }
                        }, 2000); // Adjust the time as needed
                         });
                    });
    });

    
    





