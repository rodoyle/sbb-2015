/**
 * Created by rileyd on 19/04/15.
 */
(function() {
  var svg = d3.select('#cell-diagram')
    .selectAll('svg')
    .data([
      {}
    ])
    .enter()
    .append('svg')
      .attr('width', 50)
    ;

  svg.selectAll('circle')
    .data([{}])  //get that item's data
    .enter().append('circle');

}());
