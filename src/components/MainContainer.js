import React from "react";
import LineChartContainer from "./LineChartContainer";
import BarChartContainer from "./BarChartContainer";
import AccountsWatchlist from "./AccountsWatchlist";
import TotalCashFlow from "./TotalCashFlow";

const MainContainer = () => {
  return (
    <div className="bg-gray-100 w-full h-full grid grid-cols-2">
      <div className="flex items-center justify-center mx-10">
        <LineChartContainer />
      </div>
      <div className="flex items-center justify-center mx-10">
        <BarChartContainer />
      </div>
      <div className="flex items-center justify-center mx-10">
        <TotalCashFlow />
      </div>
      <div className="flex items-center justify-center mx-10">
        <AccountsWatchlist />
      </div>
    </div>
  );
};

export default MainContainer;
