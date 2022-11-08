let zhList = [
    '〇', '一', '二', '三', '四',
    '五', '六', '七', '八', '九',
    '十', '十一', '十二', '十三',
];

let to_zh_num = num => zhList[parseInt(num)];

function to_weekday(num) {
    if (num == '0') return '日';
    else return to_zh_num(num);
}

function is_leap_year(yr) {
    return ((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0));
}

class CalendarDate {
    constructor(date_time) {
        this.year = date_time.getFullYear();
        this.month = date_time.getMonth() + 1;
        this.date = date_time.getDate();
        this.day = date_time.getDay();
    }

    zhRocYear() {
        let fixedYear = (this.year - 1911).toString();
        let result = '';

        for (let char of fixedYear)
            result += to_zh_num(char) + ' ';

        return result + '年';
    }

    zhWeekDay = () => to_weekday(this.day);

    monthImgPath = () => `./static/months/${this.month}.png`;

    fruitImgPath = () => `./static/fruits/${this.month}.jpg`;

    weekdayText = () => `星    期    ${to_weekday(this.day)}`;

    dateImgPath = () => `./static/dates/${this.date}.png`;

    dateFormImgPath() {
        let totalDate;
        if ([1, 3, 5, 7, 8, 10, 12].includes(this.month)) totalDate = 31;
        else totalDate = 30;
        if (this.month == 2) {
            if (is_leap_year(this.year)) totalDate = 29;
            else totalDate = 28;
        }

        return `./static/dateforms/${totalDate}.jpg`;
    }
}