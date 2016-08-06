
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
var dataset = ([1, 5, 10, 20, 40, 10, 15, 20, 10]);
var svg = d3.select('svg');
svg.style('border', '2px solid black');
svg.style('background-color', 'gray');

var addAsteroids = function() {
  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (Math.random() * width))
    .attr('cy', 50)
    .attr('r', function(d) {
      return d + 'px';
    });
};
  
addAsteroids();

var alterAsteroids = function() {
  var circle = d3.selectAll('circle');
  circle.style('fill', 'steelblue');
  circle.transition().attr('cx', function() {
    return (Math.random() * 360);
  });
  circle.attr('cy', function() {
    return (Math.random() * 360);
  });
  circle.attr('r', function(d) {
    return Math.sqrt(d) * 10;
  });
  
};

alterAsteroids();

var runner = setInterval(function() {
  alterAsteroids();
}, 1000);

addAsteroids();
