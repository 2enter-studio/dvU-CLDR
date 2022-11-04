let zhList = [
    '〇', '一', '二', '三', '四',
    '五', '六', '七', '八', '九',
    '十', '十一', '十二',
];

function toZh(ch) {
    return zhList[parseInt(ch)];
}

function toWeekDay(ch) {
    if (ch == '0') return '日';
    else return toZh(ch);
}

function isLeapYear(yr) {
    return ((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0))
}

class CalendarDate {
    constructor(datetime) {
        this.datetime = datetime;
        this.year = datetime.getFullYear();
        this.month = datetime.getMonth();
        this.date = datetime.getDate();
        this.day = datetime.getDay();
    }

    zhRocYear() {
        let fixedYear = (this.year - 1911).toString();
        let result = '';
        for (let char of fixedYear) {
            result += toZh(char)
        }
        return result += '年';
    }

    zhWeekDay() {
        return toWeekDay(this.day)
    }

    monthImgPath() {
        return `./static/months/${this.month}.png`
    }

    fruitImgPath() {
        return `./static/fruits/${this.month}.png`
    }

    weekdayImgPath() {
        return `./static/weekdays/${this.day}.png`
    }

    dateImgPath() {
        // return `./static/dates/${this.date}.png`
        return './static/dates/test.3.png'
    }

    dateform(x, y, unitSize) {
        let totalDate;
        if ([1, 3, 5, 7, 8, 10, 12].includes(this.month)) totalDate = 31;
        else totalDate = 30;

        if (this.month == 2) {
            if (isLeapYear(this.year)) totalDate = 29;
            else totalDate = 28;
        }
        
        let firstSun = (this.date - this.day) % 7;
        let firstDatesWeekday = 6 - firstSun + 2;
    }
}