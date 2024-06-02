export function moveCar(car) {
    const windowWidth = window.innerWidth;
    let leftPosition = 0;

    const moveInterval = setInterval(() => {
        leftPosition += 1;
        car.style.left = leftPosition + 'px';

        if (leftPosition >= windowWidth - car.offsetWidth) {
            clearInterval(moveInterval);
        }
    }, 500);
}
