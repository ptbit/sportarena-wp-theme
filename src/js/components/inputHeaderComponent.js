const inputButton = document.querySelector('.header__search-btn');
const inputText = document.querySelector('.header__search-input');
const inputSearchImage = document.querySelector('.header__search-image');
//menu om search
const searchFilled = document.querySelector('.search-dd__filled');



if(window.innerWidth >1024){
    inputButton.addEventListener('click', (event) => {
        inputText.classList.toggle('_active');
        inputButton.classList.toggle('_active');
        inputSearchImage.classList.toggle('_active');
        searchFilled.classList.toggle('_active');

    })
}



