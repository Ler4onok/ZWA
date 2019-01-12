// here will be write JavaScript code master of Front-End Development Akhmed Ibragimov

function smoothScrollTo(anchor, link) {
    const _anchor = document.getElementById(anchor);
    const _link = document.getElementById(link);
    console.log(_anchor, _link);
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
