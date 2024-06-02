import { Browser } from './browser.js';
import { moveToCenter } from './moveToCenter.js';
import { moveCar } from './moveCar.js';

const browser = new Browser();
const scrollWidth = browser.calcScrollWidth();
console.log('Browser Scroll Width:', scrollWidth);

document.addEventListener('DOMContentLoaded', function() {
    const parent = document.getElementById('parent');
    const nested = document.getElementById('nested');
    moveToCenter(parent, nested);

    const car = document.getElementById('car');
    moveCar(car);
});
