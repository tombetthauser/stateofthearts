export default class BarGraph {
  constructor(input) {
    this.title = input.title;
    this.data = input.data;
    this.tag = input.tag;

    this.width = input.width || 600;
    this.height = input.height || 450;
    this.innerWidth = (input.width - 50) || 550;
    this.innerHeight = (input.height - 50) || 400;

    this.margin = input.margin || { top: 50, right: 20, bottom: 20, left: 30 };
    this.color = input.color || "#000";
    this.angle = input.angle || false;
    this.strokeWidth = input.strokeWidth || 1;
  }

  render() {
    // This code is responsible for the actual rendering of the graph.

    // Links to the DOM and adds the graph element.
    let svg = d3.select(this.tag);
    let g = svg.append("g");

    let y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.value)])
      .range([this.innerHeight - this.margin.bottom, this.margin.top]);



    // This area might be responsible for the bar graph format.
    let x = d3.scaleBand()
      .domain(this.data.map(d => d.name))
      .range([this.margin.left, this.innerWidth - this.margin.right])
      .padding(0.2)

    g.selectAll("rect")
      .data(this.data)
      .join("rect").attr("x", d => x(d.name))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.value))
      .style("stroke", this.color)
      .style("stroke-width", this.strokeWidth)
      .style("fill", "none");



    // Everything below is styling and is not necessary for the basic graph to render.

    // Deals with visual placement of graph.
    svg.attr("height", this.height).attr("width", this.width);

    // Deals with title text.
    svg.append("text")
      .attr("x", (this.width / 2) - 20)
      .attr("text-anchor", "middle")
      .attr("y", -10)
      .text(this.title);

    // Creates and labels X Axis & Y Axis    
    let xAxis;
    if (this.angle === true) {
      xAxis = g => g
        .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(10,0)rotate(30)")
        .style("letter-spacing", "-0.5px")
        .style("text-anchor", "start")
        .style("font-size", "10px");
    } else {
      xAxis = g => g
        .attr("transform", `translate(0,${this.innerHeight - this.margin.bottom})`)
        .call(d3.axisBottom(x));
    }

    let yAxis = g => g
      .attr("transform", `translate(${this.margin.left},0)`)
      .call(d3.axisLeft(y)
        .tickFormat(d3.format(".0%")));

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }
}