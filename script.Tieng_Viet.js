
document.addEventListener('DOMContentLoaded', () => {
    renderGameSelectionMenu();
});

// Hàm hiển thị menu chọn trò chơi
function renderGameSelectionMenu() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600 mb-6">
                    Chọn Trò Chơi Tiếng Việt
                </h1>
                <p class="text-lg text-gray-600 mb-8">
                    Bé muốn học ghép từ hay ghép chữ?
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <button id="start-synonym-game" class="bg-blue-500 text-white font-bold py-4 px-6 rounded-full w-full transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Ghép Đôi Từ Đồng Nghĩa
                    </button>
                    <button id="start-letter-game" class="bg-red-500 text-white font-bold py-4 px-6 rounded-full w-full transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300">
                        Ghép Đôi Chữ Cái
                    </button>
                </div>
                <button id="back-to-main" class="mt-8 bg-gray-500 text-white font-bold py-4 px-6 rounded-full w-full max-w-sm mx-auto transition-transform duration-300 transform hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300">
                    Quay lại
                </button>
            `;

    document.getElementById('start-synonym-game').addEventListener('click', () => {
        // Thay đổi hành động tùy theo nhu cầu
        console.log('Chuyển đến trò chơi Ghép Đôi Từ Đồng Nghĩa');
        window.location.href = 'TV_Ghepdoitudongnghia.html';
    });
    document.getElementById('start-letter-game').addEventListener('click', () => {
        // Thay đổi hành động tùy theo nhu cầu
        console.log('Chuyển đến trò chơi Ghép Đôi Chữ Cái');
    });
    document.getElementById('back-to-main').addEventListener('click', () => {
        // Thay đổi hành động tùy theo nhu cầu
        console.log('Quay lại trang chính');
        window.location.href = 'Home.html';
    });
}
