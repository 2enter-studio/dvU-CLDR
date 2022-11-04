// const SIZE = 1417 / 2;
let SIZE, H;
let backImg, fruitImg, monthImg;
let weekdayImg, dateImg;
let cldDate;
const MAX_WIDTH = 650;

function preload() {
    if (windowWidth > MAX_WIDTH) SIZE = MAX_WIDTH;
    else SIZE = windowWidth * .85;

    H = SIZE * 3 / 2;
    console.log(SIZE);
    let currentDate = new Date();
    cldDate = new CalendarDate(currentDate);
    backImg = loadImage('./static/backImg.png');
    fruitImg = loadImage(cldDate.fruitImgPath());
    monthImg = loadImage(cldDate.monthImgPath());
    // weekdayImg = loadImage(cldDate.weekdayImgPath());
    dateImg = loadImage(cldDate.dateImgPath());
}

function setup() {
    let mainCanvas = createCanvas(SIZE, H)
    mainCanvas.parent('p5-container')
    image(backImg, 0, 0, SIZE, H);
    image(fruitImg, 0, 0, SIZE, SIZE / 4);
    image(monthImg, SIZE * .845, SIZE * .457, SIZE * .08, SIZE * .1);
    image(dateImg, SIZE * .27, H * .35, SIZE * .25, SIZE * .36);


    // console.log(currentDate.getDate());
}

function draw() { }