



document.addEventListener('DOMContentLoaded', function() {
    lienPourFlou = document.querySelector('#learn_more');
    content = document.querySelector('.home');

    lienPourFlou.addEventListener('mouseover', function() {
        content.classList.add('flou');
        lienPourFlou = document.querySelector('.lienNonFlou')
        lienPourFlou.style.zIndex = '100'
    });

    lienPourFlou.addEventListener('mouseout', function() {
        content.classList.remove('flou');
        lienPourFlou.style.zIndex = '10'
    });
});
