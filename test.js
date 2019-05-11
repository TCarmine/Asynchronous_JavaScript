// Lets assume I have arrays of Strings ( but it should work aslo with array of numbers).
// 


// I would like to create a Map object over them with one of the 2 as key, but basically to establish a 
// relationship. After that next step would be create a Map from 2 Array of Objects, but this is a bit 
// more complicated
// unfortunately my approch somehow is missing something as



// Deck of Cards
// var suits = [
//     {suit: "clubs",color: "black"},
//     {suit: "spades",color: "black"},
//     {suit: "hearts",color: "red"},
//     {suit: "diamonds",color: "red"}    
// ];

// var family = [
//     {name: "2",value: 2},
//     {name: "3",value: 3},
//     {name: "4",value: 4},
//     {name: "5",value: 5},
//     {name: "6",value: 6},
//     {name: "7",value: 7},
//     {name: "8",value: 8},
//     {name: "9",value: 9},
//     {name: "10",value: 10},
//     {name: "J",value: 10},
//     {name: "Q",value: 10},
//     {name: "K",value: 10},
//     {name: "A",value: 1},
// ];

let products = [
    {
      name: "chair",
      inventory: 5,
      unit_price: 45.99,
      client:'MG Gmbh'
    },
    {
      name: "table",
      inventory: 10,
      unit_price: 123.75,
      client : "XYZ"
    },
    {
      name: "sofa",
      inventory: 2,
      unit_price: 399.50,
      client : "MongoDB"
    }
  ];

 let clients  =[
     {
         name:"MG Gmbh",
         address: 'Linen street',
         country: 'Germany'
     },
     {
         name:'XYZ',
         address:'Mongomery street',
         country: 'USA'
     },
     {
         name:'MongoDB',
         address: 'NoSQL road',
         country: 'UK'
     },
     {
        name:'Zeppelin',
        address: 'lienestraße',
        country: 'Germany'
    }
 ]


let engWords = ['house','gift','zoo','tidy','flat','to play',' to see','boy','ice cream']

// let numbers = [1,'gift','zoo','tidy','flat','to play',' to see','boy','ice cream']

let itaWords = ['casa','regalo','zoo','ordinato','appartamento','giocare','guardare','ragazzo','gelato'] 

let pairsMap = new Map(); 

let productsMap = new Map();

// var people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];



//   var groupedPeople = groupBy(people, 'age');  






// keys.forEach((key, i) => result[key] = values[i]);

for( val in engWords){
 
    const nk =  engWords[val];
        engWords.forEach(function(element) {
        pairsMap.set(nk,itaWords[val]);  
    } )
}

for (let [b, z] of pairsMap){
    console.log(b, " -> ", z)
}



function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

let groupedClients = groupBy(clients, 'name');  

let clients_name = console.log(groupedClients);

for( val in clients){
 
    const nk =  clients[val];
        products.forEach(function(element) {
        productsMap.set(nk,products[val]);  
    } )
}

for (let [b, z] of productsMap){
    console.log(b, " -> ", z)
}

// for( val in suits){
 
//     const nk =  suits[val];
//         itaWords.forEach(function(element) {
        
//         pairsMap.set(nk,family[val]);  
//     } )
// }



  
// var deck = new Array();
  
// suits.forEach(function(x){

//     var arr = family.map( (y) => {
//         var obj = Object.assign({}, x, y); 
//         deck.push(obj);
//         return obj; 
//     });

// });

// console.log(deck);

