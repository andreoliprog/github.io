function mudarCor() {
    const titulo = document.getElementById("titulo");
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    titulo.style.color = corAleatoria;
}
