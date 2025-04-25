function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    // Element to type in
    const roleElement = document.getElementById('typing-role');
    const cursor = document.querySelector('.cursor');
    
    // Text array for typing - roles you want to cycle through
    const roles = [
      "Full Stack Developer", 
      "Frontend Developer", 
      "Backend Developer", 
      "MERN Stack Developer", 
      "UI/UX designer"
    ];
    
    // Configuration
    const typingSpeed = 100;      // Typing speed in ms
    const eraseSpeed = 50;        // Erasing speed in ms
    const delayAfterType = 2000;  // How long to pause after typing
    const delayAfterErase = 500;  // How long to pause after erasing
    
    let isTyping = true;
    let charIndex = 0;
    let roleIndex = 0;
    let currentRole = '';
    
    function typeAndErase() {
      // Get current text to work with
      currentRole = roles[roleIndex % roles.length];
      
      // Type text
      if (isTyping) {
        if (charIndex < currentRole.length) {
          roleElement.textContent += currentRole.charAt(charIndex);
          charIndex++;
          setTimeout(typeAndErase, typingSpeed);
        } else {
          isTyping = false;
          setTimeout(typeAndErase, delayAfterType);
        }
      } 
      // Erase text
      else {
        if (charIndex > 0) {
          roleElement.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(typeAndErase, eraseSpeed);
        } else {
          isTyping = true;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeAndErase, delayAfterErase);
        }
      }
    }
    
    // Start the typing animation
    setTimeout(typeAndErase, 500);
  });

     let currentSlide = 0;
     const slidesPerView = 3;
     const totalProjects = document.querySelectorAll('.project-card').length;
     const maxSlides = Math.ceil(totalProjects / slidesPerView) - 1;

     function updateSliderPosition() {
     const sliderTrack = document.querySelector('.slider-track');
     const slideWidth = document.querySelector('.project-card').offsetWidth + 32; // Width + gap
     sliderTrack.style.transform = `translateX(${-currentSlide * slidesPerView * slideWidth}px)`;
  
     // Update dots
      document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
  });
 }

      function moveSlider(direction) {
      currentSlide += direction;
      if (currentSlide < 0) currentSlide = maxSlides;
      if (currentSlide > maxSlides) currentSlide = 0;
      updateSliderPosition();
 }

      function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      updateSliderPosition();
}

      // Initialize slider
      window.addEventListener('load', function() {
      updateSliderPosition();
  
       // Create the correct number of dots
      const dotsContainer = document.querySelector('.slider-dots');
      dotsContainer.innerHTML = '';
  
      for (let i = 0; i <= maxSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.onclick = function() { goToSlide(i); };
      dotsContainer.appendChild(dot);
  }
});

     // Handle window resize
     window.addEventListener('resize', updateSliderPosition);