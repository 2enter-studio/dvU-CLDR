// const SIZE = 1417 / 2;
let SIZE, H, TEXT_SIZE;
let backImg, fruitImg, monthImg;
let weekdayImg, dateImg;
let cldDate;
const MAX_WIDTH = 650;

function preload() {
    if (windowWidth > MAX_WIDTH) SIZE = MAX_WIDTH;
    else SIZE = windowWidth * .85;

    H = SIZE * 3 / 2;
    TEXT_SIZE = SIZE * .0195
    console.log(SIZE);
    let currentDate = new Date();
    cldDate = new CalendarDate(currentDate);
    backImg = loadImage('./static/backImg.png');
    fruitImg = loadImage(cldDate.fruitImgPath());
    monthImg = loadImage(cldDate.monthImgPath());
    weekdayImg = loadImage(cldDate.weekdayImgPath());
    dateImg = loadImage(cldDate.dateImgPath());
    dateFormImg = loadImage(cldDate.dateFormImgPath());
}

function setup() {
    let mainCanvas = createCanvas(SIZE, H)
    mainCanvas.parent('p5-container')

    image(backImg, 0, 0, SIZE, H);
    image(fruitImg, 0, 0, SIZE, SIZE * .25);
    image(dateFormImg, SIZE * .078, SIZE * .456, SIZE * .091, SIZE * .104);
    image(monthImg, SIZE * .845, SIZE * .456, SIZE * .08, SIZE * .1);
    image(weekdayImg, SIZE * .225, SIZE * 1.02, SIZE * .54, SIZE * .125);
    image(dateImg, SIZE * .255, H * .35, SIZE * .50, SIZE * .36);

    stroke(0, 0, 255);

    textSize(TEXT_SIZE);
    text(cldDate.zhRocYear(), SIZE * .08, SIZE * .435);

    textSize(TEXT_SIZE * 1.8);
    text(cldDate.year, SIZE * .85, SIZE * .435);
}

function draw() { }