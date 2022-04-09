const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle =>  {
    toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
    
})

const faqs = document.querySelectorAll('.faq')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    faqs.forEach(faq => {
        const boxTop = faq.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
          faq.classList.add('show')
        }  else {
          faq.classList.remove('show')
        }
    })

            
}
