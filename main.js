/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   /*   
      The code for sending emails is just an example.

      Create your account at https://www.emailjs.com/ and 
      follow the instructions in the images for sending emails 
      that are in the project folder.
   */

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_h5j9pgk','template_1h9drc7','#contact-form','DRDdKYfctl50wpOkT')

   .then(() =>{
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      // Remove message after five seconds
      setTimeout(() =>{
         contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()
   }, () =>{
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
   })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animations repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})

//================== IMAGE SLIDER IN HOME PAGE ========================//
// Array of images and names for the slider
const slides = [
    { img: 'assets/img/Home/Banner/img1.jpg'},
    { img: 'assets/img/Home/Banner/img2.jpg'},
    { img: 'assets/img/Home/Banner/img3.jpg'},
    { img: 'assets/img/Home/Banner/img4.jpg'},
    { img: 'assets/img/Home/Banner/img5.jpg'},
];

// Select elements
const profileImage = document.querySelector('.perfil__img');
let currentSlide = 0;

// Function to update the slide
function updateSlide() {
    // Update image source and name text
    profileImage.src = slides[currentSlide].img;
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

// Set interval to change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide setup
updateSlide();

