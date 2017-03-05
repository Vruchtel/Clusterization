d3.select("h2").style("color", "blue");
d3.select("h2").style("text-align", "center");

d3.selectAll("p").style("font-family", "fantasy");

d3.selectAll("p")
  .data([8, 10, 12, 14])
    .style("font-size", function(d) { return d + "px"; });
    
var p = d3.select("body")
  .selectAll("p")
  .data([8, 10, 12, 14, 20, 25]);
  
 
p.enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
    
//p.exit().remove();

/*d3.select("body").transition()
	.duration(2500)
    .style("background-color", "black");*/
    
