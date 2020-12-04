const text = "Colores.";
let count = 0;
let index = -1;
let letter = "";
let flag = false;
const title = document.querySelector("h1.title");

(function type() {
    let time = 200;
    letter = text.slice(0, ++index);
    if (letter.length === 0 && flag) {
        flag = false;
        switch (count) {
            case 0:
                title.classList.add('first');
                count++;
            break;
            case 1:
                title.classList.remove('first');
                title.classList.add('second');
                count++;
            break;
            case 2:
                title.classList.remove('second');
                title.classList.add('third');
                count++;
            break;
            case 3:
                title.classList.remove('third');
                count = 0;
            break;
        };
    };
    title.textContent = letter;
    if (letter.length === text.length){
        index = -1;
        time = 1500;
        flag = true;
    }
    setTimeout(type, time); 
})();

