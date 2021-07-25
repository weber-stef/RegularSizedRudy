          function autoSlide() {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
              }
              slideIndex++;
              if (slideIndex > slides.length) {
                  slideIndex = 1
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex - 1].style.display = "block";
              dots[slideIndex - 1].className += " active";
              setTimeout(autoSlide, fadetime); // Change image every 6 seconds
          }
          showSlides(slideIndex);

          function plusSlides(n) {
              showSlides(slideIndex += n);
          }

          function currentSlide(n) {
              showSlides(slideIndex = n);
          }

          function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");

              if (n > slides.length) {
                  slideIndex = 1
              }

              if (n < 1) {
                  slideIndex = slides.length
              }
              // hide all images at start
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
              }

              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex - 1].style.display = "block";
              dots[slideIndex - 1].className += " active";

          }