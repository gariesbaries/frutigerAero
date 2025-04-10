// Music control for Frutiger Aero website
document.addEventListener('DOMContentLoaded', () => {
    const music = new Audio('frutiger-aero.mp3');
    music.volume = 0.3;
    music.loop = true;

    const musicBtn = document.createElement('div');
    musicBtn.innerHTML = '▶️ Play Music';
    musicBtn.style.cssText = `
        cursor: pointer;
        margin-left: 10px;
        padding: 2px 5px;
        background: linear-gradient(to bottom, #3c7af0, #1e5fdf);
        border-radius: 3px;
        border: 1px solid #0d2d6e;
        color: white;
        font-family: 'Tahoma', sans-serif;
        font-size: 12px;
    `;

    musicBtn.onclick = () => {
        music.play()
            .then(() => {
                musicBtn.innerHTML = '🔊 Music Playing';
            })
            .catch(e => {
                musicBtn.innerHTML = '❌ Click to Enable';
                console.error('Music error:', e);
                // Retry on next click
                musicBtn.onclick = () => {
                    music.play()
                        .then(() => musicBtn.innerHTML = '🔊 Music Playing')
                        .catch(e => musicBtn.innerHTML = '❌ Failed');
                };
            });
    };

    // Add to taskbar
    const taskbarTime = document.querySelector('.xp-taskbar-time');
    if (taskbarTime) {
        taskbarTime.appendChild(musicBtn);
    }
});
