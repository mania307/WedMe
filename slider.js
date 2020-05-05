class Slider {
    constructor(images) {
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;
        this.slideArrayLenght = 0;
        this.slideCaption = null;

        this.UISelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]'
        }
    }
    initializerSlider() {
        this.slide = document.querySelector(this.UISelectors.slide);
        this.prevBtn = document.querySelector(this.UISelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UISelectors.buttonNext);

        this.image = document.createElement('img');
        this.image.classList.add('slide_image');

        this.setSlideAtributes(0);

        this.slideArrayLenght = this.images && this.images.length;

        this.slideCaption = document.createElement('figcaption');
        this.addCaption();
        this.slideCaption.classList.add('slide_caption');


        this.slide.appendChild(this.image);
        this.slide.appendChild(this.slideCaption);
        this.disableButtons();
        this.addListeners();
    }

    addListeners() {
        this.prevBtn.addEventListener('click', () => this.changeSlide(this.currentSlide - 1));
        this.nextBtn.addEventListener('click', () => this.changeSlide(this.currentSlide + 1));

        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.changeSlide(this.currentSlide - 1)
            } else if (e.keyCode === 39) {
                this.changeSlide(this.currentSlide + 1)
            }
        })
    }

    disableButtons() {
        this.currentSlide === 0 ? this.prevBtn.setAttribute('disabled', true) : this.prevBtn.removeAttribute('disabled');
        this.currentSlide === this.slideArrayLenght - 1 ? this.nextBtn.setAttribute('disabled', true) : this.nextBtn.removeAttribute('disabled');
    }

    changeSlide(index) {
        if (index === -1 || index === this.slideArrayLenght) return;
        this.currentSlide = index;
        this.setSlideAtributes(index);
        this.disableButtons();
        this.addCaption();
    }

    addCaption() {
        this.slideCaption.innerText = `${this.currentSlide + 1}/${this.slideArrayLenght}`;
    }

    setSlideAtributes(index) {
        this.image.setAttribute('src', Array.isArray(this.images) && this.images.length && this.images[index]);
        this.image.setAttribute('alt', `Slide ${index+1}`);
    }
}