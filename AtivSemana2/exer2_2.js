function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = currentTime;

    // Chama a função novamente após 1 segundo
    setTimeout(updateClock, 1000);
}

// Inicia a atualização do relógio
updateClock();