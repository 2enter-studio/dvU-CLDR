// const main_width = 1417 / 2;
let main_width, main_height, text_size;
let back_img, fruit_img, month_img, weekday_img, date_img;
let cldDate;
let first_date = new Date('0001-01-01');

function image_loading(date_input) {
    cldDate = new CalendarDate(date_input);

    back_img = loadImage('./static/backImg.png');
    fruit_img = loadImage(cldDate.fruitImgPath());
    month_img = loadImage(cldDate.monthImgPath());
    weekday_img = loadImage(cldDate.weekdayImgPath());
    date_img = loadImage(cldDate.dateImgPath());
    date_form_img = loadImage(cldDate.dateFormImgPath());
}

function show_calendar() {
    image(back_img, 0, 0, main_width, main_height);
    image(fruit_img, 0, 0, main_width, main_width * .29);
    image(date_form_img, main_width * .078, main_width * .456, main_width * .091, main_width * .104);
    image(month_img, main_width * .845, main_width * .456, main_width * .083, main_width * .103);
    image(weekday_img, main_width * .230, main_width * 1.02, main_width * .535, main_width * .123);
    image(date_img, main_width * .255, main_height * .33, main_width * .50, main_width * .38);

    stroke(0, 0, 255);

    textSize(text_size);
    text(cldDate.zhRocYear(), main_width * .08, main_width * .44);

    textSize(text_size * 1.8);
    text(cldDate.year, main_width * .847, main_width * .44);
}

function preload() {
    image_loading(new Date());
}

function setup() {
    frameRate(1);

    main_height = (windowWidth > windowHeight) ? windowHeight * .96 : windowWidth * .96;
    main_width = main_height * 2 / 3;
    text_size = main_width * .0195

    let main_canvas = createCanvas(main_width, main_height)
    main_canvas.parent('p5-container')

    show_calendar();
}

function draw() { }