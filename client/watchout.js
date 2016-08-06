
// difficulty level can set amount of asteroids
var moveTime = 1500;
var numOfAsteroids = 20;
var boxWidth = 600;  
var boxHeight = 600;
var dataSet = [];

for (var i = 0; i < numOfAsteroids; i++) {
  dataSet.push(Math.floor(Math.random() * (10 - 15) + 15));
}

// create asteroids
var svg = d3.select('svg');
var circle = svg.selectAll('circle').data(dataSet);
var circleEnter = circle.enter().append('svg:circle');
circleEnter.attr('class', 'circle');
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

// make player dot
var drag = d3.behavior.drag()  
             .on('dragstart', function() { player.style('fill', 'red'); })
             .on('drag', function() { player.attr('cx', d3.event.x).attr('cy', d3.event.y); })
             .on('dragend', function() { player.style('fill', 'black'); });

var player = svg.selectAll('.draggableCircle')  
                .data([{ x: (boxWidth / 2), y: (boxHeight / 2), r: 10 }])
                .enter()
                .append('svg:circle')
                .attr('class', 'draggableCircle')
                .attr('cx', function(d) { return d.x; })
                .attr('cy', function(d) { return d.y; })
                .attr('r', function(d) { return d.r; })
                .call(drag)
                .style('fill', 'black');



// check if mouse is touching any asteroids
$( document ).ready(function() {
  $( '.circle' ).mouseenter(function() {
    console.log('test');
  });
});

