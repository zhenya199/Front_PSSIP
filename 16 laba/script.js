class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.init();
    }

    init() {
        this.cells = document.querySelectorAll('.cell');
        this.cells.forEach(cell => cell.addEventListener('click', this.handleClick.bind(this)));
    }

    handleClick(event) {
        const index = Array.from(this.cells).indexOf(event.target);
        if (this.board[index] === null) {
            this.board[index] = this.currentPlayer;
            event.target.textContent = this.currentPlayer;
            if (this.checkWin()) {
                alert(`${this.currentPlayer} Победили!`);
                this.reset();
            } else if (this.board.every(cell => cell !== null)) {
                alert('Ничья!');
                this.reset();
            } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winPatterns.some(pattern => 
            pattern.every(index => this.board[index] === this.currentPlayer)
        );
    }

    reset() {
        this.board.fill(null);
        this.cells.forEach(cell => cell.textContent = '');
        this.currentPlayer = 'X';
    }
}

document.addEventListener('DOMContentLoaded', () => new TicTacToe());
