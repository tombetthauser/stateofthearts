export default class BoxPlot {
  constructor(input) {
    this.title = input.title;
    this.data = input.data;
    this.tag = input.tag;

    this.width = input.width || 600;
    this.height = input.height || 450;
    this.innerWidth = (input.width - 50) || 550;
    this.innerHeight = (input.height - 50) || 400;

    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 30 };
    this.color = input.color || "#ddd";
    this.angle = input.angle || false;
  }

  render() {
    // set the dimensions and margins of the graph
    let margin = {top: 10, right: 30, bottom: 30, left: 40},
      width = 400 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select(this.tag)
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + (margin.top - 290) + ")")

    svg.append("text")
      .attr("x", (width / 2))
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text("Value vs Date Graph");

    console.log(this.data)
    // create dummy data
    // let data = [];
    // for (let i = 0; i < this.data.length; i++) {
    //   console.log(this.data[i])
    // }
    // this.data.map(ele => ele.value)
    let data = [12,4,11,13,12,22,13,4,15,16,18,19,20,12,11,9]
    console.log(data)

    // Compute summary statistics used for the box:
    let data_sorted = data.sort(d3.ascending)
    let q1 = d3.quantile(data_sorted, .25)
    let median = d3.quantile(data_sorted, .5)
    let q3 = d3.quantile(data_sorted, .75)
    let interQuantileRange = q3 - q1
    let min = q1 - 1.5 * interQuantileRange
    let max = q1 + 1.5 * interQuantileRange

    // Show the Y scale
    let y = d3.scaleLinear()
      .domain([0, Math.max(...data)])
      .range([height, 0]);
    svg.call(d3.axisLeft(y))


    // a few features for the box
    // let center = 200
    // let width = 100

    width = Math.floor(Math.random() * 100) + 100;
    let center = 150;
    let offset = Math.random() > 0.5 ? Math.floor(Math.random() * 45) : Math.floor(Math.random() * -45);
    // let offset = Math.floor(Math.random() * 45);
    // Show the main vertical line

    svg
    .append("line")
      .attr("x1", center - offset)
      .attr("x2", center + offset)
      .attr("y1", y(min) )
      .attr("y2", y(max) )
      .attr("stroke", this.color)

    // Show the box
    svg
    .append("rect")
      .attr("x", center - width/2)
      .attr("y", y(q3) )
      .attr("height", (y(q1)-y(q3)) )
      .attr("width", width )
      .attr("stroke", this.color)
      .style("fill", "white")

    // show median, min and max horizontal lines
    svg
    .selectAll("toto")
    .data([min, median, max])
    .enter()
    .append("line")
      .attr("x1", center-width/2)
      .attr("x2", center+width/2)
      .attr("y1", function(d){ return(y(d))} )
      .attr("y2", function(d){ return(y(d))} )
      .attr("stroke", this.color)
  }
}










// // Everything below is styling and is not necessary for the basic graph to render.

// // Deals with visual placement of graph.
// svg.attr("height", this.height).attr("width", this.width);

// // Deals with title text.
// svg.append("text")
//   .attr("x", (this.width / 2) - 20)
//   .attr("text-anchor", "middle")
//   .attr("y", -10)
//   .text(this.title);

// // Creates and labels X Axis & Y Axis    
// let xAxis;
// if (this.angle === true) {
//   xAxis = g => g
//     .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//     .attr("transform", "translate(10,0)rotate(30)")
//     .style("letter-spacing", "-0.5px")
//     .style("text-anchor", "start")
//     .style("font-size", "10px");
// } else {
//   xAxis = g => g
//     .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
//     .call(d3.axisBottom(x));
// }

// let yAxis = g => g
//   .attr("transform", `translate(${this.margin.left},0)`)
//   .call(d3.axisLeft(y)
//     .tickFormat(d3.format(".0%")));

// svg.append("g").call(xAxis);
// svg.append("g").call(yAxis);
