function countDown(timer){
    let intervalId = setInterval(function(){
        if( timer>0){
            console.log('Timer: '+timer);
            timer--;
        }else{
          clearInterval(intervalId);
          console.log('Ring Ring Ring!!!');
        }
         
    },1000)

   
}

countDown(15);