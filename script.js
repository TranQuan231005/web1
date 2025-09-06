// This script adds a click event listener to the button
// to navigate to the Home.html page.

document.addEventListener('DOMContentLoaded', () => {
    // Select the button element in the DOM.
    const button = document.querySelector('button');

    // Add a click event listener to the button.
    if (button) {
        button.addEventListener('click', () => {
            // Log a message to the console to confirm the click.
            console.log('Button clicked! Redirecting to Home.html...');

            // Change the window's location to the new page.
            window.location.href = 'Home.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mathButton = document.getElementById('math-button');
    if (mathButton) {
        mathButton.addEventListener('click', () => {
            window.location.href = 'Toan.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('viet-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'Tieng_Viet.html';
        });
    }
});
