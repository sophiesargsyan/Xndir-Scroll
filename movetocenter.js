export function moveToCenter(parent, nested) {
    const parentRect = parent.getBoundingClientRect();
    const nestedRect = nested.getBoundingClientRect();

    const offsetX = (parentRect.width - nestedRect.width) / 2;
    const offsetY = (parentRect.height - nestedRect.height) / 2;

    nested.style.left = offsetX + 'px';
    nested.style.top = offsetY + 'px';
}
