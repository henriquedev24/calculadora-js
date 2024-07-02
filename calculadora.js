document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('td');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.innerText;

            if (buttonText === 'C') {
                display.value = '';
            } else if (buttonText === '<') {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value.replace('X', '*'));
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});