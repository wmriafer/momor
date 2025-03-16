function showMessage() {
    let message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.opacity = '1';
    }, 100);
}

function showHearts() {
    let heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    document.getElementById('romantic-music').play();
}

function showSecondMessage() {
    let secondMessage = document.getElementById('second-message');
    secondMessage.style.display = 'block';
    setTimeout(() => {
        secondMessage.style.opacity = '1';
    }, 100);
}
