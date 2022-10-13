import Cursor from './cursor';

const ACC = () => {
    const cursor = new Cursor(document.querySelector('.cursor'));
    return (
        [...document.querySelectorAll('a')].forEach(el => {
            el.addEventListener('mouseenter', () => cursor.emit('enter'));
            el.addEventListener('mouseleave', () => cursor.emit('leave'));
        })
    )
}

export default ACC;