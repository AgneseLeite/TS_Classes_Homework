import Carousel_1 from './carousel_1';

export default class Carousel_2 extends Carousel_1 {
    dotLinks: any;

    constructor(selector: string) {
        super(selector);
        this.dotLinks = this.rootElement.querySelectorAll(".nav__link");

        this.initExtendedEvents();
    }

    initExtendedEvents() {
       
        this.dotLinks.forEach((link: any) => {
            link.addEventListener("click", () => {
                this.changeImage(this.currentImage + 1);
            })
        });
    }

    changeImage(nextImg: number): void {
        super.changeImage(nextImg);
        this.dotLinks[this.currentImage].classList.toggle("active");
    }
}

