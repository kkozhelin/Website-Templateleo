"use strict"

let btns = document.querySelectorAll('.service-btn')

document.querySelector('.services-box').addEventListener('click', event => {
    btns.forEach(function(btn) {
        if (!event.target.classList.contains('service-btn')) {
            return;
          }
        btn.classList.remove('active');
        event.target.classList.add('active');
    })
})
