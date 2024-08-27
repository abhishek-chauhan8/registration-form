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
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the form data");
    console.log(FormData);
  }
  return (
    <div className="flex flex-col items-center  bg-white">
      <form
        className=" shadow-md bg-gray-50 w-[50%]  mx-auto px-5 "
        onSubmit={submitHandler}
      >
        <div className="flex justify-center text-3xl tracking-wide leading-normal font-bold ">
          <h1>Registration Form</h1>
        </div>
        <label htmlFor="firstName" className="tracking-wider">
          First Name
        </label>
        <br />
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          id="firstName"
          value={FormData.firstName}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700 border-t-yellow-200 border-b-blue-200 rounded-md  border w-full h-10 box-border"
        />

        <br />

        <label htmlFor="lastName" className="tracking-wider">
          Last Name
        </label>

        <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          id="lastName"
          value={FormData.lastName}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700 text border-b-yellow-200 border-t-blue-200 rounded-md  border w-full h-10 box-border"
        ></input>

        <br />

        <label htmlFor="email" className="tracking-wider">
          Email Address
        </label>

        <br />

        <input
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
          value={FormData.email}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700 border-t-yellow-200 border-b-blue-200 rounded-md  border w-full h-10 box-border"
        ></input>

        <br />

        <label htmlFor="country" className="tracking-wider">
          Country
        </label>
        <br />

        <select
          name="country"
          id="country"
          value={FormData.country}
          onChange={changeHandler}
          className=" mt-2 mb-1 text-base  text-gray-700 border-b-yellow-200 border-t-blue-200 rounded-md  border w-full h-10 box-border"
        >
          <option>India</option>
          <option>USA</option>
          <option>Denmark</option>
          <option>Russia</option>
        </select>

        <br />

        <label htmlFor="streetAddress" className="tracking-wider">
          Street Address
        </label>
        <br />

        <input
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          id="streetAddress"
          value={FormData.streetAddress}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base text-gray-700 border-t-yellow-200 border-b-blue-200 rounded-md  border w-full h-10 box-border"
        ></input>

        <br />

        <label htmlFor="city" className="tracking-wider">
          City
        </label>

        <br />

        <input
          type="text"
          placeholder="City"
          name="city"
          id="city"
          value={FormData.city}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700 border-b-yellow-200 border-t-blue-200 rounded-md  border w-full h-10 box-border"
        ></input>

        <br />

        <label htmlFor="state" className="tracking-wider">
          State / Province
        </label>

        <br />

        <select
          name="state"
          id="state"
          value={FormData.state}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700  border-t-yellow-200 border-b-blue-200 rounded-md  border w-full h-10 box-border"
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option>Uttar Pradesh</option>
          <option>Haryana</option>
          <option>Delhi</option>
          <option>Uttrakhand</option>
        </select>

        <br />

        <label htmlFor="zipCode" className="tracking-wider">
          ZIP / Postal Code
        </label>

        <br />

        <input
          type="text"
          placeholder="110084"
          name="zipCode"
          id="zipCode"
          value={FormData.zipCode}
          onChange={changeHandler}
          className=" mt-2 mb-1  text-base  text-gray-700  border-b-yellow-200 border-t-blue-200 rounded-md  border w-full h-10 box-border"
        ></input>

        <fieldset className="mt-5">
          <legend className="tracking-wider">By Email</legend>

          <div className="flex items-start mb-5 mt-5">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={FormData.comments}
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <div>
              <label htmlFor="comments">Comments</label>
              <p className="text-gray-500 tracking-wide text-sm">
                Get notified when someone posts a comment on a posting
              </p>
            </div>
          </div>

          <div className="flex inline-start mb-5">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={FormData.candidates}
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <div>
              <label htmlFor="candidates">Candidates</label>
              <p className="text-gray-500 tracking-wide text-sm">
                Get notified when someone applies for a job
              </p>
            </div>
          </div>

          <div className="flex inline-start">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={FormData.offers}
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <div>
              <label htmlFor="offers">Offers</label>
              <p className="text-gray-500 tracking-wide text-sm">
                Get notified when a candidate accepts or rejects a offer
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="tracking-wider mb-1"> Push Notification</legend>

          <p className="text-gray-500 tracking-wide text-sm">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="mb-3 mt-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <label htmlFor="pushEverything" className=" tracking-wide">
              Everything
            </label>
          </div>

          <div className="mb-3">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <label htmlFor="pushEmail" className=" tracking-wide ">
              Same as email
            </label>
          </div>

          <div className="mb-3">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No push Notifications"
              onChange={changeHandler}
              className=" ml-8 mb-2 mr-[3%] mt-2 transform scale-150"
            ></input>

            <label htmlFor="pushNothing" className=" tracking-wide ">
              No push Notifications
            </label>
          </div>
        </fieldset>

        <div className="text-center flex items-center justify-center py-2 px-4">
          <button className=" tracking-wide text-xl  bg-blue-500 text-white rounded-md font-bold py-2 px-14 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
