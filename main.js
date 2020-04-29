$('nav ul li a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

$('div.arrow').on('click', function () {
    const goToSection = "#offer";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

var $viewportHeight = $(window).height();

$(document).on('scroll', function () {
    if ($(window).scrollTop() > $viewportHeight - 1) {
        $('nav').addClass('active');
    } else {
        $('nav').removeClass('active');
    }

})


let names = document.querySelector(".names");
let showNames = document.querySelector("p.showNames");
const biggerFont = document.querySelector('button.changeFontSizeB');
const smallerFont = document.querySelector('button.changeFontSizeS');
const normalFontFamily = document.querySelector('#normalFont');
const cursiveFontFamily = document.querySelector('#cursiveFont');
let textSize = 30;
showNames.style.fontSize = textSize + "px;"
let textFamily = 'Quicksand';

names.addEventListener('keyup', function () {
    showNames.textContent = names.value;
});

biggerFont.addEventListener('click', function () {
    if (textSize < 150) {
        textSize += 2;
        showNames.style.fontSize = textSize + "px";
    }
});

smallerFont.addEventListener('click', function () {
    if (textSize >= 12) {
        textSize -= 2;
        showNames.style.fontSize = textSize + "px";
    }
});

normalFontFamily.addEventListener('change', function () {
    let isChecked = normalFontFamily.checked;
    textFamily = 'Quicksand';
    if (isChecked) {
        showNames.style.fontFamily = textFamily;
    }
});

cursiveFontFamily.addEventListener('change', function () {
    let isChecked = cursiveFontFamily.checked;
    textFamily = 'Allura';
    if (isChecked) {
        showNames.style.fontFamily = textFamily;
    }
});



/* Media */
const burger = document.querySelector("aside");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

const menu = document.querySelector("nav");

burger.addEventListener('click', function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    menu.classList.toggle("mobile");
})

menu.addEventListener('click', function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    menu.classList.toggle("mobile");
})