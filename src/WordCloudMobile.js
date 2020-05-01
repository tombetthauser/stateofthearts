export default class WordCloudMobile {
  constructor(input) {
    this.title = input.title;
    this.data = input.data;
    this.tag = input.tag;

    this.width = input.width || 1000;
    this.height = input.height || 1500;
    this.innerWidth = (input.width - 50) || 550;
    this.innerHeight = (input.height - 50) || 400;

    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 0 };
    this.color = input.color || null;
    this.sideways = input.sideways || false;

    this.multiplier = input.multiplier || 5;
    this.minSize = input.minSize || 5;
  }

  render() {
    if (!this.sideways) {
      var svg = d3.select(this.tag).append("svg")
      // .style("margin-top", 1000000)
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(-115,-32.5)");

      let multiplier = this.multiplier;
      let minSize = this.minSize;
      let height = this.height;
      let width = this.width;
      let color = this.color;

      var layout = d3.layout.cloud()
        .size([this.width, this.height]) // 750,000
        .words(this.data.map(function (d) { return {
          text: d.name, 
          size: (d.value * multiplier) >= minSize ? (d.value * multiplier) : minSize
        }; }))
        .padding(5)
        .rotate(function () { return 90; })
        .fontSize(function (d) { return d.size; })
        .on("end", draw);
      layout.start();

      function draw(words) {
        svg
          .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function (d) { return (d.size + "px"); })
          .style(color ? "fill" : null, color)
          .style("opacity", "0.85")
          .style("text-transform", "capitalize")
          .style("font-weight", "200")
          .attr("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    } else {
      var svg = d3.select(this.tag).append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .style("margin-top", 500)
        .append("g")
        .attr("transform", "translate(-50,-350)");
  
      var layout = d3.layout.cloud()
        .size([this.width, this.height])
        .words(this.data.map(function (d) { return { text: d.name, size: (d.value * 5) }; }))
        .padding(5)
        .rotate(function () { return 90; })
        .fontSize(function (d) { return d.size; })
        .on("end", draw);
      layout.start();
  
      function draw(words) {
        svg
          .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function (d) { return (d.size + "px"); })
          .style("fill", this.color)
          .style("opacity", "0.75")
          .style("font-weight", "200")
          .style("text-transform", "capitalize")
          .attr("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    }
  }
}