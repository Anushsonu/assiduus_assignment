import React from "react";

const getRandomData = (len) => {
  let randomData = [];
  for (let i = 0; i < len; i++) {
    randomData.push(Math.floor(Math.random() * 100));
  }
  console.log("hook data :", randomData);
  return randomData;
};

export default getRandomData;
