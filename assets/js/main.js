// slick
$(document).ready(function() {
    $('.slider__inner').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
    });
});

// tabs
const head = document.getElementById('tabs-head')
const body = document.getElementById('tabs-body')

const getActiveTabName = () => {
    return head.querySelector('.integration__tab--active').dataset.tab
}

const setActiveContent = () => {
    if (body.querySelector('.integration_text--active'))
        body.querySelector('.integration_text--active').classList.remove('integration_text--active')

    body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('integration_text--active')
}

if (!head.querySelector('.integration__tab--active'))
    head.querySelector('.integration__tab').classList.add('integration__tab--active')

setActiveContent(getActiveTabName())

head.addEventListener('click', e => {
    const caption = e.target.closest('.integration__tab')
    if (!caption) return
    if (caption.classList.contains('.integration__tab--active')) return

    if (head.querySelector('.integration__tab--active'))
        head.querySelector('.integration__tab--active').classList.remove('integration__tab--active')

    caption.classList.add('integration__tab--active')
    setActiveContent(getActiveTabName())
})
