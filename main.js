import { Browser } from './browser.js';
import { moveToCenter } from './moveToCenter.js';


// Call functions from modules
const browser = new Browser();
const scrollWidth = browser.calcScrollWidth();
console.log('Browser Scroll Width:', scrollWidth);

document.addEventListener('DOMContentLoaded', function() {
    const parent = document.getElementById('parent');
    const nested = document.getElementById('nested');
    moveToCenter(parent, nested);
});
