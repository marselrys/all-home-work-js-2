let block = document.querySelector('.block');
console.log(block);

let position = 0;
let topPosition = 0;
let rightPosition = 0;
let bottomPosition = 0;

function move() {
    if (position <= 300) {
        position += 16;
        block.style.left = `${position}px`;
        setTimeout(move, 200);
    } else if (position >= 300 && topPosition <= 384) {
        topPosition += 16;
        block.style.top = `${topPosition}px`;
        setTimeout(move, 200);
    } else if (rightPosition <= 300 && topPosition >= 400 ) {
        block.style.left = null;
        rightPosition += 16;
        block.style.right = `${rightPosition}px`;
        setTimeout(move, 200);
    } else if (bottomPosition <= 384 && topPosition >= 400) {
        block.style.top = null;
        bottomPosition += 16;
        block.style.bottom = `${bottomPosition}px`;
        setTimeout(move, 200);
    }
};


move();