setUp();




function randomAnswers(){
    let answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item){
        return .5 - Math.random();
    })
    return answers;
    console.log(answers);
}


function setUp(){
    let answers = randomAnswers();
    let grid = document.getElementsByTagName("div");
    let i;
    let cell = grid[i];
    for(i=0; i<grid.length; i++){
        cell.completed = false;
        cell.clicked = false;
        cell.value = answers[i];
    }
    cell.addEventListener("mouseenter",function(){
        if(this.completed == false && this.clicked == false)
           this.style.background = "orange";
    })
    cell.addEventListener("mouseleave",function(){
        if(this.completed == false && this.clicked == false)
           this.style.background = "blue";
    })

}