import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-end shadow-xl px-4 py-5">
      <div className="header-nav flex items-center">
        <button className="bg-gray-100 rounded-l-lg py-1 px-2">
          <SearchIcon />
        </button>
        <input
          className="bg-gray-100 w-60 rounded-r-lg py-1 border border-transparent focus:outline-none mr-3"
          type="text"
        />
        <span>
          <NotificationsIcon className="mr-5" />
        </span>
        <span>
          <Avatar src="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" />
        </span>
        <span>
          <ArrowDropDownIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
