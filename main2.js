/*
const imgs = document.getElementById("img");
const img = document.querySelectorAll("div.slider");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right")

let idx = 0

function changeImg() {
    idx++;

    if(idx > img.length -1) {       
        idx = 0;
    }    

    imgs.style.transform = `translateX(${-idx* 650}px)`;
}

btnLeft.addEventListener("click", e => {
    e.preventDefault();
    idx--;

    if(idx < 0) {
        idx = 3;

        return imgs.style.transform = `translateX(${-idx * 650}px)`;
    }    

    imgs.style.transform = `translateX(${-idx * 650}px)`;
})

btnRight.addEventListener("click", e => {
    e.preventDefault();
    idx++;

    if(idx > img.length -1) {       
        idx = 0;
    }    

    imgs.style.transform = `translateX(${-idx* 650}px)`;
})
*/

let counter = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
    counter++;
    if(counter > 4) {
        counter = 1;
    }
    document.getElementById("radio" + counter).checked = true;
} , 4000)