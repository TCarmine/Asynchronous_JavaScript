// Deck of Cards
var suits = [
    {suit: "clubs",color: "black"},
    {suit: "spades",color: "black"},
    {suit: "hearts",color: "red"},
    {suit: "diamonds",color: "red"}    
];

var family = [
    {name: "2",value: 2},
    {name: "3",value: 3},
    {name: "4",value: 4},
    {name: "5",value: 5},
    {name: "6",value: 6},
    {name: "7",value: 7},
    {name: "8",value: 8},
    {name: "9",value: 9},
    {name: "10",value: 10},
    {name: "J",value: 10},
    {name: "Q",value: 10},
    {name: "K",value: 10},
    {name: "A",value: 1},
];

var deck = new Array();

suits.forEach(function(x){

    var arr = family.map( (y) => {
        var obj = Object.assign({}, x, y); 
        deck.push(obj);
        return obj; 
    });

});

console.log(deck);