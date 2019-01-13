function changeTheme(title_color='rgb(195, 195, 195)', back_color='rgb(43, 42, 42)') {
    let str_back = 'linear-gradient(rgba(0, 0, 0, 1.6), rgba(0, 0, 0, 0.6)), url(../images/main_pic.jpg) no-repeat'
    document.querySelector('.main_page').style.background = str_back;
    document.querySelector('.main_page').style.backgroundSize = 'cover';
    document.querySelector('.main_page').style.backgroundPosition = 'center';

    document.querySelector('#header').style.backgroundColor = back_color;
    [...document.querySelectorAll('.header_list li a')].forEach(li => {
        li.style.color = title_color;
    });
    document.querySelector('#smooth_link_1').style.backgroundColor = back_color;
    document.querySelector('#smooth_link_1 h1').style.color = title_color;
    [...document.querySelectorAll('.list_doctors img')].forEach(img => {
        img.style.opacity = '0.6';
    });
    [...document.querySelectorAll('.desc-doctors h2')].forEach(h2 => {
        h2.style.color = title_color
    });
    [...document.querySelectorAll('.desc-doctors p')].forEach(para => {
        para.style.color = title_color;
    });
    document.querySelector('#smooth_link_2').style.backgroundColor = back_color;
    document.querySelector('#smooth_link_2 h1').style.color = title_color;
    [...document.querySelectorAll('.tabs label')].forEach(label => {
        label.style.backgroundColor = 'rgb(219, 240, 254)';
    });
    document.querySelector('#smooth_link_3').style.backgroundColor = back_color;
    document.querySelector('#smooth_link_3 h1').style.color = title_color;
}

document.querySelector('#styled-checkbox').addEventListener('change', ({ target }) => {
    if(target.checked){
        changeTheme()
        document.querySelector('.right_pos').remove();
    }
});

function smoothScrollTo(anchor, link) {
    const _anchor = document.getElementById(anchor);
    const _link = document.getElementById(link);
    _anchor.addEventListener('click', e => {
        if (window.scrollTo) {
            e.preventDefault();
            window.scrollTo({
                "behavior": "smooth",
                "top": _link.offsetTop
            })
        }
    })
}

smoothScrollTo('anchor_1', 'smooth_link_1');
smoothScrollTo('anchor_2', 'smooth_link_2');
smoothScrollTo('anchor_3', 'smooth_link_3');
