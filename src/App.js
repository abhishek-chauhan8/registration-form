import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col items-center  h-[100vh] bg-slate-300 ">
      <form className=" mt-2">
        <label htmlFor="firstName">First Name</label>

        <br />

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          id="firstName"
          value={FormData.firstName}
          onChange={changeHandler}
        ></input>

        <br />

        <label htmlFor="lastName">Last Name</label>

        <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          id="lastName"
          value={FormData.lastName}
          onChange={changeHandler}
        ></input>

        <br />

        <label htmlFor="email">Email Address</label>

        <br />

        <input
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
          value={FormData.email}
          onChange={changeHandler}
        ></input>

        <br />

        <label htmlFor="country">Country</label>
        <br />

        <select
          name="country"
          id="country"
          value={FormData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>USA</option>
          <option>Denmark</option>
          <option>Russia</option>
        </select>

        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />

        <input
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          id="streetAddress"
          value={FormData.streetAddress}
          onChange={changeHandler}
        ></input>

        <br />

        <label htmlFor="city">City</label>

        <br />

        <input
          type="text"
          placeholder="City"
          name="city"
          id="city"
          value={FormData.city}
          onChange={changeHandler}
        ></input>

        <br />

        <label htmlFor="state">State / Province</label>

        <br />

        <select
          name="state"
          id="state"
          value={FormData.state}
          onChange={changeHandler}
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option>Uttar Pradesh</option>
          <option>Hayana</option>
          <option>Delhi</option>
          <option>Uttrakhand</option>
        </select>

        <br />

        <label htmlFor="zipCode">ZIP / Postal Code</label>

        <br />

        <input
          type="text"
          placeholder="Zip / Postal Code"
          name="zipCode"
          id="zipCode"
          value={FormData.zipCode}
          onChange={changeHandler}
        ></input>
      </form>
    </div>
  );
}

export default App;
