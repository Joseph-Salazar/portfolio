document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skills__box-bar');

    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.setProperty('--percentage', `${percentage}%`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        const dropdown = square.querySelector(".square-content");
        square.addEventListener("click", () => {
            dropdown.classList.toggle("open");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.gradient-text');
    heading.innerHTML = heading.textContent.split('').map(letter => `<span>${letter}</span>`).join('');

    // Animation function
    function animateLetters() {
        gsap.from(".gradient-text span", {
            duration: 0.5,
            y: '-100%',
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "all" // This ensures the animation can run again if needed
        });
    }

    // Set up Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateLetters();
                // Optional: Unobserve after animation triggers
                observer.unobserve(heading);
            }
        });
    }, {
        threshold: 0.1 // Adjust this to determine how much of the element should be visible before triggering
    });

    observer.observe(heading);
});
