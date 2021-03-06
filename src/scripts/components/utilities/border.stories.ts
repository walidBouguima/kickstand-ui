export default { title: 'Utilities/Borders' };

const positions = ['', '-t', '-r', '-b', '-l', '-x', '-y'];
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const borders = () => {
    return (`<ks-row class="m-xxl">
        ${positions.map(p => `<ks-column class="mx-md bg-light-light border${p}">border${p}</ks-column>`).join('')}
    </ks-row>`);
};

export const borderSizes = () => {
    return (`<ks-row class="m-xxl">
        ${sizes.map(p => `<ks-column class="mx-md bg-light-light border border-${p}">border-${p}</ks-column>`).join('')}
    </ks-row>`);
};

export const borderColors = () => {
    return (`<ks-row class="m-xxl">
        ${colors.map(p => `<ks-column class="mx-md bg-light-light border border-xs border-${p}">border-${p}</ks-column>`).join('')}
    </ks-row>`);
};