
// difficulty level can set amount of asteroids
var moveTime = 1500;
var numOfAsteroids = 20;
var dataSet = [];

for (var i = 0; i < numOfAsteroids; i++) {
  dataSet.push(Math.floor(Math.random() * (10 - 15) + 15));
}

// create asteroids
var svg = d3.select('svg');
var circle = svg.selectAll('circle').data(dataSet);
var circleEnter = circle.enter().append('circle');
circleEnter.attr('fill', 'blue');
circleEnter.attr('r', function(d) { return d; });
circleEnter.attr('cx', function() { return Math.random() * 600; });
circleEnter.attr('cy', function() { return Math.random() * 600; });


// transition asteroids to new x, y
var randomizeAsteroids = function() {
  circle.transition().duration(1000)
      .attr('cx', function() { return Math.random() * 600; })
      .attr('cy', function() { return Math.random() * 600; });
};

// move asteroids every 1.5 seconds
setInterval(function() { randomizeAsteroids(); }, moveTime);