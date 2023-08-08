const slotItem = document.querySelectorAll('.slot__item');
slotItem.forEach(item => {
    let btnItemShow = item.querySelector('.slot__item-info');
    let textItemInfo = item.querySelector('.slot__item-info-text');
    btnItemShow.addEventListener('click', ()=> {
        textItemInfo.classList.toggle('_show');
    })
})