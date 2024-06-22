// Definindo a data de término como 2 de agosto do ano atual
const targetDate = new Date(new Date().getFullYear(), 8, 2, 0, 0, 0); // Mês 7 é agosto, pois os meses são indexados de 0 a 11

function updateTime() {
    const now = new Date();
    const totalSeconds = Math.floor((targetDate - now) / 1000);

    if (totalSeconds >= 0) {
        const days = String(Math.floor(totalSeconds / (24 * 60 * 60))).padStart(2, '0');
        const hrs = String(Math.floor((totalSeconds % (24 * 60 * 60)) / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        document.getElementById('display').textContent = `${days}:${hrs}:${mins}:${secs}`;
    } else {
        document.getElementById('display').textContent = "00:00:00:00";
        clearInterval(timer);
    }
}

updateTime();
const timer = setInterval(updateTime, 1000);
