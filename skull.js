// audioplayer purpose.
const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
playBtn.addEventListener("click", () => {
  audio.play();
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
});




// buttons propperties



        // Obtén los botones por su ID
        const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const button3 = document.getElementById('button3');

        // Agrega un evento de clic a cada botón
        button1.addEventListener('click', function() {
            // Redirige a la página skull1.html
            window.location.href = 'skull.html';
        });

        button2.addEventListener('click', function() {
            // Redirige a la página skull2.html
            window.location.href = 'skull2.html';
        });

        button3.addEventListener('click', function() {
            // Redirige a la página skull3.html
            window.location.href = 'skull3.html';
        });
