let pencil = document.querySelector('#meow');
let pencil2 = document.querySelector('#meow2');
let pencil3 = document.querySelector('#meow3');
let button = document.getElementById('animateButton');
let clicks = document.getElementById('clicks');

let rotationCount = 0;
let clickCount = 0;

button.addEventListener('click', () => {
    rotationCount++;
    pencil.style.transform = `rotate(${rotationCount * 180}deg)`;
    pencil2.style.transform = `rotate(${rotationCount * 360}deg)`;
    pencil3.style.transform = `rotate(${-rotationCount * 180}deg)`;
    clickCount++;
    clicks.innerText = clickCount;
    
    if (clickCount % 10 === 0) {
        let randomIndex = Math.floor(Math.random() * 3);

        console.log(randomIndex);
        if (randomIndex === 0)document.body.classList.add("change-one");
        else document.body.classList.remove("change-one");

        if (randomIndex === 1)document.body.classList.add("change-two");
        else document.body.classList.remove("change-two");

        if (randomIndex === 2)document.body.classList.add("original-change");
        else document.body.classList.remove("original-change");
    }
});
