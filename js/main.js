// Make header sticky on top when scrolling
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-navbar");

  if (window.scrollY > 80) {
    header.classList.add("fixed-header");
    document.body.classList.add("header-fixed");
  } else {
    header.classList.remove("fixed-header");
    document.body.classList.remove("header-fixed");
  }
});

// Change navbar background on click
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.navbar-nav .nav-link')
        .forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

//Testimonials
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("testimonialTrack");
  const cards = document.querySelectorAll(".testimonial-card");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let index = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    updateSlider();
  });

  setInterval(() => {
    index = (index + 1) % cards.length;
    updateSlider();
  }, 4000);
});

