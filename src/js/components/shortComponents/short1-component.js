const bestItemWrapper = document.querySelectorAll('.casino-best__item-wrapper');
const bestList = document.querySelector('.casino-best__list')
bestItemWrapper.forEach(item => {
    let btnShow = item.querySelector('.casino-best__item-reviews-btn');
    let listReviews = item.querySelector('.casino-best__item-reviews');

    btnShow.addEventListener('click', () => {
        const allBtnShow = document.querySelectorAll('.casino-best__item-reviews-btn')

        listReviews.classList.toggle('_show');
        if(!btnShow.classList.contains('_openList') ){
            bestList.classList.add('_openItem')
        } else {
            bestList.classList.remove('_openItem')
        }
        btnShow.classList.toggle('_openList');

        allBtnShow.forEach(item=>{
            if(item.classList.contains('_openList')){
                bestList.classList.add('_openItem')
            }
        })

    })
})