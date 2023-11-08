import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const LineChartContainer = () => {
  const [age, setAge] = useState(null);
  const [chartData] = useState([80, 50, 130, 200, 150, 100, 125, 90, 160]);
  const svgRef = useRef();
  useEffect(() => {
    // setting svg
    const w = 680;
    const h = 250;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#ffffff")
      .style("width", "100%")
      .style("overflow", "visible");

    // setting the scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, w]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData)])
      .range([h, 0]);

    const generateScaledline = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    // setting axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(chartData.length)
      .tickFormat((i) => i + 1);

    // Hide x-axis lines and gridlines
    svg
      .append("g")
      .call(xAxis)
      .attr(`transform`, `translate(0,${h})`)
      .style("color", "gray")
      .style("font-size", "1.2rem")
      .selectAll("line")
      .style("display", "none"); // Hide x-axis gridlines

    svg.selectAll(".domain").style("display", "none"); // Hide x-axis line

    // setting chartData for svg
    svg
      .selectAll(".line")
      .data([chartData])
      .join("path")
      .attr("d", (d) => generateScaledline(d))
      .attr("fill", "none")
      .attr("stroke", "green");
  }, [chartData]);

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex justify-between items-center px-5 py-4 border-gray-200 border-b-[1px]">
        <div className="text-xl font-semibold">Checking Account</div>
        <div className="flex gap-5">
          <FormControl size="small">
            <InputLabel id="demo-simple-select-label">Manage</InputLabel>
            <Select className="w-[150px]" labelId="demo-simple-select-label">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <Select className="w-[150px]" defaultValue={"January"}>
              <MenuItem value={"January"}>January</MenuItem>
              <MenuItem value={"February"}>February</MenuItem>
              <MenuItem value={"March"}>March</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="w-full py-10 px-5">
        <svg className="w-full" ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default LineChartContainer;
