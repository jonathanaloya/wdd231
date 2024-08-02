document.addEventListener('DOMContentLoaded', function() {
    let headerSlides = document.querySelectorAll('.slide');
    let headerCircles = document.querySelectorAll('.nav-circles .circle');
    let photoSlides = document.querySelectorAll('.photo-slide');
    let photoCircles = document.querySelectorAll('.photo-nav-circles .circle');
    let currentSlide = 0;
    let currentPhotoSlide = 0;

    function showHeaderSlide(index) {
        headerSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        headerCircles.forEach((circle, i) => {
            circle.classList.remove('active');
            if (i === index) {
                circle.classList.add('active');
            }
        });
    }

    function showPhotoSlide(index) {
        photoSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        photoCircles.forEach((circle, i) => {
            circle.classList.remove('active');
            if (i === index) {
                circle.classList.add('active');
            }
        });
    }

    function nextHeaderSlide() {
        currentSlide = (currentSlide + 1) % headerSlides.length;
        showHeaderSlide(currentSlide);
        // Sync center content slideshow if desired
        showPhotoSlide(currentSlide); 
    }

    function nextPhotoSlide() {
        currentPhotoSlide = (currentPhotoSlide + 1) % photoSlides.length;
        showPhotoSlide(currentPhotoSlide);
    }

    headerCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            currentSlide = index;
            showHeaderSlide(currentSlide);
            showPhotoSlide(currentSlide); // Sync with center content
        });
    });

    photoCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            currentPhotoSlide = index;
            showPhotoSlide(currentPhotoSlide);
        });
    });

    // Initialize slides
    showHeaderSlide(currentSlide);
    showPhotoSlide(currentPhotoSlide);

    // Automatically change header slide every 5 seconds
    setInterval(nextHeaderSlide, 5000);

    // Automatically change center content slide every 7 seconds
    setInterval(nextPhotoSlide, 5000); 
    
});
