
export default class LineGraph {
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
    var margin = { top: 30, right: 30, bottom: 30, left: 50 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(this.tag)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");



    // get the data
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function (data) {

      // add the x Axis
      var x = d3.scaleLinear()
        .domain([0, 1000])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // add the y Axis
      var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 0.01]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Compute kernel density estimation
      var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))
      var density = kde(data.map(function (d) { return d.price; }))

      // Plot the area
      svg.append("path")
        .attr("class", "mypath")
        .datum(density)
        .attr("fill", "pink")
        .attr("opacity", ".8")
        .attr("stroke", "pink")
        .attr("stroke-width", 0)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.line()
          .curve(d3.curveBasis)
          .x(function (d) { return x(d[0]); })
          .y(function (d) { return y(d[1]); })
        );
    });


    // Function to compute density
    function kernelDensityEstimator(kernel, X) {
      return function (V) {
        return X.map(function (x) {
          return [x, d3.mean(V, function (v) { return kernel(x - v); })];
        });
      };
    }
    function kernelEpanechnikov(k) {
      return function (v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
      };
    }
  }















  // render() {

  //   // This code is responsible for the actual rendering of the graph.

  //   // Links to the DOM and adds the graph element.
  //   let svg = d3.select(this.tag);
  //   let g = svg.append("g");
    
  //   let y = d3.scaleLinear()
  //     .domain([0, d3.max(this.data, d => d.value)])
  //     .range([this.innerHeight - this.margin.bottom, this.margin.top]);

      

  //   // This area might be responsible for the bar graph format.
  //   let x = d3.scaleBand()
  //     .domain(this.data.map(d => d.name))
  //     .range([this.margin.left, this.innerWidth - this.margin.right])

  //   g.selectAll("rect")
  //     .data(this.data)
  //     .join("rect").attr("x", d => x(d.name))
  //     .attr("height", d => y(0) - y(d.value))
  //     .attr("width", x.bandwidth())
  //     .attr("y", d => y(d.value))
  //     .attr("fill", this.color);


      
  //   // Everything below is styling and is not necessary for the basic graph to render.

  //   // Deals with visual placement of graph.
  //   svg.attr("height", this.height).attr("width", this.width);

  //   // Deals with title text.
  //   svg.append("text")
  //     .attr("x", (this.width / 2) - 20)
  //     .attr("text-anchor", "middle")
  //     .attr("y", -10)
  //     .text(this.title);

  //   // Creates and labels X Axis & Y Axis    
  //   let xAxis;
  //   if (this.angle === true) {
  //     xAxis = g => g
  //       .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
  //       .call(d3.axisBottom(x))
  //       .selectAll("text")
  //       .attr("transform", "translate(10,0)rotate(30)")
  //       .style("letter-spacing", "-0.5px")
  //       .style("text-anchor", "start")
  //       .style("font-size", "10px");
  //   } else {
  //     xAxis = g => g
  //       .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
  //       .call(d3.axisBottom(x));
  //   }
  
  //   let yAxis = g => g
  //     .attr("transform", `translate(${this.margin.left},0)`)
  //     .call(d3.axisLeft(y)
  //       .tickFormat(d3.format(".0%")));

  //   svg.append("g").call(xAxis);
  //   svg.append("g").call(yAxis);
  // }
}