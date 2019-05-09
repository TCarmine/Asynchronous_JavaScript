let interval;
let started = false;
let time = 0;

let clickedArray = [];

setUp();


function startTimer(){
    if(started == false){
        interval = setInterval(function(){
            time++;
            document.getElementById("timer").innerHTML = "Time Elapsed: " + time;
        },1000)
        started = true;
    }
}


function randomAnswers(){
    let answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item){
        return .5 - Math.random();
    })
    return answers;
    console.log(answers);
}

function reveal(cell){
    cell.style.backgroundColor ="red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}

function setUp(){
    let answers = randomAnswers();
    let grid = document.getElementsByClassName("cell");
    let cell;
    for(let i=0; i<grid.length; i++){
        cell = grid[i];
        cell.completed = false;
        cell.clicked = false;
        cell.value = answers[i];

        cell.addEventListener("mouseenter",function(){
            if(this.completed == false && this.clicked == false)
               this.style.background = "orange";
        });
        cell.addEventListener("mouseleave",function(){
            if(this.completed == false && this.clicked == false)
               this.style.background = "blue";
        });

        cell.addEventListener('click',function(){
            if(this.clicked == false && this.completed == false){
                clickedArray.push(this);
                reveal(this);
            }
            startTimer();

        });
        
        
    }
    
}