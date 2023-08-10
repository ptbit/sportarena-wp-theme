//localStorage.clear();
const footer = document.querySelector('.footer')

const language = 'EN'
window.addEventListener('load', () => {
    if(localStorage.getItem('cookieStatus') !== 'true'){

        const cookieBlock = document.createElement('div')
        cookieBlock.classList.add('footer__cookie')
        footer.append(cookieBlock)

        let textCookie = '';
        let textBtn = '' ;
        if(language === 'EN'){
            textCookie = 'This site uses cookies to save data. By continuing to follow the site, you will be welcome to save cookies'
            textBtn = 'Okey'
        } else {
            textCookie = 'Этот сайт использует файлы cookie для сохранения данных. Продолжая следить за сайтом, вы можете сохранить файлы cookie.'
            textBtn = 'Океюшки'
        }

        const closeBtn = `<div class="close-cookie"><span></span> </div>`;
        const imgCookie = `<div class="footer__cookie-img"><img loading="lazy" src="img/general-block-image/footer/cookie.webp" width="40" height="40" alt="image-casino"></div>`;
        const cookieInfo = `<p class="footer__cookie-text">${textCookie}</p>` + `<button type="button" aria-label="button-close" class="footer__cookie-btn orange-btn">${textBtn}</button>`;
        cookieBlock.innerHTML = closeBtn + imgCookie + cookieInfo;

        const closeBtnDoc = cookieBlock.querySelector('.close-cookie');
        const okBtnDoc = cookieBlock.querySelector('.footer__cookie-btn');

        closeBtnDoc.addEventListener('click', () => {
            cookieBlock.classList.add('_hidden');
        })

        okBtnDoc.addEventListener('click', () => {
            localStorage.setItem('cookieStatus', 'true')
            console.log(localStorage.coockieStatus)
            cookieBlock.classList.add('_hidden');
        })
    }
})


