class WordCloud {
  constructor(input) {
    this.title = input.title;
    this.data = input.data;
    this.tag = input.tag;
    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 0 };
    // this.margin = input.margin || { top: 0, right: 0, bottom: 0, left: 0 };
    this.innerHeight = (input.height - 50) || 400;
    this.innerWidth = (input.width - 50) || 550;
    this.multiplier = input.multiplier || 5;
    this.sideways = input.sideways || false;
    this.minSize = input.minSize || 5;
    this.height = input.height || 750;
    this.width = input.width || 1000;
    this.color = input.color || null;
    this.parent = input.parent || "#the-data";
  }

  render() {
    if (!this.sideways) {
      var svg = d3.select(this.tag).append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      // .attr("transform", "translate(-75,-32.5)");
      let multiplier = this.multiplier;
      let minSize = this.minSize;
      let height = this.height;
      let width = this.width;
      let color = this.color;
      var layout = d3.layout.cloud()
        .size([this.width, this.height])
        .words(this.data.map(function (d) { return {
          text: d.name, 
          size: (d.value * multiplier) >= minSize ? (d.value * multiplier) : minSize
        }; }))
        .padding(5)
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
          .style("opacity", "0.75")
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
        .size([450, 1800])
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
          .style("text-transform", "capitalize")
          .style("font-weight", "200")
          .attr("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    }
    
    // Add title element before word cloud...

    const thisCloud = document.querySelector(this.tag);
    const parentEle = document.querySelector(this.parent);
    const newTitle = document.createElement("h3");
    newTitle.classList.add("graph-title");

    newTitle.innerHTML = this.title;
    parentEle.insertBefore(newTitle, thisCloud);


    // set svg height to match wordCloud height...

    if (thisCloud) {
      thisCloud.style.height = this.height + "px";
      // document.querySelector("#loading-div").innerHTML += `> ${this.tag} data loaded<br>`
      console.log(this.tag);
    } else {
      console.log(false);
    }
  }
}