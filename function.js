let accounts = [];
function createVariables(){
let test=5;
  
    for (test; test <= 20; test++) {
        accounts[test] = test;
    }
  
    return ;
  }
createVariables();

//Map implementation

function Map(arr,callbackfunction){
    let newArr =[];
    for (let i=0;i<arr.length;i++){
        newArr.push(callbackfunction(arr[i],i,arr));
    }
    return newArr;
}


// Filter implementation 

function Filter(arr,callback){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

