let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*=============== Image Slider ===============*/
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4) {
    counter = 1;
  }
}, 5000);

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//       contactName = document.getElementById('contact-name'),
//       contactEmail = document.getElementById('contact-email'),
//       contactProject = document.getElementById('contact-project'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) =>{
//   e.preventDefault()

//   //Check if the field has a value
//   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
//    //Add and remove color  
//    contactMessage.classList.remove('color-blue')
//    contactMessage.classList.add('color-red') 

//    //show message  
//    contactMessage.textContent = 'Write all the input fields 📩'
//    }else{
//    //serviceID - templateID - #form - publickey
//     emailjs.sendForm('', '', '#contact-form', '')
//     .then(() =>{
//       //show message and add color
//       contactMessage.classList.add('color-blue')
//       contactMessage.textContent = 'Message sent ✅'

//       //Remove message after five seconds
//       setTimeout(() => {
//         contactMessage.textContent = ''
//          //(property) Node.textContent: string | null
//       }, 5000)
//      }, (error) => {
//        alert('OOPS! SOMRTHING HAS FAILED...', error)
//      })

//     //To clear the input field
//     contactName.value = ''
//     contactEmail.value = ''
//     contactProject.value = ''
//   }
// }
// contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal ({
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true,
})

sr.reveal('.text',{delay: 100, origin: 'bottom'})
sr.reveal('.text1',{delay: 100, origin: 'bottom'})
sr.reveal('.form-container form', {delay: 500, origin: 'left'})
sr.reveal('.heading', {delay: 300, origin: 'top'})

sr.reveal('.about-img', {delay: 400, origin: 'left'})
sr.reveal('.about-img1', {delay: 400, origin: 'left'})
sr.reveal('.about-text',{delay: 300, origin: 'right'})
sr.reveal('.about-text1',{delay: 400, origin: 'right'})

sr.reveal('.row-1', {delay: 300, origin: 'right'})
sr.reveal('.row-2', {delay: 300, origin: 'left'})
sr.reveal('.services-container .box', {delay: 300, origin: 'top'})

sr.reveal('.contact__content:nth-child(1)', {origin: `left`})  
sr.reveal('.contact__content:nth-child(2)', {origin: `right`})  

