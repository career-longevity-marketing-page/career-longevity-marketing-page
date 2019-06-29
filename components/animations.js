

const animateElements = () => {

    const headerElements = document.querySelector('#introduction .inner-text');
    const navElements = document.querySelector('.dropdown-content');
    const iphoneElement = document.querySelector('.iphone-section img');

    // headerElements
    TweenMax.fromTo(headerElements, 2, {
        opacity: 0,
        top: 50
    }, {
        opacity: 1,
        top: 0
    });

    // navElements
    TweenMax.fromTo(navElements, 2, {
        opacity: 0,
        top: 50
    }, {
        opacity: 1,
        top: 0,
        delay: 1
    });

     // iphoneImg
     TweenMax.fromTo(iphoneElement, 2, {
        opacity: 0,
        left: 50
    }, {
        opacity: 1,
        left: 0,
        delay: 2
    });

};

animateElements();