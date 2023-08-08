//тестовая кнопка попапа
const body = document.querySelector('body')

//все стадии

const formPopupTwo = document.querySelector('.feedback__form')
const checkBox = document.querySelector('.js-check')
const checkBoxView = document.querySelector('.slider')
const inputEmail = document.querySelector('.js-email')
const textInputs = document.querySelectorAll('.js-input')
const selects = document.querySelectorAll('.feedback__form-select')



//функция для валидации имейла
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

formPopupTwo.addEventListener("submit", (event) => {
    event.preventDefault()
    //массив из всех пустых инпутов и селектов
    emptyInputs = Array.from(textInputs).filter((input) => input.value === "");
    emptySelects = Array.from(selects).filter((select) => select.selectedIndex === 0);

    let allInputs = formPopupTwo.querySelectorAll('.js-input, .feedback__form-select, .js-email')

    if(window.innerWidth <= 1024){
        for (let i = 0; i < allInputs.length; i++) {
            const input = allInputs[i];
            if (!input.value) {
                scrollInto(input);
                break;
            }
        }
    }

    for (let i = 0; i < allInputs.length; i++) {
        const input = allInputs[i];
        if (!input.value) {
            input.classList.add('_error')
        }
        if (input.value) {
            input.classList.remove('_error')
        }
    }

    //проверка чекбокса на пустоту
    if (!checkBox.checked) {
        checkBoxView.classList.add("_error");
    } else {
        checkBoxView.classList.remove("_error");
    }

    //проверка имейла
    let emailVal = inputEmail.value;
    if(!validateEmail(emailVal)) {
        inputEmail.classList.add('_error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    function scrollInto(element){
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const scrollToPosition = elementPosition + scrollPosition - 40;
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });}


    //блокировка кнопки до момента, пока все инпуты не будут заполнены
    if (emptyInputs.length !== 0 || !checkBox.checked || emptySelects.length !== 0 ) {
        console.log("inputs not filled");
        return false
    } else {
        console.log("go");

        //popup
        const popupBtnClose = document.querySelector('.popup-message__info-btn-close')
        const popupBtnBack = document.querySelector('.popup-message__info-link')
        const popUpSubscribes = document.querySelector('.popup-message')
        body.classList.add('_lock')
        popUpSubscribes.classList.remove('_hidden')
        popUpSubscribes.classList.add('_show')
        popUpSubscribes.addEventListener('click', e => {
            if(e.target === popUpSubscribes || e.target === popupBtnBack || e.target === popupBtnClose) {
                body.classList.remove('_lock')
                popUpSubscribes.classList.add('_hidden')
            }
        })
    }
});



