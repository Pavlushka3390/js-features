let timer = document.getElementById("timer")
setInterval(count, 100)
function count() {
    if (timer.textContent > 0){
    timer.textContent = Number(timer.textContent) - 1
    }else {
        alert("Вы победили в конкурсе!")
    }
}