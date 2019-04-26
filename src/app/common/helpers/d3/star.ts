import * as d3 from "d3";

export const paintStars: Function = mark => {
  const deletedMark: number = Math.round(mark / 2);
  const data: [] | {} = new Array(5)
    .fill(0)
    .map((elem, index) => (index < deletedMark ? 1 : 0));
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
      return `translate(${index * 70 + 240},50)`;
    })
    .append("path")
    .attr("d", d => {
      return d3
        .symbol()
        .type(d3.symbolStar)
        .size("900")();
    })
    .style("fill", d => (d > 0 ? "gold" : "white"));
};
