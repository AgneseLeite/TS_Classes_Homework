import Carousel_2 from './carousel_2';

export default class Carousel_3 extends Carousel_2 {
    mainImage: HTMLImageElement;
    thumb_1: HTMLImageElement;
    thumb_2: HTMLImageElement;
    thumb_3: HTMLImageElement;
    thumb_4: HTMLImageElement;
    thumb_5: HTMLImageElement;

    constructor(selector: string) {
        super(selector);
        this.mainImage = this.rootElement.querySelector("#main__img");
        this.thumb_1 = this.rootElement.querySelector("#thumb-1");
        this.thumb_2 = this.rootElement.querySelector("#thumb-2");
        this.thumb_3 = this.rootElement.querySelector("#thumb-3");
        this.thumb_4 = this.rootElement.querySelector("#thumb-4");
        this.thumb_5 = this.rootElement.querySelector("#thumb-5");

        this.initExtended_2_Events();
    }

    initExtended_2_Events() {
        this.thumb_1.addEventListener("click", () => {
            this.mainImage.src = this.thumb_1.src;
        });

        this.thumb_2.addEventListener("click", () => {
            this.mainImage.src = this.thumb_2.src;
        });

        this.thumb_3.addEventListener("click", () => {
            this.mainImage.src = this.thumb_3.src;
        });

        this.thumb_4.addEventListener("click", () => {
            this.mainImage.src = this.thumb_4.src;
        });

        this.thumb_5.addEventListener("click", () => {
            this.mainImage.src = this.thumb_5.src;
        });
    }
}