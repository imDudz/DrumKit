function playSound(e) {
    // Find keys and audios 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Stop the function from running all at the same sime
    if (!audio) return;

    // Play audio when key is pressed
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if don't have transform
    this.classList.remove('playing'); // Remove animation
}

// Do the key animation 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);