import Carousel_3 from './carousel_3';

export default class Carousel_4 extends Carousel_3 {
    imageArray: any[];
    image_1: HTMLImageElement;
    image_2: HTMLImageElement;
    image_3: HTMLImageElement;
    image_4: HTMLImageElement;
    image_5: HTMLImageElement;
    image_6: HTMLImageElement;
    image: any;
    time: number = 3000;
    timerLimit: number;
    timerBtn: HTMLButtonElement;

    constructor(selector: string) {
        super(selector);
        this.image_1 = this.rootElement.querySelector(".img-1");
        this.image_2 = this.rootElement.querySelector(".img-2");
        this.image_3 = this.rootElement.querySelector(".img-3");
        this.image_4 = this.rootElement.querySelector(".img-4");
        this.image_5 = this.rootElement.querySelector(".img-5");
        this.imageArray = Array.from(this.rootElement.querySelectorAll(".image"));
        this.imageArray[0] = this.image_1.src;
        this.imageArray[1] = this.image_2.src;
        this.imageArray[2] = this.image_3.src;
        this.imageArray[3] = this.image_4.src;
        this.imageArray[4] = this.image_5.src;
        this.image = this.rootElement.querySelectorAll(".image");
        this.timerLimit = this.time;
        this.timerBtn = this.rootElement.querySelector(".timer-btn");

        this.initExtended_3_Events();
    }

    initExtended_3_Events() {
        
        this.timerBtn.addEventListener("click", () => {
            this.startTimer();
        }
    )};

    startTimer() {
        console.log("hihihi");
    }

}