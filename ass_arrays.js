let cont = document.getElementById ("gridTable");
let p = document.getElementById("timer");
let clickedArray = [];
let numCompleted = 0;

 let answers = [1,2,3,4,5,6,7,8,9];


 function randomAnswers(){
  answers.sort(function(item){
     return .6 - Math.random();
 })
 return answers;
}

let m = ['house', 'casa'];

answers = randomAnswers();
let engWords = ['house','gift','zoo','tidy','flat','to play',' to see','boy','ice cream']


let itaWords = ['casa','regalo','zoo','ordinato','appartamento','giocare','guardare','ragazzo','gelato'] 

let myMap = new Map();


let engMapToNum = new Map(); 

let itaMapToNum = new Map(); 

let pairsMap = new Map(); 

// // keys.forEach((key, i) => result[key] = values[i]);

for( val in answers){
       const nk =  answers[val];
       engWords.forEach(function(element) {
         
        engMapToNum.set(nk,engWords[val]);  
       })
       const jk =  answers[val];
       itaWords.forEach(function(element) {
        itaMapToNum.set(jk,itaWords[val]);  
       })
}

for( val in engWords){
 
         const nk =  engWords[val];
             itaWords.forEach(function(element) {
            
            pairsMap.set(nk,itaWords[val]);  
        } )
}        



// get a value from a Map after a string condition
Array.from(pairsMap.keys()).forEach((k, i) => {
  let value = pairsMap.get(k);

      for(let j = 0;j < m.length ; j++){
          if(m[j] == value){
              console.log(m[j]);
              // console.log(pairsMap.keys()=="house")  
              // check if the property/key is defined in the object itself, not in parent
              console.log(j);
              if(k == m[j+1] || k == m[j-1] ){
              
                console.log(k);       
              }   
          }
                  
      }
})    


// get a value from a Map after a string condition
      // Array.from(itaMapToNum.keys()).forEach((k, i) => {
      //   var values = itaMapToNum.get(k);
      //   for(let i = 0;i < m.length ; i++){
      //       if(m[i] == values){
      //           console.log(m[i]);
      //       }
      //   }   
      // }) 

      // Array.from(engMapToNum.keys()).forEach((k, i) => {
      //   var values = engMapToNum.get(k);
      //   for(let i = 0;i < m.length ; i++){
      //       if(m[i] == values){
      //           console.log(m[i]);
      //       }
      //   }   
      // }) 


console.log('----------');

// // Array.from(pairsMap.keys()).forEach((k, i) => {
// //   var values = pairsMap.get(k);
// //   for(let j = 0;j < m.length ; i++){
// //     if(m[i] == values){
      
// //       console.log(pairsMap.get(k));
// //     }  
// //   }   
// //   console.log(m[k]);
// // })    




for (let [b, z] of pairsMap){
  console.log(b, " -> ", z)
}


  // for (const v of newMap.values()) {
  //     if(v == 'ffa'){
  //       clickedArray.push(v);
  //       console.log(clickedArray); 
  //       clickedArray.push(newMap.values().next());
  //       console.log(clickedArray); 
  //     }
  // }  


// for (const key of Object.keys(couples)) {
//   if(couples[key]=='ciccio'){
//       console.log(key + " -> " + couples[key]); 
//       console.log(key, couples[key]);
//   }
// }

// // console.log('------')
// // for (let [jk, v] of newMap2){
// //   console.log(jk, " -> ", v)
// // }



//   // for (const v of newMap.values()) {
//   //     if(v == 'ffa'){
//   //       clickedArray.push(v);
//   //       console.log(clickedArray); 
//   //       clickedArray.push(newMap.values().next());
//   //       console.log(clickedArray); 
//   //     }
//   // }  

// // let couples = {
// //   'id': {'ffa':'ciccio'},
// //   'pippo': {'tzc':'lap'}
// // }

// // for (const key of Object.keys(couples)) {
// //   if(couples[key]=='ciccio'){
// //       console.log(key + " -> " + couples[key]); 
// //       console.log(key, couples[key]);
// //   }
// // }

// // couples.filter(obj => obj.id =='ciccio');
// //     console.log(id + " -> " + obj[id]);    

  
//       // Array.from(newMap.keys()).forEach((k, i) => {
// //     const ita = newMap.get(k);
// //     if(newMap.values() =='raf'){
// //         console.log('found');
// //         console.log(ita)
// //     }
// //     clickedArray.push(ita);

// // Array.from(newMap.keys()).forEach((k, i) => {
// //        const ita = newMap.get(k);
// //   if(newMap.has(3)){
// //     clickedArray.push(i);
// //  }
// // console.log(clickedArray);
// // })


// // })    
// // Array.from(newMap.keys()).forEach((k, i) => {
// //     const eng = newMap2.get(k);
// //     clickedArray.push(eng);
// // })


// // console.log(clickedArray);

// // console.log(mapIter.next().value); // ["0", "foo"]
// // console.log(mapIter.next().value); // [1, "bar"]
// // console.log(mapIter.next().value); // [Object, "baz"]

// // let k = myMap.keys();

// // console.log(k.next().value); 
// // console.log(k.next().value); 
// // console.log(k.next().value); 

// // let zu  = k.next().value = ["basta"];

// // console.log(mapIter.next().value); 
// // console.log(zu);

// // for (let n of answers) {
// //     answers.push(key);
// //   }

// // let iterator1 = new Map();
// // // let iterator2 = new Map();

// // iterator1.set('0', 'foo');



// // let mapIter = iterator1.entries();

// // mapIter.next().value = "tre";

// // console.log(mapIter);

// // iterator2.set = ([[1 , "house"],
// //     [2,"hourse"],
// //     [3,"midwife"]] 
// // )




// // let y = console.log(iterator1.next().value="tre");

// // for (let [key, value] of iterator1) {
// //     console.log(entry)
// //   }

// // var map1 = new Map();


// // let a = console.log(map1.keys());




// // // let grid;
// // let print;
// // let x = () => {
// //     grid = document.getElementsByName("cell");
 
// //         for(let i=0; i<grid.length; i++){
// //             let cell = grid[i];

        
// //         }
// //         return  print;
// // } 








// // const obj = { 30: 'dadrandomAnswers', '4': 'kid', 19: 'teen', '100': 'grams'};


  
// // function setUp(){
// //     let grid = document.getElementsByName("cell");
// //     let answers = randomAnswers();
// //     console.log(answers)
    
// //     for(let i=0; i<grid.length; i++){
// //             let cell = grid[i];

// //             cell.completed = false;cellcell
// //             cell.clicked = false;
// //             cell.value = answers[i];cell


// //             cell.addEventListener("mouseenter",function(){
// //                 if(this.completed == false && this.clicked == false)
// //                 this.style.background = "orange";
// //             });

// //             cell.addEventListener("mouseleave",function(){
// //                 if(this.completed == false && this.clicked == false)
// //                 this.style.background = "blue";

// //             });
// //             //for keyboard input 
// //             document.addEventListener('keydown', function(event){
// //                 if(event.key > 0 && event.key < 10 ){
// //                     grid[event.key - 1].click();
// //                 }
            
// //             });
// //             // for reload the page on restart button click
// //             document.getElementById('restart').addEventListener('click', function(){
// //                 location.reload();
// //             });

// //             cell.addEventListener('click',function(){
// //                 if(ready == false){
// //                     return;
// //                 }
                     
// //                 if(clickedArray.length == 2){
// //                     if(clickedArray[0].value == clickedArray[1].value){
// //                         ready = false;
// //                         complete(clickedArray[0]); 
// //                         complete(clickedArray[1]);
// //                         clickedArray = []; 
// //                         ready = true;
// //                         cont.style.border = "2px solid black";
                    
// //                         if( numCompleted == 8 ){
// //                         alert("You won in "+ time + " seconds!" );
// //                         clearInterval(interval);
// //                         }

// //                     }else{
// //                         ready = false;
// //                         cont.style.border = "2px solid red";
                        
                          
// //                         setTimeout(function(){
                            
// //                             hide(clickedArray[0]);
// //                             hide(clickedArray[1]);
// //                             clickedArray = []; 
// //                             ready = true;
// //                             cont.style.border = "2px solid black";
                            
                            
    
// //                         },900);
                        
// //                     }
                    
// //                 }
// //             });
        

        
// //     }
    
// // }