function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
}

function resetGame() {
    const crosses = document.querySelectorAll('.cross');
    const circles = document.querySelectorAll('.circle');

    const dragBoxes = document.querySelectorAll('.dragBox');

    crosses.forEach((cross, index) => {
        dragBoxes[index].appendChild(cross);
    });

    circles.forEach((circle, index) => {
        dragBoxes[index + crosses.length].appendChild(circle);
    });
}
document.querySelector('.reset').addEventListener('click', resetGame);
