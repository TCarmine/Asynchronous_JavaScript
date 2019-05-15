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
console.log( pairsMap);


// get a value from a Map after a string condition


let flag = false;

function checkFlag(){
     Array.from(pairsMap.keys()).forEach((k, i) => {
        let value = pairsMap.get(k);

            for(let j = 0;j < m.length ; j++){
                if(m[j] == value){
                   
                  if(k == m[j+1] || k == m[j-1] ){
                    console.log(k);
                    flag = true;
                    
                  }   
                }
                        
            }
    
      })
      
    
    }

  checkFlag();

console.log('----------');





for (let [b, z] of pairsMap){
  console.log(b, " -> ", z)
}


 