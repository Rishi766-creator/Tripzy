import React from "react";
import { FaHome, FaHistory, FaChartLine, FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Nav = useNavigate();

  const navItems = [
    { icon: <FaHome size={26} />, label: "Home", path: "/Home" },
    { icon: <FaHistory size={26} />, label: "Logs", path: "/Trip" },
    { icon: <FaChartLine size={26} />, label: "Stats", path: "/Stat" },
    { icon: <FaGift size={26} />, label: "Rewards", path: "/Reward" },
  ];

  return (
    <div className="flex justify-around items-center bg-teal-600 text-white py-2  shadow-lg">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => Nav(item.path)}
        >
          <div className="mb-1">{item.icon}</div>
          <p className="text-sm font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
