import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Button' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const displays = ['solid', 'hollow', 'clear', 'link'];
const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'medium');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', '');
    return (`<c-button
            css-class="${cssClass}" 
            class="m-md"
            color="${color}" 
            display="${display}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}">
            ${color} button
        </c-button>`);
};

export const buttonColors = () => {
    const display = select('display', displays, 'solid');
    const size = select('size', sizes, 'md');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (colors.map(color =>
        `<c-button
            css-class="${cssClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${color} button
        </c-button>`).join(""));
};

export const buttonDisplay = () => {
    return (displays.map(d =>
        `<c-button
            class="ml-md mt-md" 
            display="${d}">
            ${d} button
        </c-button>`).join(""));
};

export const sizeVariations = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (sizes.map(size =>
        `<c-button
            css-class="${cssClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${size} button
        </c-button>`).join(''));
};