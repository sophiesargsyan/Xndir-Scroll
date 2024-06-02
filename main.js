import { Browser } from './browser.js';

const browser = new Browser();
const scrollWidth = browser.calcScrollWidth();
console.log('Browser Scroll Width:', scrollWidth);
