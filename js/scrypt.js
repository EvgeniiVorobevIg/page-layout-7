$(document).ready(function () {
    let arrow = document.querySelectorAll('.block-8__arrow');
    for (i = 0; i < arrow.length; i++) {
        let hideMenu = arrow[i].nextElementSibling;
        let arrowState = arrow[i];
        arrow[i].addEventListener('click', function () {
            hideMenu.classList.toggle('open');
            arrowState.classList.toggle('active');
        })
    }
})

