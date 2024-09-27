
let totalTime = 5 * 24 * 60 * 60;
let timerId;

function showTime() {
    let days = Math.floor(totalTime / (24 * 60 * 60)); 
    let hours = Math.floor((totalTime % (24 * 60 * 60)) / (60 * 60)); 
    let minutes = Math.floor((totalTime % (60 * 60)) / 60);
    let seconds = totalTime % 60; 

    document.getElementById("timer").innerText = days + ":" + hours + ":" + minutes + ":" + seconds;
}

function startTimer() {
    timerId = setInterval(function() {
        if (totalTime > 0) {
            totalTime--; 
            showTime(); 
        } else {
            stopTimer(); 
            showConfetti(); 
        }
    }, 1000); 
}

function stopTimer() {
    clearInterval(timerId); 
}

function showConfetti() {
    const duration = 3 * 1000; 
    const end = Date.now() + duration;

    function frame() {
        confetti({
            particleCount: 7, 
            angle: 60, 
            spread: 55, 
            origin: { x: 0 }, 
            colors: ['#bb0000', '#ffffff'] 
        });
        confetti({
            particleCount: 7, 
            angle: 120, 
            spread: 55, 
            origin: { x: 1 }, 
            colors: ['#bb0000', '#ffffff'] 
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame); 
        }
    }

    frame(); 
}

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.head.appendChild(script);

showTime(); 
