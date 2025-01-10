let isOn = true;

function toggleImage() {
    const button = document.getElementById('toggleButton');
    const music = document.getElementById('backgroundMusic');

    if (isOn) {
        // Pause the music and change the button image to 'off'
        music.pause();
        button.src = 'offvolume.png'; // Change to your off image path
        isOn = false;
    } else {
        // Play the music and change the button image to 'on'
        music.play();
        button.src = 'onvolume.png'; // Change back to on image path
        isOn = true;
    }
}

// Automatically play music when the page loads (if supported by the browser)
window.addEventListener('load', function() {
    const music = document.getElementById('backgroundMusic');
    music.play().catch(function(error) {
        console.log("Automatic playback failed. User interaction required.");
    });
});
function button2Clicked() { 
    alert('Button 2 clicked!');
}

// Add event listeners for each image to redirect to different URLs when clicked
document.getElementById('manfabric').addEventListener('click', function() {
    window.location.href = 'Fire.html'; // Replace with actual URL
});

document.getElementById('manfortune').addEventListener('click', function() {
    window.location.href = 'zaozhi.html'; // Replace with actual URL
});

document.getElementById('manbaozi').addEventListener('click', function() {
    window.location.href = 'huozi.html'; // Replace with actual URL
});

document.getElementById('manporcelain').addEventListener('click', function() {
    window.location.href = 'Zhinan.html'; // Replace with actual URL
});