import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import getRandomData from "../utils/getRandomData";

const BarChartContainer = () => {
  const [age, setAge] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = getRandomData(6); // Sample data for the bars
  const categories = [
    "older",
    "Jan 01-08",
    "Jan 09-16",
    "Jan 17-24",
    "Jan 25-31",
    "future",
  ];
  const color = "#55bc55";
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 30, left: 0 };
    const width = 720 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const x = d3.scaleBand().domain(categories).range([0, width]).padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create bars
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(categories[i]) + (x.bandwidth() - 16) / 2) // Center-align and set width to 1rem
      .attr("y", (d) => y(d))
      .attr("width", 16) // Set the width to 1rem (16px)
      .attr("height", (d) => height - y(d))
      .style("fill", color);
    g.selectAll(".bar").exit().remove();

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
  }, [data]);
  return (
    <div className="w-full bg-white rounded-lg h-[360px]">
      <div className="flex justify-between items-center px-5 py-4 border-gray-200 border-b-[1px]">
        <div className="text-xl font-semibold">Checking Account</div>
        <div className="flex gap-5">
          <button
            className="bg-gray-300 px-4 py-2 text-[#55bc55] rounded-lg font-bold"
            onClick={handleOpen}
          >
            New Sales Invoice
          </button>
        </div>
      </div>
      <div className="w-full p-4">
        <svg width={"720px"} height={"300px"} ref={svgRef}></svg>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className="bg-white p-10 rounded-lg w-[500px] h-2/6">
          Drag and drop a file or
          <span className="text-blue-500 cursor-pointer hover:text-blue-700">
            Upload
          </span>{" "}
          a file
          <div className="border border-black border-dashed my-4 h-3/4 flex justify-center items-center cursor-pointer hover:bg-gray-100 hover:text-lg transition delay-50 duration-300 ease-in-out">
            Drag and drop
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BarChartContainer;
