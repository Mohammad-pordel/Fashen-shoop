import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <NavLink to="/panel">
            <AiOutlineHome className="icon" />
            صفحه اصلی
        </NavLink>
        <NavLink to="/panelproducts">
            <MdProductionQuantityLimits className="icon" />
            محصولات
        </NavLink>
        <NavLink to="/panelcomments">
            <BiCommentDetail className="icon" />
            کامنت ها
        </NavLink>
        <NavLink to="/panelusers">
            <FiUsers className="icon" />
            کاربران
        </NavLink>
        <NavLink to="/panelorders">
              <BsBagCheck className="icon" />
              سفارشات
        </NavLink>
        <NavLink to="/paneloffs">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}
