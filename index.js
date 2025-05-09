
  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  // <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  
    (function(){
      emailjs.init("z08ubUjUZCiF6yIsc");
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.sendForm("service_eqg7dej", "template_dpoka6m", this)
        .then(function(response) {
          document.getElementById("status").innerText = "Message sent successfully!";
        }, function(error) {
          console.log("EmailJS Error:", error);
          document.getElementById("status").innerText = "Failed to send message: " + error.text;
        });
    });

    // Pause animation on touch
    const servicesCarousel = document.getElementById('services-carousel');
    servicesCarousel.addEventListener('touchstart', () => {
      servicesCarousel.classList.add('paused');
    });

    servicesCarousel.addEventListener('touchend', () => {
      servicesCarousel.classList.remove('paused');
    });

    // Adjust animation duration based on number of cards
    document.addEventListener('DOMContentLoaded', () => {
      const carousel = document.querySelector('.marquee-content');
      const cards = document.querySelectorAll('.service-card');
      const cardCount = cards.length / 2; // Since cards are duplicated
      const animationDuration = cardCount * 4; // 4 seconds per card
      carousel.style.animationDuration = `${animationDuration}s`;
    });
  