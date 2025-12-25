const giftSound = document.getElementById('giftSound');
giftSound.volume = 0.4;

function handleGift(id) {
    const box = document.getElementById(`g${id}`);
    const msg = document.getElementById(`m${id}`);
    if (box.classList.contains('open')) return;

    giftSound.currentTime = 0;
    giftSound.play().catch(() => {});
    box.classList.add('open');
    msg.classList.add('show');

    setTimeout(() => {
        msg.classList.remove('show');
        if (id < 3) {
            const next = document.getElementById(`g${id + 1}`);
            if (next) next.classList.remove('locked');
        } else {
            setTimeout(() => { document.getElementById('finalModal').style.display = 'flex'; }, 600);
        }
    }, 4000);
}

function createSnow() {
    const flake = document.createElement('div');
    flake.classList.add('snow-flake');
    flake.innerHTML = '❄';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.opacity = Math.random() * 0.7 + 0.3;
    flake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(flake);
    setTimeout(() => flake.remove(), 5000);
}
setInterval(createSnow, 150);