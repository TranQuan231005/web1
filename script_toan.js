
// Main JavaScript for the Math game logic.
document.addEventListener('DOMContentLoaded', () => {
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-button');
    const feedbackEl = document.getElementById('feedback');

    let correctAnswer;

    // Function to generate a random number within a range
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a new math problem
    function generateProblem() {
        const num1 = getRandomNumber(1, 10);
        const num2 = getRandomNumber(1, 10);
        const operation = Math.random() < 0.5 ? '+' : '-';

        if (operation === '-') {
            // Ensure the result is non-negative for subtraction
            if (num1 < num2) {
                generateProblem(); // Recursively call until a valid problem is generated
                return;
            }
            correctAnswer = num1 - num2;
            questionEl.textContent = `${num1} - ${num2} = ?`;
        } else {
            correctAnswer = num1 + num2;
            questionEl.textContent = `${num1} + ${num2} = ?`;
        }

        answerInput.value = '';
        feedbackEl.textContent = '';
    }

    // Event listener for the submit button
    submitButton.addEventListener('click', () => {
        const userAnswer = parseInt(answerInput.value, 10);

        // Check if the input is a valid number
        if (isNaN(userAnswer)) {
            feedbackEl.textContent = 'Hãy nhập một số hợp lệ!';
            feedbackEl.className = 'mt-8 text-xl font-semibold text-red-500 feedback';
            return;
        }

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackEl.textContent = 'Chính xác! ✨';
            feedbackEl.className = 'mt-8 text-xl font-semibold text-green-600 feedback';

            // Move to the next question after a short delay
            setTimeout(generateProblem, 1000);
        } else {
            feedbackEl.textContent = 'Sai rồi, thử lại nhé!';
            feedbackEl.className = 'mt-8 text-xl font-semibold text-red-500 feedback';
            answerInput.value = ''; // Clear the input for the user to try again
        }
    });

    // Handle pressing 'Enter' key to submit
    answerInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents default action (e.g., form submission)
            submitButton.click();
        }
    });

    // Generate the first problem when the page loads
    generateProblem();
});
