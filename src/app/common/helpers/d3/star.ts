import * as d3 from "d3";

export const paintStars: Function = mark => {
  const devidedMark: number = Math.round(mark / 2);
  let i: number = 1;
  const data: [] | {} = new Array(5)
    .fill(0)
    .map((elem, index) => (index < devidedMark ? 1 : 0));
  const svg: d3 = d3
    .select("#star")
    .append("svg")
    .attr("width", "350")
    .attr("height", "100");

  svg
    .selectAll(".shapes")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "shapes")
    .attr("transform", index => {
      i = i + 60;
      return `translate(${ i },50)`;
    })
    .append("path")
    .attr("d", d => {
      return d3
        .symbol()
        .type(d3.symbolStar)
        .size("500")();
    })
    .style("fill", d => (d > 0 ? "gold" : "white"));
};
