/* Good morning @channel

Today's challenge -

Here is a list of Tennis players and their ranks -

```var players = [
    {name: "Roger Federer", rank: 1},
    {name: "Rafel Nadal", rank: 2},
    {name: "Nalbandian", rank: 12},
    {name: "Andy Murray", rank: 14},
    {name: "Andy Roddick", rank: 4},
    {name: "Pete Sampras", rank: 3},
    {name: "Rod Laver", rank: 190},
    {name: "Andre Agassi", rank: 11},
    {name: "Novak Djokovic", rank: 5},
    {name: "Arthur Ashe", rank: 8},
];```

You can see it is an array of objects. Now you have to write a function that prints only the name of players with rank less than or equal to 10. Call the function `top10Players()`.


Hints -

As always, divide the problem into small pieces till you are able to work on the smallest part possible. So here, you can divide it into -

1. Creating function part.
2. Iterating/Looping through the player list.
3. Checking player ranking in each step. */



var players = [
    {name: "Roger Federer", rank: 1},
    {name: "Rafel Nadal", rank: 2},
    {name: "Nalbandian", rank: 12},
    {name: "Andy Murray", rank: 14},
    {name: "Andy Roddick", rank: 4},
    {name: "Pete Sampras", rank: 3},
    {name: "Rod Laver", rank: 190},
    {name: "Andre Agassi", rank: 11},
    {name: "Novak Djokovic", rank: 5},
    {name: "Arthur Ashe", rank: 8},
];

topTen = function() {

    for(i = 0; i < players.length; i = i + 1) {

        if(players[i].rank < 10) {

            console.log(players[i].name);
        }
    }
}
  
topTen();
  