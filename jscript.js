const ponka = document.getElementById("ponka");
const item = document.getElementById("item");
const layer_top = document.getElementById("layer-top");
const score = document.getElementById("score");
let cur_score = 0;
let boleh_loncat = true;
let boleh_kalah = true;
let score_run = true;

let cur_baju = 2021;

if (cur_baju==2021){ponka.classList.add("run");}
else{ponka.classList.add("run2");}

function jump() {
    if ((ponka.classList != "jump" || ponka.classList != "jump2") && boleh_loncat){
        if (cur_baju==2021){
            ponka.classList.remove("run");
            ponka.classList.add("jump");
        }
        else{
            ponka.classList.remove("run2");
            ponka.classList.add("jump2");
        }
        setTimeout( function (){            
            if (cur_baju==2021){
                ponka.classList.remove("jump");
                ponka.classList.add("run");
                document.getElementsByClassName("jump");
            }
            else{
                ponka.classList.remove("jump2");
                ponka.classList.add("run2");
                document.getElementsByClassName("jump2");
            }            
        }, 800)        
    }
}

setInterval(function () {
    const cur_ponka = parseInt(window.getComputedStyle(ponka,null).getPropertyValue("top"));
    const cur_item = parseInt(window.getComputedStyle(item,null).getPropertyValue("left"));
        
    if ((cur_item<200)&&(cur_ponka==0)&&boleh_kalah) {  
        score_run = false;      
        if (cur_baju==2021){ponka.classList.remove("run");}
        else{ponka.classList.remove("run2");}
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
        if (cur_baju==2021){ponka.classList.add("run");}
        else{ponka.classList.add("run2");}
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
        if (cur_baju==2021){ponka.classList.add("run");}
        else{ponka.classList.add("run2");}
        item.classList.remove("stop2");
        item.classList.add("item");

        boleh_kalah = true;
        setTimeout( function (){            
            boleh_loncat = true;
        }, 100)
    }
}

function gantibaju(){
    if(cur_baju==2021){
        cur_baju = 2022;
        ponka.id = "ponka2";
        ponka.classList.remove("jump");
        ponka.classList.remove("run");
        // ponka.classList.add("run2");
    } else {
        cur_baju = 2021;
        ponka.id = "ponka";
        ponka.classList.remove("jump2");
        ponka.classList.remove("run2");
        // ponka.classList.add("run");
    }
}

