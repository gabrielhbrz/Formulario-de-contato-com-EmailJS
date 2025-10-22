(function(){
    emailjs.init("SGKB-Rpp0vsVIi4wm");  
})();

const contactForm = document.getElementById('contactForm')
const successMessage = document.getElementById('success-message')

contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = {
        to_name: "Admin",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
    };

    emailjs.send('service_s0tbx12', 'template_xqz6zt9', formData).then(function (response){
        successMessage.classList.remove('hidden')

        contactForm.reset()

        setTimeout(() => {
            successMessage.classList.add('hidden')
        }, 5000)
    }).catch(function (error){
        alert('Falha ao enviar. Por favor tente novamente.')
    })

})
