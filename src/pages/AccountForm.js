import React, { useState } from "react";

const AccountForm = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };
  const handleSave = () => {
    // Add your save logic here
    console.log("Save button clicked");
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Submit button clicked");
  };

  return (
    <div>
      <div className="p-4 border border-gray bg-[#FFF]">
        <div className="flex justify-between mb-4 mx-2">
          <p>Edit Account Information</p>
          <p className="text-xs">* required fields</p>
        </div>
        <div className="mb-4 flex">
          <label for="email" className="text-gray-700 w-64">
            E-mail *<p className="text-xs">your login e-mail address</p>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="firstname" className="text-gray-700 w-64">
            First Name *
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="lastname" className="text-gray-700 w-64">
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="address" className="text-gray-700 w-64">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="email" className="text-gray-700 w-64">
            Postcode *
          </label>
          <input
            type="number"
            id="postcode"
            name="postcode"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="city" className="text-gray-700 w-64">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="state" className="text-gray-700 w-64">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="country" className="text-gray-700 w-64">
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="company" className="text-gray-700 w-64">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="optional"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="tax" className="text-gray-700 w-64">
            Tax ID
          </label>
          <input
            type="text"
            id="tax"
            name="tax"
            placeholder="optional"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="website" className="text-gray-700 w-64">
            Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="optional"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="service" className="text-gray-700 w-64">
            Service Notifications
          </label>
          <input
            type="text"
            id="service"
            name="service"
            placeholder="Disabled (You will not receive important"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-4 flex">
          <label for="invoices" className="text-gray-700 w-64">
            Receive Email Invoices
          </label>
          <input
            type="text"
            id="invoices"
            name="invoices"
            placeholder="Disabled"
            className="w-full p-2 input-field"
          />
        </div>
        <div className="mb-2">
          <textarea
            id="comment"
            name="comment"
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            rows="4"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>
        <div className="flex">
          <div className="mb-4">
            <button onClick={handleSave} className="save-button">
              Save
            </button>
          </div>
          <div>
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
        <div className="border border-gray mt-8 mb-4"> </div>
        <div className="mb-2">
          <p>
            Password <span className="span-text">(change)</span>
          </p>
        </div>
        <div className="mb-8 flex">
          <label for="password" className="text-gray-700 w-64">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="..........."
            className="w-full p-2 input-field"
          />
        </div>
        <div className="border border-gray mt-4 mb-4"> </div>
        <div className="span-text mb-8">Delete Account</div>
      </div>
    </div>
  );
};

export default AccountForm;
