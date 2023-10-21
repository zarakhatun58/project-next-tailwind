import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import AccountForm from "../Components/AccountForm/AccountForm";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between main-contain mt-4 mb-4">
        <p className="text-sm">Control Panel - Account Details</p>
        <p>
          Logged In as Point Ditch <span className="h-text">(Sign Out)</span>
        </p>
      </div>
      <div className="flex main-contain">
        <div className="w-1/4 bg-[#F9F9F9]">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <AccountForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
