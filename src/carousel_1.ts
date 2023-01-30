export default class Carousel_1 {
    rootElement: HTMLDivElement;
    images: any;
    index: number = 0;
    currentImage: number;
    buttonNext: HTMLButtonElement;
    buttonPrev: HTMLButtonElement;
    nextImg: number;


    constructor(selector: string) {
        this.rootElement = document.querySelector(selector);
        this.images = this.rootElement.querySelectorAll(".image");
        this.index;
        this.currentImage = this.index;
        this.buttonNext = this.rootElement.querySelector(".button--next");
        this.buttonPrev = this.rootElement.querySelector(".button--prev");
        this.nextImg;

        this.initEvents();
    }

    initEvents() {

        this.buttonNext.addEventListener("click", () => {
            this.changeImage(this.currentImage + 1)
        });

        this.buttonPrev.addEventListener("click", () => {
            this.changeImage(this.currentImage - 1)
        });
        
        }

        changeImage(nextImg: number) {
            if (nextImg >= this.images.length) {
                nextImg = 0;
            }
            if (nextImg < 0) {
                nextImg = this.images.length - 1}
            
                this.images[this.currentImage].classList.toggle("active");
                this.images[nextImg].classList.toggle("active");
            
                this.currentImage = nextImg;
            
        }
    }



    