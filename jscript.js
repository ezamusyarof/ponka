const ponka = document.getElementById("ponka");
const item = document.getElementById("item");
const layer_top = document.getElementById("layer-top");
const score = document.getElementById("score");
let cur_score = 0;
let boleh_loncat = true;
let boleh_kalah = true;
let score_run = true;

ponka.classList.add("run");

function jump() {
    if (ponka.classList != "jump" && boleh_loncat){
        ponka.classList.remove("run");
        ponka.classList.add("jump");

        setTimeout( function (){            
            ponka.classList.remove("jump");
            ponka.classList.add("run");
            document.getElementsByClassName("jump");
        }, 800)        
    }
}

setInterval(function () {
    const cur_ponka = parseInt(window.getComputedStyle(ponka,null).getPropertyValue("top"));
    const cur_item = parseInt(window.getComputedStyle(item,null).getPropertyValue("left"));
        
    if ((cur_item<200)&&(cur_ponka==0)&&boleh_kalah) {  
        score_run = false;      
        ponka.classList.remove("run");
        ponka.classList.add("stop1");
        item.classList.remove("item");
        item.classList.add("stop2");
        layer_top.style.display = "flex";
        setTimeout( function (){      
            boleh_loncat = false; 
        }, 500)
        boleh_kalah = false;
    }
}, 100);

setInterval(function () {
    if (score_run) {
        cur_score++;
        score.innerHTML = cur_score;
    }
}, 100);

document.addEventListener("keydown", function (eve) {
    if (boleh_loncat){
        jump();
    } else {
        cur_score = 0;
        score_run = true;
        item.style.left = "750";
        layer_top.style.display = "none";

        ponka.classList.remove("stop1");
        ponka.classList.add("run");
        item.classList.remove("stop2");
        item.classList.add("item");  

        boleh_kalah = true;
        setTimeout( function (){            
            boleh_loncat = true;
        }, 100)
    }
})

function jump_click(){
    if (boleh_loncat){
        jump();
    } else {
        cur_score = 0;
        score_run = true;
        item.style.left = "750";
        layer_top.style.display = "none";

        ponka.classList.remove("stop1");
        ponka.classList.add("run");
        item.classList.remove("stop2");
        item.classList.add("item");  

        boleh_kalah = true;
        setTimeout( function (){            
            boleh_loncat = true;
        }, 100)
    }
}



