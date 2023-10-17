let fundo = document.querySelector('body');
window.addEventListener('load', mudarCor);

function mudarCor() {
    setInterval(() => {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;

        let cores = `rgb(${r}, ${g}, ${b})`;
        fundo.style.backgroundColor = cores;
        fundo.textContent = cores;
        
    },1000);
    
}

