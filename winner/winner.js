function start() {
    setTimeout(function(){
        confetti.start();
    });
};

start();

document.getElementById("replay").onclick = function () {
    location.href = "../index.html";
}

