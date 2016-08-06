
//build vector with dimensions of playboard

//add astroids to page
  //each will be node with span tag
  //a few css properties such as the asteroid image


// move astroids around page
  // every second, move asteroid to random position

// one node span element with different class and different css properties as player object
  // can be dragged with mouseclick

// increment "high score" as long as you are not hit by asteroid node
  // if hit, reset current score
  // if current score > high score. Then high score = current score.
var width = 960;
var height = 500;
var dataset = [1];
var svg = d3.select('svg');
svg.style('border', "2px solid black");
svg.style('background-color', "gray");

var addAsteroid = function() {
  svg.select('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (Math.random() * width))
    // .attr('cx', (Math.random() * width))
    .attr('cy', (Math.random() * height))
    .attr('r', 10);
};
  

// var alterAsteroids = function() {
//   d3.selectAll('.asteroid')
// }

var addAsteroids = function() {
  for (var i = 0; i < 20; i++) {
    addAsteroid();
  }
};

addAsteroids();

// var svg = d3.select("svg"),
//   width = +svg.attr("width"),
//   height = +svg.attr("height"),
//   g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");

// var board = 
// d3.select("svg").


// d3.select("svg").selectAll("span")
//   .data()
//   .enter()
//   .append()