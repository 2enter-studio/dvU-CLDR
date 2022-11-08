'use strict'

let main_width, main_height, text_size, main_canvas;
let back_img, fruit_img, month_img, weekday_img, date_img, date_form_img;
let cld;
let date = '';

function image_loading(date_input) {
    cld = new CalendarDate(date_input);

    back_img = loadImage('./static/backImg.jpg');
    fruit_img = loadImage(cld.fruitImgPath());
    month_img = loadImage(cld.monthImgPath());
    date_img = loadImage(cld.dateImgPath());
    date_form_img = loadImage(cld.dateFormImgPath());
}

function show_calendar() {
    translate((main_height - main_width) / 2, 0);
    image(back_img, 0, 0, main_width, main_height);
    image(fruit_img, 0, 0, main_width, main_width * .29);
    image(date_form_img, main_width * .078, main_width * .456, main_width * .091, main_width * .104);
    image(month_img, main_width * .845, main_width * .456, main_width * .083, main_width * .103);
    // image(weekday_img, main_width * .230, main_width * 1.02, main_width * .535, main_width * .123);
    image(date_img, main_width * .255, main_height * .33, main_width * .50, main_width * .38);

    textSize(text_size * 4.1);
    stroke(255);
    fill(255);
    text(cld.weekdayText(), main_width * .290, main_width * 1.105);

    stroke(0, 0, 255);
    fill(0, 0, 255);

    textSize(text_size);
    text(cld.zhRocYear(), main_width * .08, main_width * .44);

    textSize(text_size * 1.8);
    text(cld.year, main_width * .847, main_width * .44);
}

function preload() {
    image_loading((date != '')
        ? new Date(date)
        : new Date()
    );
}

function setup() {
    frameRate(1);
    background(32, 33, 36);


    main_height = windowHeight;
    main_width = main_height * 0.66666;
    if (main_width >= windowWidth) {
        main_width = windowWidth;
        main_height = main_width * 1.5;
    }

    text_size = main_width * .0195;

    main_canvas = createCanvas(main_height, main_height);
    main_canvas.parent('main')

    show_calendar();
}