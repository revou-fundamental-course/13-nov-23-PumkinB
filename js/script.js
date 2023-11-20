window.onload = function () {
    const slider = document.getElementById("slider");
    let images = [];

    images[0] = "assets/t2.webp";
    images[1] = "assets/wisata-australia-18-Archdaily.jpg";
    images[2] = "assets/1686731114-1920x1280.webp";
    images[3] = "assets/2l6fxrazg3.jpg";
    images[4] = "assets/078314100_1572322987-taipei-taiwan-2115887_960_720.webp";

    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
      const transformValue = -index * 100 + "%";
      slider.style.transform = `translateX(${transformValue})`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);

      if (currentIndex === 0) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      }
    }

    slider.addEventListener("transitionend", () => {
      if (currentIndex === images.length - 1) {
        currentIndex = 0;
        showSlide(currentIndex);
      }
    });

    showSlide(currentIndex);

    slideInterval = setInterval(nextSlide, 4000);
    
  };

  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const travelInput = document.querySelector("#travel-input");
  const success = document.querySelector(".success");
  const errorNodes = document.querySelectorAll(".error-message");
  
  // Validate data
  function validateForm() {
    clearMessages();
  
    if (nameInput.value.trim().length < 1) {
      errorNodes[0].innerText = "Please fill in your name";
      nameInput.classList.add("error-border");
    }
  
    if (!emailIsValid(emailInput.value)) {
      errorNodes[1].innerText = "Invalid email address";
      emailInput.classList.add("error-border");
    }
  
    if (travelInput.value.trim().length < 1 || travelInput.value === "selected disabled hidden") {
      errorNodes[2].innerText = "Please select an option";
      travelInput.classList.add("error-border");
    }
  
    // Return false to prevent form submission if there are errors
    return !(errorNodes[0].innerText || errorNodes[1].innerText || errorNodes[2].innerText);
  }
  
  // Clear error/success messages 
  function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
      errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    travelInput.classList.remove("error-border");
  }
  
  // Check if email is valid
  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }