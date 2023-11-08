import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";

const Sidebar = () => {
  const [selectedSlider, setSelectedSlider] = useState("Dashboard");
  const siderElements = [
    {
      name: "Dashboard",
      element: <DashboardIcon />,
    },
    {
      name: "Accounts",
      element: <AccountBalanceWalletIcon />,
    },
    {
      name: "Payroll",
      element: <AttachMoneyIcon />,
    },
    {
      name: "Reports",
      element: <DescriptionIcon />,
    },
    {
      name: "Advisor",
      element: <PersonIcon />,
    },
    {
      name: "Contacts",
      element: <ContactsIcon />,
    },
  ];
  return (
    <div className="h-screen flex flex-col w-1/6 bg-white z-10 shadow-md">
      <div className="mx-auto my-5">
        <img
          className="w-52"
          src="https://www.finsmes.com/wp-content/uploads/2022/10/Assiduus_Global_Logo.jpeg"
          alt="logo"
        />
      </div>
      <ul className="mt-10">
        {siderElements.map((el) => (
          <li
            key={el.name}
            value={el.name}
            className={`w-full py-4 pl-10 cursor-pointer ${
              selectedSlider === el.name ? "text-white" : ""
            } ${selectedSlider === el.name ? "bg-[#55bc55]" : ""}`}
            onClick={(e) => setSelectedSlider(e?.target?.innerText)}
          >
            <span>{el.element}</span>
            <span className="pl-5">{el.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
