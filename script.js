document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__meny').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.footer').classList.toggle('footer__fixed');
    document.querySelector('.services__button').classList.toggle('button__fixed');
    // if(document.footer.style.display = 'block'){
    //     document.footer.style.overflow = 'hidden'
    // } else {
    //     document.body.style.overflow = 'auto'
    // }
    // document.querySelector('.wrapper').classList.toggle('shadow')
    })