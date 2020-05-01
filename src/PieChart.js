export default class PieChart {
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

    this.rotation = input.rotation || false;
    this.pathWidth = input.pathWidth || 1;
  }

  render() {
    let newData = {};
    for (let i = 0; i < this.data.length; i++) {
      newData[this.data[i].name] = this.data[i].value; 
    }

    var radius = 135;
    var svg = d3.select(this.tag)
      .attr('height', 450)
      .attr('width', 400)
      .append("g")
      .attr("transform", "translate(170,195)")
      .style("z-index", 1)

    var color = d3.scaleOrdinal()
      .domain(newData)
      .range(d3.schemePastel2.reverse());

    var pie = d3.pie()
      .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(newData))

    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr('class', 'pie-path')
      .style("stroke", this.color)
      .style("stroke-width", this.pathWidth)
      .style("fill", "none");

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function (d) { return d.data.key })
      .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
      .style("font-size", 12)
      .style("text-anchor", "middle")

    svg.append("text")
      .attr("x", 5)
      .attr("text-anchor", "middle")
      .attr("y", -205)
      .text(this.title);
  }
}