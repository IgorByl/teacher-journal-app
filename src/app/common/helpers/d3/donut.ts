import * as d3 from "d3";

export const donutChart: Function = (data) => {
  const width: number = 500;
  const height: number = 500;
  const margin: number = 10;

  const radius: number = Math.min(width, height) / 2 - margin;

  const svg: d3 = d3
    .select("#donutChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const color: d3 = d3.scaleOrdinal(d3.schemeCategory10);

  const pie: d3 = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value;
    });

  const dataReady: d3 = pie(d3.entries(data));

  const arc: d3 = d3
    .arc()
    .innerRadius(radius * 0.3)
    .outerRadius(radius * 0.8);

  const outerArc: d3 = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  svg
    .selectAll("allSlices")
    .data(dataReady)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(d) {
      return color(d.data.key);
    })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

  svg
    .selectAll("allPolylines")
    .data(dataReady)
    .enter()
    .append("polyline")
    .attr("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr("points", function(d) {
      const posA: d3 = arc.centroid(d);
      const posB: d3 = outerArc.centroid(d);
      const posC: d3 = outerArc.centroid(d);
      const midangle: d3 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
      return [posA, posB, posC];
    });

  svg
    .selectAll("allLabels")
    .data(dataReady)
    .enter()
    .append("text")
    .attr("stroke", "white")
    .text(function(d) {
      return d.data.key;
    })
    .attr("transform", function(d) {
      const pos: d3 = outerArc.centroid(d);
      const midangle: d3 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    })
    .style("text-anchor", function(d) {
      const midangle: d3 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? "start" : "end";
    });
};
