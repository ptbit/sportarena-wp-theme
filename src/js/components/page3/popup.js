if(document.querySelector('.button-message') !== null){
    const popupBtnOpen = document.querySelector('.button-message')
    const popupBtnClose = document.querySelector('.popup-message__info-btn-close')
    const popupBtnBack = document.querySelector('.popup-message__info-link')
    const popUpSubscribes = document.querySelector('.popup-message')
    const body = document.querySelector('body')

    popUpSubscribes.addEventListener('click', e => {
        if(e.target === popUpSubscribes || e.target === popupBtnBack || e.target === popupBtnClose) {
            body.classList.remove('_lock')
            popUpSubscribes.classList.add('_hidden')
        }
    })

    popupBtnOpen.addEventListener('click', () => {
        body.classList.add('_lock')
        popUpSubscribes.classList.remove('_hidden')
        popUpSubscribes.classList.add('_show')
    })
}


