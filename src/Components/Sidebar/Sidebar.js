import React from "react";
import "./Styles.css";

const Sidebar = () => {
  return (
    <div>
      <div className="w-64 h-screen bg-[#F9F9F9]">
        <nav className="p-4">
          <ul>
            <li className="py-2 border border-gray-300 mb-4">
              <a href="#" className="block sidebar-item px-4">
                Dashboard
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                Upgrade
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                Subscription Plan
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                Account
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                Payment
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                API Usage
              </a>
            </li>
            <li className="py-2 border border-gray-300 mb-4">
              <a href="#" className="block sidebar-item px-4">
                Other APIs
              </a>
            </li>
            <li className="py-2 border border-gray-300">
              <a href="#" className="block sidebar-item px-4">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
