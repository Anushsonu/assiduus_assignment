import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TotalCashFlow = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = [
    { category: "August", v1: 30, v2: 50 },
    { category: "September", v1: 40, v2: 60 },
    { category: "October", v1: 20, v2: 40 },
    { category: "November", v1: 50, v2: 70 },
    { category: "December", v1: 50, v2: 70 },
    { category: "January", v1: 50, v2: 70 },
  ];
  const svgRef = useRef();

  useEffect(() => {
    // Access the SVG element using useRef
    const colorV2 = "#29AB87"; // Color for v1
    const colorV1 = "#55bc55"; // Color for v2

    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 720 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.v1 + d.v2)])
      .nice()
      .range([height, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create v1 bars
    g.selectAll(".bar-v1")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-v1")
      .attr("x", (d) => x(d.category) + (x.bandwidth() - 16) / 2) // Center-align and set width to 1rem
      .attr("y", (d) => y(d.v1))
      .attr("width", 16) // Set the width to 1rem (16px)
      .attr("height", (d) => height - y(d.v1))
      .style("fill", colorV1)
      .style("border-radius", "10px");

    // Create v2 bars on top of v1 bars
    g.selectAll(".bar-v2")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-v2")
      .attr("x", (d) => x(d.category) + (x.bandwidth() - 16) / 2) // Center-align and set width to 1rem
      .attr("y", (d) => y(d.v2))
      .attr("width", 16) // Set the width to 1rem (16px)
      .attr("height", (d) => y(d.v1) - y(d.v2))
      .style("fill", colorV2)
      .style("border-radius", "10px");

    // Create x-axis
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .style("color", "gray")
      .style("font-size", "1rem");

    // Hide x-axis line and gridlines
    g.selectAll(".x-axis path").style("display", "none");
    g.selectAll(".x-axis line").style("display", "none");

    // Style x-axis text
    g.selectAll(".x-axis text")
      .attr("dy", "1em")
      .style("text-anchor", "middle");
    // g.append("g").attr("class", "y-axis").call(d3.axisLeft(y));
  }, [data]);

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex justify-between items-center px-5 py-4 border-gray-200 border-b-[1px]">
        <div className="text-xl font-semibold">Checking Account</div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-[#29AB87] w-7 h-7 rounded-lg"> </div>
            <div>In</div>
          </div>
          <div className="flex items-center gap-2">
            <div className=" bg-[#55BC55] w-7 h-7 rounded-lg"> </div>
            <div>Out</div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <svg width={"720px"} height={"300px"} ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default TotalCashFlow;
