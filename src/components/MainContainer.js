import React from "react";
import LineChartContainer from "./LineChartContainer";
import BarChartContainer from "./BarChartContainer";
import AccountsWatchlist from "./AccountsWatchlist";
import TotalCashFlow from "./TotalCashFlow";

const MainContainer = () => {
  return (
    <div className="bg-gray-100 w-full h-full grid grid-cols-2 gap-5 p-10">
      <div className="flex">
        <LineChartContainer />
      </div>
      <div className="flex">
        <BarChartContainer />
      </div>
      <div className="flex">
        <TotalCashFlow />
      </div>
      <div className="flex">
        <AccountsWatchlist />
      </div>
    </div>
  );
};

export default MainContainer;
