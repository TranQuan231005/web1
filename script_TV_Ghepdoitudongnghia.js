
document.addEventListener('DOMContentLoaded', () => {
    renderSynonymGame();
});

function renderSynonymGame() {
    const wordPairs = [
        { word: 'Vui vẻ', pairId: 'pair1' }, { word: 'Hạnh phúc', pairId: 'pair1' },
        { word: 'Nhanh', pairId: 'pair2' }, { word: 'Mau', pairId: 'pair2' },
        { word: 'Lạnh', pairId: 'pair3' }, { word: 'Giá buốt', pairId: 'pair3' },
        { word: 'To', pairId: 'pair4' }, { word: 'Lớn', pairId: 'pair4' },
        { word: 'Sạch', pairId: 'pair5' }, { word: 'Sạch sẽ', pairId: 'pair5' },
        { word: 'Đẹp', pairId: 'pair6' }, { word: 'Xinh đẹp', pairId: 'pair6' },
        { word: 'Giỏi', pairId: 'pair7' }, { word: 'Giỏi giang', pairId: 'pair7' },
        { word: 'Buồn', pairId: 'pair8' }, { word: 'Buồn bã', pairId: 'pair8' },
        { word: 'Khỏe', pairId: 'pair9' }, { word: 'Khỏe mạnh', pairId: 'pair9' },
        { word: 'Im lặng', pairId: 'pair10' }, { word: 'Yên lặng', pairId: 'pair10' }
    ];

    startMatchingGame(wordPairs, 'Ghép Đôi Từ Đồng Nghĩa 📚', 'Tìm các cặp từ đồng nghĩa nhé!');
}

function startMatchingGame(pairs, title, instruction) {
    pairs.sort(() => 0.5 - Math.random());
    let selectedCards = [];
    let canSelect = true;
    let matchedPairs = 0;

    const container = document.getElementById('game-container');
    const gameContent = `
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600 mb-6 animate-pulse">
                    ${title}
                </h1>
                <p class="text-lg text-gray-600 mb-8">
                    ${instruction}
                </p>
                <div id="game-grid" class="grid grid-cols-4 sm:grid-cols-5 gap-4 sm:gap-6">
                    ${pairs.map((pair, index) => `
                        <div id="card-${index}" class="card-item w-24 h-24 sm:w-32 sm:h-32" data-pair="${pair.pairId}">
                            <div class="card-content">
                                <span class="text-xl sm:text-3xl">${pair.word}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <p id="message-box" class="mt-8 text-xl font-bold text-green-600 h-8"></p>
                <button id="back-button" class="mt-8 bg-gray-500 text-white font-bold py-4 px-6 rounded-full w-full max-w-sm mx-auto
                    transition-transform duration-300 transform hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300">
                    Quay lại
                </button>
            `;

    container.innerHTML = gameContent;

    const gameGrid = document.getElementById('game-grid');
    const messageBox = document.getElementById('message-box');

    gameGrid.querySelectorAll('.card-item').forEach(card => {
        card.addEventListener('click', () => {
            handleCardClick(card);
        });
    });

    document.getElementById('back-button').addEventListener('click', () => {
        // Return to the initial page. You can change this to another page if needed.
        window.location.href = 'Tieng_Viet.html';
    });

    function handleCardClick(card) {
        if (!canSelect || card.classList.contains('selected') || card.classList.contains('fade-out')) {
            return;
        }

        card.classList.add('selected');
        selectedCards.push(card);

        if (selectedCards.length === 2) {
            canSelect = false;
            const [card1, card2] = selectedCards;

            if (card1.dataset.pair === card2.dataset.pair) {
                messageBox.textContent = 'Tuyệt vời!';

                setTimeout(() => {
                    card1.classList.add('fade-out');
                    card2.classList.add('fade-out');
                    card1.classList.remove('selected');
                    card2.classList.remove('selected');

                    matchedPairs++;
                    selectedCards = [];
                    canSelect = true;

                    if (matchedPairs === pairs.length / 2) {
                        messageBox.textContent = `Chúc mừng bé! Đã hoàn thành tất cả các cặp! ✨`;
                    }
                }, 1000);

            } else {
                messageBox.textContent = 'Thử lại nhé!';
                card1.classList.add('shake');
                card2.classList.add('shake');

                setTimeout(() => {
                    card1.classList.remove('selected', 'shake');
                    card2.classList.remove('selected', 'shake');
                    selectedCards = [];
                    canSelect = true;
                }, 1500);
            }
        }
    }
}
