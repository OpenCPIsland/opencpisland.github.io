const clickSound = new Audio('assets/audio/click.mp3');

document.addEventListener('click', (e) => {
    const target = e.target.closest('.soundclick');
    if (target) {
        // If the button is wrapped in a link
        const link = target.closest('a');
        if (link && link.href) {
            e.preventDefault();
            clickSound.currentTime = 0;
            clickSound.play();
            
            // Navigate after a short delay
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); 
        } else {
            clickSound.currentTime = 0;
            clickSound.play();
        }
    }
});