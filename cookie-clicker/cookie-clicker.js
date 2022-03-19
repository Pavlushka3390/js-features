let cookie = document.querySelector("#cookie");
let coockieWidth = +cookie.getAttribute('width');
let clicker = document.querySelector('.clicker')
let counter = +clicker.querySelector("#clicker__counter").textContent;


function changeSizeCookie(cookie, coockieWidth) {
    cookie.setAttribute('width', coockieWidth * 1.5);
    setTimeout(() => {
        cookie.setAttribute('width', coockieWidth);
    }, 100);
}

function clickHandler(event) {
    let counter = +clicker.querySelector("#clicker__counter").textContent;
    counter++;

    changeSizeCookie(cookie, coockieWidth);
    clicker.querySelector("#clicker__counter").textContent = counter;
}

function main() {
    cookie.onclick = clickHandler;
}

main();